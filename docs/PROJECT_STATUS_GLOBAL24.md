# Global 24 Solution - Estado del Proyecto (Julio 2026)

Este documento resume el estado de la landing page y plataforma web de **Global 24 Solution**, alineado con las decisiones estratégicas de gerencia (Reunión 6 de Julio de 2026).

---

## 📌 Resumen Ejecutivo
Durante la última iteración, se definió un pivote estratégico en la comunicación de la marca:
- **Reducción del Tono de Seguridad:** Se eliminó el énfasis en la recuperación de vehículos robados y seguridad de carga para mitigar expectativas irreales.
- **Enfoque en Respaldo Económico:** El mensaje central ahora prioriza la *tranquilidad en prevenciones vehiculares, optimización logística y control total de activos*.
- **Profesionalización Visual:** Se reemplazaron imágenes que transmitían preocupación y elementos poco serios (emojis) por un diseño corporativo, minimalista y orientado a B2B (íconos SVG y paleta de colores sólida).

---

## ✅ Tareas Completadas (Sesión Actual)

1. **Refactorización de Contenidos y Métricas:**
   - Se eliminaron promesas de marketing ficticias ("14 razones", 32% eficiencia, $2.4M pérdidas).
   - Se ajustaron las métricas principales de la sección Hero basándose en la cotización oficial: **Monitoreo Continuo 24/7**, **100% Cloud Computing**, y **API de Integración Total**.
   - El título principal se ajustó a: *"Seguimiento Satelital Avanzado. Su Flota Siempre Conectada"*.

2. **Mejoras Estéticas y de UI:**
   - La imagen principal de "El Problema" fue reemplazada por una fotografía corporativa de un gerente en control total de sus operaciones, eliminando la connotación de preocupación.
   - Eliminación total de emojis en la navegación, reemplazados por SVG monocromáticos para mantener la coherencia del diseño B2B.

3. **Optimización de UX / Mobile:**
   - **Responsive Grid:** Se corrigió un error en los estilos en línea que forzaba a las tarjetas de modalidades a mostrarse en dos columnas en móviles. Ahora colapsan fluidamente (`1fr`) facilitando la lectura vertical.
   - El padding de las tarjetas se redujo automáticamente en móviles para evitar el uso innecesario de espacio.

4. **Gestión de Contacto:**
   - Se descartó la idea de un grupo único de WhatsApp por problemas de disponibilidad.
   - En su lugar, se implementaron botones de WhatsApp pre-configurados dentro de cada servicio (Modalidad Venta, Comodato, MDVR) para enviar al cliente directamente con una intención de compra predefinida, reduciendo la fricción.

5. **Corrección de Errores Técnicos (08 de Julio):**
   - Se corrigieron `<div>` sin cerrar en las secciones "Solución" y "MDVR" que rompían el layout de la página.
   - Se restauró el **chatbot flotante de FAQ** (se había perdido en la reestructuración a `src/`) con íconos SVG monocromáticos (cero emojis) y se corrigió un bug de overflow en móvil.
   - Se restauró el **formulario de captura de leads** en la sección de contacto — la función serverless `submit-lead.ts` (`/api/leads`) había quedado sin interfaz que la usara.
   - Se eliminó el nombre del cliente **"PLC GLOBAL"** (destinatario original de la cotización) que había quedado expuesto públicamente en la sección de equipos y en la lista de clientes.
   - Se agregó nota de vigencia a los precios cotizados (la cotización original es válida solo del 1 al 31 de marzo de 2026).
   - Se corrigió el nombre de marca en el footer (decía "Global Tracking GPS", ahora dice "Global 24 GPS Colombia S.A.S.").
   - Se reemplazaron los counters con cifras inventadas (1.200 vehículos, 340 empresas, etc.) por datos reales/defendibles (34+ empresas clientes reales de la cotización, 2 niveles de plataforma).
   - Se corrigió la última frase pendiente de la reunión del 6 de julio: "Reduzca el riesgo de pérdida de carga" en el hero (Gerencia pidió explícitamente eliminar esta frase).
   - Se corrigió el `alt` de la imagen de "El Problema" (decía "Gerente de logística preocupado" pero la imagen real ya mostraba a un gerente positivo y en control — solo el texto alternativo estaba desactualizado).

