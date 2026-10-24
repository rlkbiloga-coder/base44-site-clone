---
name: clone-site
description: Clona e mapeia um site inteiro (frontend + rotas de backend/API detectadas) com Python
argument-hint: <url-do-site> [--depth N] [--out DIR]
---

# clone-site

Crawler/clonador de sites em Python (stdlib, sem dependências).

O que faz:
1. Mapeia todas as rotas/páginas do domínio (crawl BFS com limite de profundidade).
2. Baixa HTML, CSS, JS e imagens, preservando a estrutura de pastas (clone do frontend).
3. Analisa os JS/HTML e extrai rotas de backend/API (fetch, axios, XMLHttpRequest, /api/...).
4. Detecta formulários (métodos e action).
5. Gera relatório: `report/site_map.md` + `report/site_map.json`.

Uso:
```
run_skill("clone-site", "https://exemplo.com --depth 3 --out meu_clone")
```

Argumentos:
- `<url>` (obrigatório): URL base do site.
- `--depth N`: profundidade máxima do crawl (padrão 3).
- `--out DIR`: pasta de saída (padrão: `site_clone_<dominio>`).
- `--same-domain-only`: restringe o crawl ao domínio base (padrão: ligado; use `--follow-external` para seguir links externos de 1 nível).

Limitações:
- Não executa JavaScript (sites 100% SPA renderizam pouco HTML; os endpoints são extraídos dos .js baixados).
- O "F12 completo" (headers, cookies, rede em runtime) requer navegação real; para isso usar o skill/browser com browserbase quando necessário.

Aviso: usar apenas em sites que você tem permissão para clonar/mapear.
