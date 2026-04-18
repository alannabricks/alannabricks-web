# AlannaBricks

Sitio corporativo de **AlannaBricks** — consultoría en datos, machine learning, data science e IA, enfocada en problemas críticos de clientes internacionales.

## Estado

- **Fase:** prototipo v1 desplegable.
- **Sitio actual:** [alannabricks.cl](https://alannabricks.cl/) — placeholder GoDaddy Website Builder (a reemplazar).
- **LinkedIn:** [linkedin.com/company/aabricks](https://www.linkedin.com/company/aabricks).

## Stack

- **Frontend:** Next.js 15 + React 19 + TailwindCSS 3.4 + TypeScript.
- **Output:** static export (`next.config.mjs` → `output: 'export'`).
- **Hosting:** **GitHub Pages** vía `actions/deploy-pages@v4`.
- **Dominio:** `alannabricks.cl` (DNS en GoDaddy, apuntando a GitHub Pages).
- **Bilingüe:** español (default) + inglés, rutas paralelas `/` y `/en/`.

## Comandos

```bash
npm install          # instalar deps
npm run dev          # desarrollo en http://localhost:3000
npm run build        # static export → out/
npm run typecheck    # tsc --noEmit
```

### Preview local del build

```bash
npm run build
docker run --rm -v "$(pwd)/out:/usr/share/nginx/html:ro" -p 8788:80 nginx:alpine
# http://localhost:8788
```

## Deploy

Push a `main` → workflow [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) build + publica en Pages automáticamente. No hay pasos manuales en consola.

- Custom domain: `public/CNAME` contiene `alannabricks.cl`.
- Jekyll desactivado: `public/.nojekyll` (ambos se copian a `out/` en build).

## Estructura

```
alannabricks/
├── doc/                         Documentación viva (diagnóstico, propuesta, preview, ADRs, changelog).
├── public/                      Assets estáticos + CNAME + .nojekyll + OG images.
├── src/
│   ├── app/                     App Router — rutas ES en la raíz y EN bajo /en/.
│   ├── components/              Header, Footer, Logo, PageShell y page-bodies compartidos.
│   └── lib/                     site.config.ts, i18n.ts (map ES↔EN), content.ts (diccionarios).
├── .github/workflows/           CI/CD (deploy a Pages).
├── next.config.mjs, tailwind.config.ts, tsconfig.json, postcss.config.mjs, package.json
└── CLAUDE.md, README.md
```

## A diferencia de phitec

- No hay sitio legacy con contenido: todo parte de cero a partir de LinkedIn + entrevista con el cliente.
- Rubro B2B tech → lenguaje de consultoría data/IA, no ingeniería industrial.
- **Hosting en GitHub Pages** (no S3 + CloudFront), un único entorno `main` (prod) hasta que el cliente pida staging.

---

Ver reglas globales del proyecto en [../CLAUDE.md](../CLAUDE.md).