6. **Imagen de Cobertura (confirmado por Samuel, 08 de Julio):**
   - La imagen `cobertura-total.jpeg` con el reclamo falso "COBERTURA TOTAL, INCLUSO FUERA DEL MAPA" incrustado en los píxeles ya fue reemplazada. *(Nota técnica: a la fecha de este registro, el archivo local en `src/assets/cobertura-total.jpeg` de este repo aún no reflejaba el cambio — verificar que el archivo nuevo quede subido antes del próximo deploy.)*

7. **Decisión de Correos (08 de Julio):**
   - Se identificó que el plan actual de Google Workspace incluye almacenamiento en la nube que la empresa no necesita — el único requerimiento real es el correo. Se decidió **bajar de plan** en vez de migrar a Microsoft 365, reduciendo costos sin necesidad de cambiar direcciones de correo ni avisar masivamente a clientes.

---

## ⏳ Tareas Pendientes (Backlog)

- [x] **Agregar Cobertura Internacional:** Incluido en la sección de Cobertura del sitio.
- [ ] **Power BI / Automatización de Informes:** Decisión de negocio pendiente — Samuel presentará opciones al equipo. La opción evaluada es un plan mensual de Power BI versión completa para automatizar los informes de flota que hoy Auxiliar EAAB arma manualmente en Excel (~2h por informe). *(Ver nota de asesoría técnica en `Reunion_2026-07-06_Notas_Gemini.md` sobre una alternativa: automatizar solo la etapa de preparación de datos con un script a medida, y usar una herramienta de visualización gratuita en vez de pagar licencias de Power BI.)*
- [ ] **Imágenes Reales de Informes:** Recibir por parte de Operaciones (Auxiliar EAAB) capturas de pantalla reales de los informes generados actualmente para incluirlos en la galería visual de la página web.

---

## 🚀 Despliegue Final (Agosto 10, 2026)

Se realizó una integración exhaustiva de assets pendientes y un push final a producción:
1. **Fichas Técnicas:** Se integraron los 3 PDF corporativos de equipos (VT08F, GS10G, BOXTRACKER) añadiendo botones de descarga nativos al catálogo.
2. **Video Showcase 2:** Se integró el video promocional UI de la plataforma (`video-plataforma-ui.mp4`) añadiendo una sección completa en la landing con diseño invertido (`rtl`).
3. **Admin Panel:** Se constató que `ADMIN_SECRET` ya estaba operando correctamente en Netlify sin necesidad de intervención manual.
4. **Deploy:** Todos los commits locales se sincronizaron con `origin/main` y se desplegaron con éxito.

---

## 🔧 Sesión Complementaria — Tarde 10 de Agosto de 2026

Continuación de la sesión del mismo día: correcciones de calidad, un bug crítico de backend y una brecha real de infraestructura que llevaba 6 días sin detectarse.

### 1. Open Graph / Previsualización en Redes Sociales
- `og-image.png` era en realidad **1024×1024** pero las meta tags declaraban falsamente **1200×630** — causaba recortes impredecibles en previews de WhatsApp/Facebook/LinkedIn.
- Regenerada a 1200×630 real. Iteración de diseño con el cliente: versión inicial con fondo navy → versión final con **fondo blanco y texto navy** (decisión de Samuel).
- Completadas las meta tags OG/Twitter que faltaban en `404.html`, `plataformas.html`, `terminos.html`, `privacidad.html` (solo `index.html` las tenía completas).

### 2. Video Showcase 2 — Corrección de Nitidez
- El video vertical (`video-plataforma-ui.mp4`, 544×960 nativo) se mostraba **recortado y estirado ~60%** dentro de una caja horizontal (`object-fit:cover`), produciendo blur severo.
- Rediseñado como **mockup de teléfono** (marco + notch en CSS puro): el video se muestra completo, a su resolución nativa, sin distorsión.
- El video del mapa (primera sección) se ajustó a su ancho nativo (848px) para evitar sobre-escalado.

### 3. Logo Desactualizado en Banner "Ganancia Neta"
- `gps-ganancia.jpeg` tenía compuesto el logo antiguo "Global 24 **Solution**" — reemplazado por el logo vigente "Global 24 **GPS de Colombia**" mediante composición de imagen (fondo del área era un degradado blanco uniforme, sin costuras visibles).

