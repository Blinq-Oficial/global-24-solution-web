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
*Última actualización: 10 de Agosto de 2026.*
