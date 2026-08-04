# Investigación y Presentación PPT: Metodologías Ágiles, Scrum e Historias de Usuario

**Materia / Cátedra**: UTN — Profesor Aldo Brozzo  
**Proyecto de Aplicación**: "Mi Agenda" (App Móvil de Gestión de Tareas Personales)  
**Formato**: Estructura diapositiva por diapositiva para el PowerPoint + 3 User Stories para lectura en voz alta.

---

## ESTRUCTURA COMPLETA DE DIAPOSITIVAS PARA EL POWERPOINT

### Diapositiva 1: Portada
- **Título**: Metodologías Ágiles, Scrum e Historias de Usuario
- **Subtítulo**: Análisis Teórico y Caso Práctico: App Móvil "Mi Agenda"
- **Profesor**: Aldo Brozzo — UTN
- **Integrantes**: [Nombres y Apellidos]
- **Fecha**: Agosto 2026

---

### Diapositiva 2: Origen del Manifiesto Ágil: ¿Qué había antes y qué problema resolvió?

- **¿Qué había antes? (Años 80 - 90)**:
  - Predominaban las metodologías tradicionales o pesadas (Modelo en Cascada, RUP).
  - El desarrollo era rígido, secuencial e hiper-documentado antes de escribir una sola línea de código.
- **El Problema**:
  - **Tiempos de entrega larguísimos**: El usuario veía el producto tras meses o años.
  - **Requisitos obsoletos**: Cuando el software se terminaba, las necesidades del mercado o del cliente ya habían cambiado.
  - **Altas tasas de fracaso**: Proyectos cancelados por presupuesto agotado y falta de flexibilidad.
- **El Cambio de Paradigma (2001)**:
  - 17 líderes de software crearon el **Manifiesto Ágil** en Snowbird, Utah.
  - Se cambió el enfoque desde *seguir un plan rígido* hacia *entregar valor funcional de forma rápida y adaptarse al cambio*.

---

### Diapositiva 3: Los 4 Valores y Principios del Manifiesto Ágil

#### Los 4 Valores Fundamentales:
1. **Individuos e interacciones** por sobre procesos y herramientas.
2. **Software funcionando** por sobre documentación exhaustiva.
3. **Colaboración con el cliente** por sobre negociación contractual.
4. **Respuesta ante el cambio** por sobre seguir un plan rígido.

#### Principio Clave:
La prioridad máxima es satisfacer al cliente mediante la **entrega temprana y continua** de software con valor real.

---

### Diapositiva 4: Metodologías Ágiles vs. Tradicionales (Cascada)

| Criterio | Metodología Tradicional (Cascada) | Metodología Ágil (Scrum/Kanban) |
| :--- | :--- | :--- |
| **Estructura** | Secuencial (Fases estancas: Análisis → Diseño → Código → Test) | Iterativa e Incremental (Ciclos cortos o Sprints) |
| **Planificación** | Inicial, exhaustiva y rígida | Adaptativa y continua en cada iteración |
| **Entrega de Valor** | Única al final del proyecto | Continua desde las primeras semanas |
| **Gestión del Cambio** | Resistencia y alto costo económico | Bienvenido como ventaja competitiva |
| **Rol del Cliente** | Firma contratos al inicio y valida al final | Colaborador activo en cada demostración/Sprint |
| **Foco Principal** | Cumplir el proceso y el contrato | Generar valor real para el usuario final |

---

### Diapositiva 5: Características de las Organizaciones que Adoptan Metodologías Ágiles

Para que una organización sea verdaderamente Ágil no basta con usar tableros; requiere una cultura organizacional con:

1. **Cultura de confianza y seguridad psicológica**: Se tolera el error como oportunidad de aprendizaje rápido.
2. **Estructura horizontal y descentralizada**: Autonomía en los equipos para tomar decisiones sin burocracia.
3. **Equipos multidisciplinarios y auto-organizados**: Diseñadores, desarrolladores y testers trabajando juntos en la misma meta.
4. **Enfoque en el *Time-to-Market***: Capacidad de lanzar Productos Mínimos Viables (MVP) para validar ideas rápidamente en el mercado.
5. **Retroalimentación continua (*Feedback Loops*)**: Escuchar activamente al cliente al final de cada ciclo.

---

### Diapositiva 6: Marco Scrum — Roles y Responsabilidades

Scrum define 3 roles clave con responsabilidades bien delimitadas:

- **Product Owner (PO)**:
  - Representa al cliente y a los usuarios finales.
  - Administra y prioriza el *Product Backlog* (lista de requerimientos).
  - Decide *qué* se hace y en *qué orden* para maximizar el valor.
- **Scrum Master (SM)**:
  - Facilitador y *coach* del equipo.
  - Elimina bloqueos e impedimentos que frenan el avance.
  - Garantiza que se comprendan y apliquen los valores de Scrum.
- **Developers (Equipo de Desarrollo)**:
  - Equipo técnico (diseñadores UX/UI, programadores, testers).
  - Autónomo: decide *cómo* construir técnicamente lo priorizado.
  - Responsable de entregar un incremento funcional al finalizar cada Sprint.

---

### Diapositiva 7: Marco Scrum — Artefactos y Ceremonias

#### Artefactos (Elementos de trabajo y transparencia):
- **Product Backlog**: Lista general priorizada de características deseadas.
- **Sprint Backlog**: Tareas seleccionadas para construir exclusivamente durante el Sprint actual.
- **Incremento**: La versión funcional del producto probada y lista para usarse al cerrar el Sprint.