### 4. 🔴 Brecha de Infraestructura: Netlify Desconectado de GitHub
- **Hallazgo:** el sitio en Netlify (`trackingviptest`) llevaba desde el **2026-08-04 corriendo sobre un repo interno `netlify-git`** (no conectado a `Blinq-Oficial/global-24-solution-web`) — probablemente por una reconfiguración accidental. Resultado: **4 commits (incluido el deploy final documentado arriba) nunca se desplegaron** a producción durante 6 días. Confirmado en vivo: el sitio no tenía el video ni las fichas técnicas hasta este hallazgo.
- **Diagnóstico:** comparado contra sitios hermanos del mismo equipo Netlify (`web-mahumada`, `ventashogarplas`, `The-Startup-Board`), todos con `provider: github` correctamente configurado — `trackingviptest` era la única excepción.
- **Resolución:** Samuel reconectó el repositorio desde el dashboard de Netlify (Site Settings → Build & deploy → Link repository). Verificado por API: `provider: github`, `repo_path: Blinq-Oficial/global-24-solution-web`, deploy automático disparado y exitoso.
- **Nota para futuras sesiones:** antes de asumir que "todo debería estar desplegado", verificar la fecha del último deploy de Netlify contra la fecha del último commit de GitHub — no asumir que el pipeline está conectado solo porque `netlify.toml` existe.

### 5. 🔴 Bug Crítico: Panel Admin Siempre Mostraba "0 Leads"
- **Causa raíz:** `get-leads.ts` asumía que `db.sql` (driver `@netlify/database` → `waddler`) devuelve `{rows: [...]}` al estilo `pg`. En realidad devuelve el **arreglo de filas directamente**. Cada request a `/api/admin/leads` lanzaba `TypeError: Cannot read properties of undefined (reading 'length')` y devolvía 500.
- **Bug secundario:** el frontend del admin panel no verificaba `res.ok` — cualquier error del servidor se enmascaraba silenciosamente como "Sin leads registrados aún.", indistinguible de un estado realmente vacío. Esto es lo que hizo que el bug pasara desapercibido.
- **Impacto real:** ningún dato se perdió — los leads sí se estaban guardando correctamente en la base de datos (Neon Postgres vía Netlify DB), solo no se podían leer/mostrar. Confirmado recuperando el lead de prueba real de Samuel del 2026-08-10.
- **Corregido:** acceso directo al arreglo de filas + el admin panel ahora muestra el error real del servidor en vez de una lista vacía engañosa.

### 6. Auditoría y Corrección de Responsividad Móvil
Auditoría con capturas reales (Playwright headless, viewports 320/375/390/428px) en las 5 páginas — no solo revisión visual del CSS. Se encontraron y corrigieron 4 causas reales de **scroll horizontal fantasma** en móvil:
1. Menú off-canvas usaba `right:-100%` en un elemento `position:fixed` — Chrome seguía contando ese ancho para `document.documentElement.scrollWidth` aunque estuviera oculto visualmente. Corregido a `transform:translateX()`.
2. Video del mapa con `max-width:848px` fijo sin tope al ancho del viewport → `max-width:min(848px, 100%)`.
3. Segunda sección de video usaba `direction:rtl` inline (truco para invertir el orden en desktop) que desalineaba el contenido ~20px al apilarse en una columna en móvil → reseteado a `ltr` en el breakpoint móvil.
4. Tabla de la política de privacidad (`legal-table`) sin contenedor de scroll propio, desbordaba toda la página → envuelta en `.table-scroll{overflow-x:auto}`.
5. Agregado `overflow-x:hidden` en `html` (no solo `body`) como red de seguridad general — las animaciones `reveal-left/right` (con `transform:translateX` antes de activarse) podían generar scroll horizontal momentáneo mientras el usuario baja por la página.

Verificado: `overflow = 0` en las 5 páginas, en 320/375/390/428px, con el menú móvil abierto y cerrado, en producción real (no solo en local).

### 7. Cierre
Mensaje de estado enviado por Samuel al grupo de WhatsApp del cliente con el link del sitio actualizado. Pendiente: confirmación de conformidad → cuenta de cobro.

---
*Sesión del 10 de Agosto de 2026 (tarde) — cerrada.*

---

## 💰 Sesión 22 de Agosto de 2026 — Retiro de Precios Públicos

