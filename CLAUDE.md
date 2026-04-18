# CLAUDE.md — Cliente: alannabricks

Overrides y contexto específico de **alannabricks**. Las reglas globales viven en [../CLAUDE.md](../CLAUDE.md) y aplican por defecto; este archivo solo registra lo particular del cliente.

---

## Estado

- **Fase:** prototipo v1 aprobado por el cliente, listo para deploy en GitHub Pages.
- **Sitio actual:** https://alannabricks.cl/ (placeholder GoDaddy; se reemplaza al cambiar DNS).
- **LinkedIn:** https://www.linkedin.com/company/aabricks
- **Repo:** `github.com/alannabricks/alannabricks-web` (privado, org AlannaBricks).
- **Git author local:** `leonardo.rodrigues@alannabricks.com`.
- **Propuesta comercial aceptada:** validada por el cliente (contenido, caso flagship, marca, bilingüe).

## Identificadores

- **Vertical:** consultoría data / IA / ML / DevOps. No hay `templates/verticals/data-ai/` todavía — si se gana un segundo cliente del rubro, extraer la receta.
- **Servicios (a validar con el cliente):** arquitectura de datos, ingeniería de datos, machine learning, inteligencia artificial, DevOps / MLOps, consultoría técnica.
- **Público:** B2B — empresas que necesitan modernizar su stack de datos o incorporar capacidades de ML/IA.
- **Stack actual:** GoDaddy Website Builder (DPS/2.0.0, hosteado en `sa-east-1`). Acceso a GoDaddy disponible para el decisor.

## Alcance previsto

- **Hosting:** **GitHub Pages** (decisión del cliente, 2026-04-18) — no AWS S3 + CloudFront como el resto del monorepo. Razón: menor costo operativo y deploy simple vía Actions al tener un único sitio estático bilingüe.
- **Un único entorno:** `main` (prod) = `alannabricks.cl`. Staging se agrega sólo si el cliente lo pide.
- **DNS:** registrador y zona siguen en **GoDaddy**, apuntando a los 4 IPs de GitHub Pages (185.199.108–111.153) para el ápice + CNAME `www` → `alannabricks.github.io`.
- **IaC:** no hay Terraform — la única infra es GitHub Pages (configurado por UI + workflow). No reintroducir `infra/` aquí salvo migración futura.
- **Greenfield:** no hay sitio legacy con contenido. Todo partió de LinkedIn + entrevista con el cliente.
- **Features iniciales:** formulario de contacto con fallback `mailto:` (sin backend). Upgrade a Lambda Function URL o Resend/Formspree cuando se necesite tracking.

## Overrides específicos

- Lenguaje y jerga: consultoría B2B tech. Usar vocabulario de data/ML/DevOps (pipelines, MLOps, data mesh, feature stores, observabilidad, etc.) — **no copiar texto ni tono de phitec** (que es ingeniería industrial).
- Casos/proyectos: probablemente anonimizados (NDAs). Preparar la ficha de caso para admitir "cliente confidencial" + industria + impacto medible.

## Próximos pasos

1. ✅ Diagnóstico y propuesta validados con el cliente.
2. ✅ Prototipo v1 implementado (Next.js static export, bilingüe, 12 páginas, marca `#E8412E`).
3. ⏳ Push inicial al repo + primer deploy a GitHub Pages.
4. ⏳ Configurar custom domain `alannabricks.cl` en Pages + DNS en GoDaddy.
5. ⏳ Verificar HTTPS (certificado Let's Encrypt automático).
6. ⏳ Security headers vía `<meta>` (limitado en GitHub Pages vs CloudFront) — considerar Cloudflare como proxy si hace falta CSP estricta.

## Documentos

- [Diagnóstico 2026-04-18](doc/00-diagnostico/2026-04-18-diagnostico.md)
- [Propuesta 2026-04-18](doc/01-propuesta/2026-04-18-propuesta.md)
- [Preview 2026-04-18](doc/02-preview/2026-04-18-preview.md)
- [Changelog](doc/04-changelog.md)
