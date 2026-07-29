# Informe de Justificación de Diseño UX/UI — "Mi Agenda"

**Proyecto**: Aplicación móvil de gestión de tareas personales  
**Orientación**: Estudiantes y trabajadores freelancers (18 a 35 años)  
**Formato**: Documento ejecutivo de síntesis (Máximo 1 página)  

---

### Enlaces y Recursos del Proyecto

- **Etapa 1 — Sketch / Boceto (Canva)**: [Ver en Canva](https://www.canva.com/design/DAHODcWYjhM/gjEdp_xWTkOaWNewvyGahw/edit?utm_content=DAHODcWYjhM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
- **Etapa 2 y 3 — Wireframes & Mockup Estático (Figma)**: [Ver en Figma](https://www.figma.com/design/DbLDbrxYHbCmKek3PI7keu/Prototipado01?node-id=0-1)
- **Etapa 4 — Mockup Funcional (GitHub)**: [Repositorio GitHub IPP-Mockup](https://github.com/BautistaAlfaro/IPP-Mockup)

---

### 1. Justificación del Diseño

El diseño de **"Mi Agenda"** responde directamente a las necesidades de personas con rutinas dinámicas que requieren organizar su tiempo de manera rápida, visual y sin fricción.

- **Ergonomía y Uso a Una Mano (*Thumb Zone*)**: Se priorizó ubicar los componentes de interacción clave en la parte inferior de la pantalla (Barra de Navegación y Botón Flotante de Acción `+`). Esto permite operar la app cómodamente con el pulgar mientras el usuario se desplaza o realiza otra actividad.
- **Reducción de Carga Cognitiva**: Se diseñó una interfaz limpia evitando la sobrecarga informativa. La jerarquía prioriza el estado de las tareas mediante *Tabs* y la urgencia a través de tarjetas de prioridad con código de color (🔴 Alta, 🟡 Media, 🟢 Baja).
- **Accesibilidad Visual**: Tipografía moderna (*Outfit* para títulos e *Inter* para lectura), contrastes WCAG adecuados para entornos con distinta iluminación y soporte para ajustes de alto contraste y tamaño de fuente ampliado.

---

### 2. Evolución de las Ideas entre Etapas

1. **Etapa 1 — Sketch (Boceto en Canva)**: Se plasmaron las primeras ideas sobre el flujo básico (Lista, Crear, Editar). El foco estuvo en definir la ubicación inicial de las acciones CRUD sin importar la estética.
2. **Etapa 2 — Wireframe (Baja fidelidad en Figma)**: Se estructuró la jerarquía visual y la distribución espacial en blanco y negro. Se decidió mover la creación de tareas a la zona inferior para evitar estirar la mano hacia la parte superior.
3. **Etapa 3 — Mockup Estático (Figma)**: Se incorporó el sistema de diseño visual (paleta de colores moderna en modo oscuro para reducir la fatiga visual, iconografía limpia y *cards* elevadas).
4. **Etapa 4 — Mockup Funcional (Web HTML/CSS/JS)**: Se construyó la versión interactiva ejecutable en navegador con simulación de chasis de smartphone. Se implementaron formularios en *Bottom Sheets* deslizantes y filtros reactivos en tiempo real.

---

### 3. Dificultades y Decisiones Clave

- **Aprovechamiento del Espacio Táctil**: Inicialmente se incluía un selector desplegable de ordenamiento junto a los filtros. Se decidió eliminarlo para ceder todo el ancho de fila a los botones de prioridad, agrandando el área de toque de cada uno.
- **Contención de Pantalla (*Encapsulado*)**: Durante el prototipado funcional surgió el desafío de que los modales abarcaban toda la ventana del navegador. Se resolvió restringiendo todos los modales y avisos strictly al contenedor del celular (`.app-screen`) para mantener una exhibición realista en el proyector.
- **Navegación e Integración de Ajustes**: Se removieron las barras de herramientas externas para que la app se sintiera 100% nativa, trasladando el cambio de tema (Modo Oscuro/Claro) y las opciones de accesibilidad a la pestaña de Ajustes dentro del propio dispositivo.
