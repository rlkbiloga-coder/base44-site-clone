#!/usr/bin/env python3
"""
clone-site: clona e mapeia um site inteiro (frontend + rotas de backend/API).
Uso: python3 run.py <url> [--depth N] [--out DIR] [--follow-external]
Stdlib only.
"""
import argparse
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from collections import deque
from html.parser import HTMLParser

UA = "Mozilla/5.0 (compatible; clone-site/1.0)"
MAX_DOWNLOAD_MB = 20
SKIP_EXT = (".zip", ".tar", ".gz", ".rar", ".7z", ".exe", ".dmg", ".mp4",
            ".avi", ".mkv", ".iso", ".pdf", ".woff2", ".ttf", ".eot")

PATTERNS = [
    re.compile(r"""fetch\(\s*[`'"]([^`'"]+)[`'"]"""),
    re.compile(r"""\.(?:get|post|put|patch|delete)\(\s*[`'"]([^`'"]+)[`'"]"""),
    re.compile(r"""axios\(\s*\{[^}]*?url\s*:\s*[`'"]([^`'"]+)[`'"]"""),
    re.compile(r"""XMLHttpRequest[^;]*?open\([^,]+,\s*[`'"]([^`'"]+)[`'"]"""),
    re.compile(r"""[`'"]((?:/api/|/v\d+/)[^`'"?#]+)[`'"]"""),
    re.compile(r"""(?:url|endpoint|baseURL|apiUrl|API_URL)\s*[:=]\s*[`'"]([^`'"]+)[`'"]"""),
]


def log(msg):
    print(msg, flush=True)


def fetch(url, binary=False, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": UA,
                                               "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = r.read(MAX_DOWNLOAD_MB * 1024 * 1024 + 1)
        if len(data) > MAX_DOWNLOAD_MB * 1024 * 1024:
            return None, None, None
        ctype = r.headers.get("Content-Type", "")
        return data, ctype, r.geturl()


def is_html(ctype, url):
    if ctype:
        return "text/html" in ctype or "application/xhtml" in ctype
    return not os.path.splitext(urllib.parse.urlparse(url).path)[1]


def is_js(ctype, url):
    if ctype:
        return "javascript" in ctype
    return url.endswith(".js") or url.endswith(".mjs")


def is_css(ctype, url):
    if ctype:
        return "text/css" in ctype
    return url.endswith(".css")


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links, self.assets, self.scripts = [], [], []
        self.forms = []
        self._form = None
        self._in_script = False
        self._script_buf = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])
        elif tag == "link" and a.get("href"):
            self.assets.append(a["href"])
        elif tag in ("img", "source", "video", "audio") and a.get("src"):
            self.assets.append(a["src"])
        elif tag == "script":
            if a.get("src"):
                self.scripts.append(a["src"])
            else:
                self._in_script = True
                self._script_buf = []
        elif tag == "form":
            self._form = {"action": a.get("action", ""),
                          "method": (a.get("method") or "get").upper(),
                          "inputs": []}
        elif tag in ("input", "textarea", "select") and self._form is not None:
            self._form["inputs"].append({
                "name": a.get("name", ""),
                "type": a.get("type", "text"),
            })

    def handle_endtag(self, tag):
        if tag == "form" and self._form is not None:
            self.forms.append(self._form)
            self._form = None
        elif tag == "script" and self._in_script:
            self._in_script = False
            self._script_buf.append("")

    def handle_data(self, data):
        if self._in_script:
            self._script_buf.append(data)


def norm(base, href):
    if not href or href.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
        return None
    full = urllib.parse.urljoin(base, href)
    p = urllib.parse.urlparse(full)
    if p.scheme not in ("http", "https"):
        return None
    clean = urllib.parse.urlunparse((p.scheme, p.netloc, p.path or "/",
                                     "", p.query, ""))
    return clean


