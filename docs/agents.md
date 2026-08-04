# 🤖 Global 24 Solution - Guía para Agentes de IA

Este documento establece las reglas estrictas de comportamiento, límites de sistema y contexto arquitectónico para cualquier agente de Inteligencia Artificial que opere en el proyecto **Global 24 Solution**.

## 1. Identidad y Tono
- El tono del proyecto es **Corporativo B2B, Directo y de Alto Valor**.
- **CERO EMOJIS**: Está estrictamente prohibido el uso de emojis en el código fuente, la UI o la base de datos.
- **Cero Alarmismo**: No promover mensajes de "recuperación de robos" o "pánico". El enfoque es "respaldo económico", "tranquilidad" y "optimización logística".

## 2. Arquitectura del Repositorio
- El código fuente de la página estática reside en la carpeta `src/` (HTML, CSS, JS, Assets).
- La configuración de despliegue se rige por `netlify.toml` en la raíz.
- **No ensucies la raíz**: Cualquier archivo adicional (.md, .pdf, scripts) debe ir a `docs/`, `scripts/` o `resources/raw_media/`. ¡La raíz es sagrada!

## 3. Acceso a la Bóveda de Conocimiento (Obsidian)
Siempre que requieras contexto histórico, reglas de negocio o actas de reuniones, debes consultar esta bóveda local. La ruta maestra está registrada en tu sistema interno de KIs (`.gemini/antigravity/knowledge/global_24_solution/overview.md`).

> [!WARNING]
> **REGLA DE ORO:** Bajo ninguna circunstancia modifiques los archivos de despliegue sin haber verificado la responsividad móvil primero (`@media max-width: 768px`).