#### Ceremonias (Eventos clave delimitados en tiempo):
- **Sprint Planning**: Definición del objetivo y selección de tareas del Sprint.
- **Daily Scrum**: Reunión diaria de 15 minutos (¿Qué hice ayer? ¿Qué haré hoy? ¿Hay bloqueos?).
- **Sprint Review**: Demostración del incremento funcionando al cliente/stakeholders.
- **Sprint Retrospective**: Reunión interna para inspeccionar el proceso de trabajo y mejorar.

---

### Diapositiva 8: Comparación: Requisito Técnico vs. Caso de Uso vs. Historia de Usuario

- **Requisito Técnico (Tradicional)**:
  - *Definición*: Especificación técnica centrada en el sistema.
  - *Ejemplo*: "El sistema almacenará en base de datos el campo `priority` como `INTEGER` de 1 a 3."
- **Caso de Uso (UML / Tradicional)**:
  - *Definición*: Documento extenso que describe todo el flujo de interacción paso a paso entre un Actor y el Sistema (precondiciones, flujos alternativos, excepciones).
- **Historia de Usuario (Ágil)**:
  - *Definición*: Descripción breve centrada en el **usuario y el valor de negocio**. Es una invitación a la conversación entre el equipo y el cliente.

---

### Diapositiva 9: El Criterio INVEST para Historias de Usuario

Para asegurar que una Historia de Usuario (US) sea de alta calidad, debe cumplir con las siglas **INVEST**:

- **I — Independent (Independiente)**: Puede construirse y entregarse sin depender de otras historias.
- **N — Negotiable (Negociable)**: No es un contrato cerrado; los detalles se acuerdan entre el PO y los Developers.
- **V — Valuable (Valiosa)**: Debe aportar un beneficio real y perceptible para el usuario o negocio.
- **E — Estimable (Estimable)**: El equipo técnico puede calcular el esfuerzo requerido para construirla.
- **S — Small / Sized appropriately (Pequeña)**: Cabe dentro de un único Sprint de trabajo.
- **T — Testable (Testeable)**: Posee criterios de aceptación claros para verificar si funciona o no.

---

## 3 HISTORIAS DE USUARIO DE "MI AGENDA" (PARA LEER EN VOZ ALTA EN CLASE)

---

### Diapositiva 10: Historia de Usuario 1 — Creación Ágil de Tareas con Prioridad Visual

#### 🗣️ Texto para leer en voz alta:
> **"Como** estudiante o trabajador freelance con múltiples actividades cotidianas,  
> **Quiero** crear rápidamente una tarea asignándole título, fecha y un nivel de prioridad visual (Alta 🔴, Media 🟡, Baja 🟢) desde un botón flotante accesible,  
> **Para** registrar mis pendientes de forma inmediata sin perder tiempo ni romper mi ritmo de trabajo."

#### Criterios de Aceptación (Formato Dado-Cuando-Entonces):
- **Dado** que estoy en la pantalla principal de *Mi Agenda*,
- **Cuando** presiono el botón flotante `+` (FAB) ubicado al alcance cómodo del pulgar,
- **Entonces** se despliega el formulario en un *Bottom Sheet* con la prioridad "Media" seleccionada por defecto.
- **Y** al completar el título y la fecha de vencimiento, la tarea se guarda de inmediato reflejando el distintivo de color correspondiente en la lista.

---

### Diapositiva 11: Historia de Usuario 2 — Filtrado Dinámico por Estado y Urgencia

#### 🗣️ Texto para leer en voz alta:
> **"Como** usuario atareado durante el día,  
> **Quiero** filtrar mis tareas entre Pendientes o Completadas y seleccionar una prioridad específica (🔴 Alta, 🟡 Media, 🟢 Baja),  
> **Para** enfocar mi atención únicamente en las tareas urgentes del día sin distrarme con el resto."

#### Criterios de Aceptación (Formato Dado-Cuando-Entonces):
- **Dado** que tengo varias tareas cargadas en mi agenda,
- **Cuando** presiono la pestaña de estado "Pendientes" y el chip de prioridad "🔴 Alta",
- **Entonces** la lista se filtra al instante mostrando únicamente las tareas no completadas con prioridad alta.
- **Y** el contador rápido de la cabecera se actualiza indicando la cantidad exacta de tareas pendientes.

---

### Diapositiva 12: Historia de Usuario 3 — Operación Ergonómica a Una Mano y Modo Oscuro

#### 🗣️ Texto para leer en voz alta:
> **"Como** persona que utiliza la aplicación en movimiento (en el colectivo o caminando),  
> **Quiero** poder activar el Modo Oscuro y contar con controles dispuestos en la zona del pulgar (*Thumb Zone*),  
> **Para** utilizar la app cómodamente con una sola mano y evitar la fatiga visual en entornos con poca luz."

#### Criterios de Aceptación (Formato Dado-Cuando-Entonces):
- **Dado** que me encuentro en la pantalla de Ajustes de la aplicación,
- **Cuando** activo el interruptor de "Modo Oscuro" o "Modo Zurdo",
- **Entonces** la interfaz cambia inmediatamente su esquema de colores a tonos oscuros (o traslada el botón de acción a la izquierda).
- **Y** la preferencia seleccionada se mantiene guardada para las siguientes sesiones de uso.

---

### Diapositiva 13: Conclusiones
- El Manifiesto Ágil nació para resolver la rigidez y el fracaso de los proyectos tradicionales (Cascada).
- Scrum estructura el trabajo mediante 3 roles claros, 3 artefactos y 4 ceremonias que garantizan la entrega continua de valor.
- Las **Historias de Usuario (US)** bajo el criterio **INVEST** nos permitieron diseñar la app *"Mi Agenda"* pensando en las necesidades reales del usuario en movilidad (ergonomía y prioridad visual).