Solicitud directa del CEO: **quitar todos los precios de la página web** antes de una reunión con clientes importantes, porque van a cotizar con valores más altos. Los precios publicados venían de la cotización oficial de marzo 2026 y ya no reflejaban la intención comercial de la empresa.

### Auditoría
Los **11 precios estaban todos en `src/index.html`**, en la sección "Planes y Modalidades". Revisadas y descartadas: `plataformas.html`, `terminos.html` (ya decía que los precios se comunican de forma personalizada), `privacidad.html`, `404.html` y el panel admin.

| Ubicación | Valor retirado |
|:--|:--|
| Modalidad Venta | $33.000 (Nivel 1) y $40.700 (Nivel Premium) / móvil / mes |
| Modalidad Comodato | $48.000 (Nivel 1) y $55.700 (Nivel Premium) / móvil / mes |
| Nota Comodato | Instalación $65.000 + IVA |
| Servicios adicionales | FUEC $1.500/auto · Pre-Operacional $5.500/auto · Form. Control $45.000/app |
| Dashcam JC-261 | Equipo + inst. $1.520.522 · mensualidad $84.150 |
| Dashcam JC400 | Equipo + inst. $1.520.522 · mensualidad $69.300 |

### Reemplazo: 11 botones de cotización por WhatsApp
Cada botón abre `wa.me/573005631754` con mensaje **prellenado y específico del producto**, para que el asesor sepa de entrada por qué equipo preguntan.

- **6 equipos del catálogo GPS que no tenían ninguna acción de contacto** (VT08F, GS10G, BOXTRACKER, Teltonika FMC003, FMC125, FMC920). Era una brecha de conversión preexistente: se podía leer la ficha técnica completa sin ninguna forma de pedir precio desde ahí.
- 2 dashcams (JC-261, JC400), 2 modalidades (Venta, Comodato) y 1 de servicios adicionales.
- Las filas de precio de las modalidades pasaron a mostrar la **disponibilidad por nivel** en vez del monto.

### Textos derivados corregidos
Cuatro puntos quedaban incoherentes al quitar los montos:
1. Subtítulo de sección: decía "Cotización **exenta de IVA en la mensualidad**".
2. CTA de la tabla comparativa: "Ver **Precios** y Modalidades" → "Ver Planes y Modalidades".
3. Nota al pie de Modalidad Venta.
4. **Respuesta del chatbot FAQ sobre precio**: remitía a "los valores exactos por nivel en la sección de Planes y Modalidades" — valores que ya no existen. Reescrita para derivar a un asesor.

### CSS
`.modalidad-amount` → `.modalidad-available` (check verde de disponibilidad) · `.camera-pricing-*` → `.camera-quote-note` · nueva `.btn-consulta` (botón WhatsApp compacto para el catálogo, coherente con `.btn-ficha`).

### Verificación y deploy
- Playwright en escritorio (1440px) y móvil (390px), con todos los acordeones abiertos.
- `overflow-x = 0` en las 5 páginas — no se rompió la corrección de scroll horizontal del 10-ago.
- Balance de etiquetas HTML comparado contra `HEAD`, sin regresiones.
- Commit `ada5b6e` → push a `main` → auto-deploy de Netlify. **Verificado en producción real** (HTML descargado de `global24solution.com`): cero montos, 11 CTAs activos. Siguiendo la lección del 10-ago, no se asumió que el pipeline había funcionado.

### ⚠️ Punto comercial levantado con Gerencia
Al quitar los valores, **toda la consulta comercial cae ahora sobre el WhatsApp 300 563 1754**. Antes el visitante se auto-filtraba viendo el precio; ahora no. Dos consecuencias comunicadas al CEO:
1. El equipo comercial debe estar listo para absorber ese flujo.
2. Queda una decisión de negocio abierta: con la nueva lista de precios ya en firme, definir si se vuelven a publicar o si el modelo de "cotización personalizada" queda permanente.

### Hallazgo menor (fuera de alcance)
`</div>` huérfano en `src/index.html` (~línea 936, sección de contacto). **Preexistente** — verificado que ya estaba en `HEAD`. Los navegadores ignoran cierres sin pareja, no afecta el render. Anotado para mantenimiento.

---
*Última actualización: 22 de Agosto de 2026.*

