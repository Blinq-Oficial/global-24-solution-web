# ☁️ Global 24 Solution - Arquitectura Cloud y DevOps

## 1. Despliegue (Hosting)
- **Proveedor:** Netlify
- **Método de despliegue:** Netlify CLI (`npx netlify deploy --prod`) o sincronización Git (si está configurada).
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
