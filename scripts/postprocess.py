#!/usr/bin/env python3
"""Ajusta clone para GitHub Pages: prefixa links absolutos, converte paginas
sem extensao em <path>/index.html e cria 404.html de redirecionamento.
Uso: python3 postprocess.py <repo_base_url> <site_dir>
Ex: python3 postprocess.py /base44-site-clone ./site
"""
import os
import re
import shutil
import sys

PREFIX = sys.argv[1] if len(sys.argv) > 1 else ""
SITE = sys.argv[2] if len(sys.argv) > 2 else "./site"

ATTRS = ("href", "src", "action", "srcset", "data-href", "data-src")


def rewrite_html(path):
    with open(path, encoding="utf-8", errors="replace") as f:
        html = f.read()
    orig = html
    for a in ATTRS:
        # so caminhos absolutos do proprio site; URLs http/data ficam intactas
        html = re.sub(
            rf'({a}\s*=\s*)(["\'])/(?!/)',
            rf"\1\2{PREFIX}/",
            html,
        )
    # meta refresh / content com path absoluto
    html = re.sub(r'(content\s*=\s*["\']\d+;\s*url=)/(?!/)', r"\1" + PREFIX + "/", html)
    if html != orig:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        return True
    return False


def to_index_pages(d):
    """move paginas HTML sem extensao para <path>/index.html"""
    moved = 0
    for root, dirs, files in os.walk(d, topdown=False):
        for name in files:
            if "." in name:
                continue
            p = os.path.join(root, name)
            try:
                with open(p, "rb") as f:
                    head = f.read(512)
            except OSError:
                continue
            if b"<" not in head or b"html" not in head.lower():
                continue
            if name == "index":
                continue
            if os.path.isdir(p):
                continue
            try:
                os.makedirs(p, exist_ok=True)
                shutil.move(p, os.path.join(p, "index.html"))
            except (FileExistsError, OSError):
                shutil.move(p, p + ".html")
            moved += 1
    return moved


def main():
    pages = 0
    n_rew = 0
    for root, _, files in os.walk(SITE):
        for name in files:
            if name.endswith((".html", ".htm")):
                if rewrite_html(os.path.join(root, name)):
                    n_rew += 1
    pages = to_index_pages(SITE)
    # 404 fallback: redireciona pro caminho com prefixo do repo
    with open(os.path.join(SITE, "404.html"), "w") as f:
        f.write(
            "<!DOCTYPE html><html><head><meta charset=utf-8>"
            "<script>var p=location.pathname;"
            "if(p.indexOf('" + PREFIX + "')!==0){"
            "location.replace('" + PREFIX + "'+p);}else{"
            "location.replace('" + PREFIX + "/');}</script>"
            "</head><body></body></html>"
        )
    print(f"[postprocess] {n_rew} html reescritos, {pages} paginas -> index.html, prefixo={PREFIX}")


if __name__ == "__main__":
    main()
