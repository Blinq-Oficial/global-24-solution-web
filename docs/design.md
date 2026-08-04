# 🎨 Global 24 Solution - Sistema de Diseño

## 1. Filosofía Visual
El diseño de Global 24 debe transmitir autoridad, control corporativo y respaldo tecnológico. Se descartan las apariencias de "empresa de seguridad alarmista" para abrazar el rol de "socio estratégico en logística y control".

## 2. Restricciones Absolutas
- **PROHIBIDO EL USO DE EMOJIS.** Todos los elementos gráficos deben ser Íconos SVG vectoriales.
- **No "Imágenes de Preocupación".** Las fotografías heroicas deben mostrar gerentes en control, paneles tecnológicos limpios y escenarios positivos.

## 3. Tokens de Diseño (Paleta de Colores)
*Definidos en `src/styles.css`*
- **Brand Navy (Primario):** `#0A1628` (Usado en tipografías principales y fondos corporativos).
- **Brand Red (Acento de urgencia/Pilar):** `#D42B2B`
- **Brand Orange (Llamados a la Acción):** `#E85D1A`
- **Brand Blue Globe (Secundario):** `#4CA8E0`
- **Fondos (Backgrounds):** `var(--bg-primary)` para secciones principales, `var(--bg-secondary)` para contraste ligero.

## 4. Tipografía
- **Titulares (H1, H2, H3):** *Space Grotesk* (Para darle un toque tecnológico e industrial).
- **Cuerpo de Texto:** *Inter* (Máxima legibilidad y limpieza corporativa).
- **Datos Estadísticos / Etiquetas:** *Roboto Mono* (Aporta precisión técnica).

## 5. UI y Responsividad
- Se utiliza el modelo **Mobile-First**. Todos los grids CSS (e.g. `.modalidades-grid`, `.benefits-grid`) deben colapsar a `1fr` en anchos menores a `768px`.
- El uso de **Padding** debe reducirse dinámicamente en móviles para no sacrificar el *viewport* útil de lectura.
