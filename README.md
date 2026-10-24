# base44-site-clone

Clone do site base44.com/pt gerado com o skill clone-site (crawler Python stdlib).

- `site/`: conteúdo de base44.com (deployado no GitHub Pages)
- `external-assets/`: assets de outros domínios (media.base44.com, etc.)
- `_report/site_map.md|json`: mapa completo do site (páginas, formulários)
- `scripts/clone_site.py`: crawler

Workflows:
- `pages.yml`: deploy automático no GitHub Pages a cada push na main
- `reclone.yml`: re-clone manual (Actions > Re-clone do site > Run workflow)

Nota: conteúdo é material de marketing da Base44 (base44.com), clonado para fins de estudo/arquivo. Sem fins lucrativos.
