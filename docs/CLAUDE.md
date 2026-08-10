# ☁️ Global 24 Solution - Arquitectura Cloud y DevOps

## 1. Despliegue (Hosting)
- **Proveedor:** Netlify
- **Método de despliegue:** Auto-deploy vía sincronización Git — cada push a `main` en `Blinq-Oficial/global-24-solution-web` dispara un build automático (`provider: github`, verificado por API el 2026-08-10). Alternativa manual: Netlify CLI (`netlify deploy --prod`).
- **⚠️ Historial:** entre 2026-08-04 y 2026-08-10 el sitio estuvo desconectado de GitHub (corría sobre un repo interno `netlify-git` no persistente) — los pushes durante esos 6 días no se desplegaron. Antes de asumir que un cambio ya está en producción, comparar la fecha del último deploy (`netlify api listSiteDeploys`) contra la fecha del último commit.
- **Directorio de Publicación:** `src/` (Configurado en `netlify.toml`).
- **Edge Functions / Serverless:** ✅ Implementado — `netlify/functions/submit-lead.ts` (`/api/leads`) recibe el formulario de contacto y guarda en Neon PostgreSQL vía `@netlify/database`; `get-leads.ts` (`/api/admin/leads`) alimenta el panel `/admin`.

## 2. Dominio y DNS
- **Dominio Principal:** `global24solution.com`
- **Gestión DNS:** Cloudflare (Protección DDoS activa, Proxy habilitado).
- **Subdominios Clave:**
  - `reportes.global24solution.com`
  - `backoffice.global24solution.com` (CNAME a `admin.redgps.com`)

## 3. Correos Electrónicos Corporativos
- **Proveedor Actual:** Google Workspace
- **Estado Estratégico:** *En evaluación para migración a Microsoft 365* con el objetivo de reducir el costo operativo (aprox. $7 USD / usuario) y ganar acceso nativo a Power BI.

> [!TIP]
> Cualquier ajuste a registros MX, TXT o DMARC debe realizarse en Cloudflare, no en el registrador original del dominio.