def local_path(out_dir, url, is_dir_index=False):
    p = urllib.parse.urlparse(url)
    path = p.path.lstrip("/")
    if not path or is_dir_index:
        path = os.path.join(path, "index.html")
    path = os.path.normpath(path)
    if path.startswith(".."):
        return None
    full = os.path.join(out_dir, urllib.parse.urlparse(url).netloc, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    return full


def extract_endpoints(text, source):
    found = {}
    for rx in PATTERNS:
        for m in rx.finditer(text):
            ep = m.group(1).strip()
            if len(ep) > 2 and not ep.startswith("data:"):
                found.setdefault(ep, source)
    return found


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("url")
    ap.add_argument("--depth", type=int, default=3)
    ap.add_argument("--out", default=None)
    ap.add_argument("--follow-external", action="store_true")
    args = ap.parse_args()

    base = norm(args.url, args.url)
    if not base:
        log("ERRO: URL invalida")
        sys.exit(1)
    domain = urllib.parse.urlparse(base).netloc
    out_dir = args.out or f"site_clone_{domain.replace(':', '_')}"
    rep_dir = os.path.join(out_dir, "_report")
    os.makedirs(rep_dir, exist_ok=True)

    pages, assets, endpoints, forms = {}, [], {}, []
    visited, queue = set(), deque([(base, 0)])
    host_pages = {domain: []}

    log(f"[clone-site] alvo: {base} | depth={args.depth} | out={out_dir}")

    while queue:
        url, depth = queue.popleft()
        if url in visited or depth > args.depth:
            continue
        visited.add(url)
        host = urllib.parse.urlparse(url).netloc
        if host != domain and not args.follow_external:
            continue
        try:
            data, ctype, final = fetch(url)
        except Exception as e:
            log(f"  [skip] {url} -> {e}")
            continue
        if data is None:
            log(f"  [skip] {url} -> arquivo grande demais")
            continue
        url = final or url

        if is_html(ctype, url):
            text = data.decode("utf-8", "replace")
            if url not in pages:
                pages[url] = {"depth": depth, "size": len(data)}
                host_pages.setdefault(host, []).append(url)
            lp = local_path(out_dir, url, is_dir_index=True)
            if lp:
                open(lp, "wb").write(data)

            parser = PageParser()
            try:
                parser.feed(text)
            except Exception:
                pass
            page_eps = extract_endpoints("\n".join(parser._script_buf), url)
            for ep, src in page_eps.items():
                endpoints.setdefault(ep, src)
            for f in parser.forms:
                f["page"] = url
                forms.append(f)

            for href in parser.links:
                nxt = norm(url, href)
                if nxt and nxt not in visited and "#" not in href.split("?")[0]:
                    queue.append((nxt, depth + 1))
            for href in parser.assets:
                a = norm(url, href)
                if a:
                    assets.append(a)
            for href in parser.scripts:
                a = norm(url, href)
                if a:
                    assets.append(a)
                    queue.append((a, depth + 1))
            log(f"  [html ] {url} (links={len(parser.links)})")

        elif is_js(ctype, url) or is_css(ctype, url):
            lp = local_path(out_dir, url)
            if lp:
                open(lp, "wb").write(data)
            if is_js(ctype, url):
                text = data.decode("utf-8", "replace")
                for ep, src in extract_endpoints(text, url).items():
                    endpoints.setdefault(ep, src)
                # rotas relativas em JS (ex: "/users")
                for ep in re.findall(r"""[`'"](\/[a-z0-9_\-\/]+)[`'"]""",
                                     text):
                    if any(k in ep for k in ("api", "v1", "v2", "auth",
                                             "user", "admin", "graphql")):
                        endpoints.setdefault(ep, url)
            log(f"  [asset] {url}")
        else:
            lp = local_path(out_dir, url)
            if lp and not url.lower().endswith(SKIP_EXT):
                open(lp, "wb").write(data)
            assets.append(url)
            log(f"  [asset] {url}")

    # baixa assets faltantes
    seen_assets = set()
    for a in assets:
        if a in seen_assets:
            continue
        seen_assets.add(a)
        if a in visited:
            continue
        visited.add(a)
        try:
            data, ctype, _ = fetch(a)
            if data is not None and not a.lower().endswith(SKIP_EXT):
                lp = local_path(out_dir, a)
                if lp:
                    open(lp, "wb").write(data)
        except Exception:
            pass

    # relatorio
    report = {
        "base_url": base,
        "crawled_pages": len(pages),
        "pages": sorted(pages.keys()),
        "assets": sorted(seen_assets),
        "api_endpoints": dict(sorted(endpoints.items())),
        "forms": forms,
        "output_dir": out_dir,
    }
    with open(os.path.join(rep_dir, "site_map.json"), "w") as f:
        json.dump(report, f, indent=2, ensure_ascii=False)

    md = [f"# Mapa do site: {base}", "",
          f"- Paginas mapeadas: **{len(pages)}**",
          f"- Assets baixados: **{len(seen_assets)}**",
          f"- Endpoints de API detectados: **{len(endpoints)}**",
          f"- Formularios: **{len(forms)}**", "",
          "## Rotas detectadas (backend/API)"]
    for ep, src in sorted(endpoints.items()):
        md.append(f"- `{ep}`  <- {src}")
    md += ["", "## Formularios"]
    for f_ in forms:
        md.append(f"- `{f_['method']} {f_['action'] or '(mesma pagina)'}` "
                   f"em {f_['page']} | inputs: "
                   f"{', '.join(i['name'] or i['type'] for i in f_['inputs']) or '-'}")
    md += ["", "## Paginas"]
    for p in sorted(pages):
        md.append(f"- [{p}]({p}) (depth {pages[p]['depth']})")
    with open(os.path.join(rep_dir, "site_map.md"), "w") as f:
        f.write("\n".join(md))

    log(f"[clone-site] concluido: {len(pages)} paginas, "
        f"{len(seen_assets)} assets, {len(endpoints)} endpoints, "
        f"{len(forms)} formularios")
    log(f"[clone-site] relatorio: {rep_dir}/site_map.md")


if __name__ == "__main__":
    main()
