# Investigación: Metodologías Ágiles, Scrum e Historias de Usuario

**Materia / Cátedra**: UTN — Profesor Aldo Brozzo  
**Proyecto de Aplicación**: "Mi Agenda" (App Móvil de Gestión de Tareas Personales)  
**Formato**: Guía Diapositiva por Diapositiva para Presentación PowerPoint + 3 User Stories  

---

## ESTRUCTURA DE DIAPOSITIVAS PARA POWERPOINT

### Diapositiva 1: Portada
- **Título**: Metodologías Ágiles, Marco Scrum e Historias de Usuario
- **Subtítulo**: Caso Práctico: App Móvil "Mi Agenda"
- **Profesor**: Aldo Brozzo — UTN
- **Integrantes**: [Nombres y Apellidos]
- **Fecha**: Julio 2026

---

### Diapositiva 2: El Manifiesto Ágil
**Concepto**: Surgido en 2001 (Utah, EE. UU.) acuñado por 17 críticos de las metodologías tradicionales pesadas.

#### Los 4 Valores del Manifiesto Ágil:
1. **Individuos e interacciones** por sobre procesos y herramientas.
2. **Software funcionando** por sobre documentación exhaustiva.
3. **Colaboración con el cliente** por sobre negociación contractual.
4. **Respuesta ante el cambio** por sobre seguir un plan rígido.

> **Idea Clave**: El Manifiesto no proscribe la documentación ni los procesos, pero prioriza el valor real entregado al usuario y la adaptabilidad.

---

### Diapositiva 3: ¿Qué son las Metodologías Ágiles (MA)?
- **Definición**: Enfoque de gestión de proyectos orientado a la entrega continua de valor en ciclos cortos.
- **Modelo Iterativo e Incremental**:
  - *Iterativo*: El proyecto se divide en ciclos pequeños de desarrollo (Sprints/iteraciones de 1 a 4 semanas).
  - *Incremental*: Cada ciclo entrega una versión funcional del producto que se suma a la anterior.
- **Pilares principales**:
  - Transparencia en el avance.
  - Inspección constante del producto e interfaz.
  - Adaptación rápida ante el feedback del usuario.

---

### Diapositiva 4: Comparación: Ágil vs. Cascada (Waterfall)

| Criterio | Modelo en Cascada (Tradicional) | Metodologías Ágiles |
| :--- | :--- | :--- |
| **Enfoque** | Secuencial y rígido (Fases estancas) | Iterativo e Incremental (Ciclos dinámicos) |
| **Planificación** | Inicial, detallada e inmodificable | Flexible, adaptativa por iteración |
| **Entrega de Valor** | Al final del proyecto (tras meses) | Continua y temprana (al final de cada Sprint) |
| **Gestión del Cambio** | Alto costo y resistencia al cambio | El cambio se abraza como oportunidad de mejora |
| **Participación Cliente** | Alta al inicio y al cierre | Constante a lo largo de todo el ciclo |
| **Riesgo del Proyecto** | Alto (se valida la hipótesis recién al final) | Bajo (validación continua de usabilidad y valor) |

---

### Diapositiva 5: Organizaciones que adoptan Metodologías Ágiles
- **¿Por qué las empresas se vuelven Ágiles?**
  - **Reducción del Time-to-Market**: LLegar al mercado más rápido con Productos Mínimos Viables (MVP).
  - **Foco en el cliente**: Respuestas inmediatas a las demandas cambiantes del mercado.
  - **Mejora del clima laboral**: Equipos auto-organizados y multidisciplinarios.
- **Sectores que las utilizan**:
  - *Tecnología y Software* (Spotify, Netflix, Google).
  - *Banca y Finanzas* (Mercado Pago, bancos digitales para acelerar lanzamientos de apps).
  - *Startups y Telecomunicaciones* (Flexibilidad estratégica ante incertidumbre).

---

### Diapositiva 6: Marco Scrum — Roles
Scrum es el framework ágil más utilizado a nivel mundial. Define 3 roles claros:

1. **Product Owner (PO)**:
   - Representa la voz del cliente/usuario.
   - Define y prioriza el *Product Backlog* (lista de características deseadas).
   - Maximiza el valor del producto entregado por el equipo.
2. **Scrum Master (SM)**:
   - Facilitador del proceso Scrum y *coach* del equipo.
   - Elimina impedimentos y bloqueos que entorpecen el avance.
   - Asegura que se respeten los valores y ceremonias Scrum.
3. **Developers (Equipo de Desarrollo)**:
   - Equipo multidisciplinario (Diseñadores UX/UI, Programadores, Testers).
   - Auto-organizado: deciden *cómo* construir lo que el PO prioriza.
   - Responsables de entregar un incremento funcional al final de cada Sprint.

---

### Diapositiva 7: Marco Scrum — Artefactos y Ceremonias

#### Artefactos (Los entregables de trabajo):
- **Product Backlog**: Lista priorizada de todo lo que el producto necesita.
- **Sprint Backlog**: El conjunto de tareas seleccionadas para construir en el Sprint actual.
- **Incremento**: El resultado funcional probado y listo para usarse al cerrar un Sprint.

#### Ceremonias (Los eventos de tiempo delimitado):
- **Sprint Planning**: Planificación del objetivo del Sprint (1 a 4 semanas).
- **Daily Scrum**: Reunión diaria de 15 minutos para sincronizar avances e impedimentos.
- **Sprint Review**: Demostración del producto funcionando a los interesados/stakeholders.
- **Sprint Retrospective**: Reunión interna del equipo para inspeccionar el proceso y mejorar.

---

### Diapositiva 8: Historias de Usuario (US)
- **Definición**: Una explicación breve y sencilla de una función deseada contada desde la perspectiva del usuario.
- **Estructura Estándar**:
  > **Como** [Rol de Usuario],  
  > **Quiero** [Acción / Funcionalidad],  
  > **Para** [Beneficio / Valor esperado].

- **Comparación con Requisitos Tradicionales (Cascada)**:
  - *Requisito Tradicional*: "El sistema debe permitir la persistencia de tareas con atributo int prioridad 1 a 3." (Centrado en el sistema, técnico, rígido).
  - *Historia de Usuario*: "Como estudiante ocupado, quiero asignar un nivel de prioridad visual a mis tareas para identificar rápidamente lo más urgente en el día." (Centrada en el valor humano, conversacional, flexible).

---

## 3 HISTORIAS DE USUARIO (USER STORIES) DE "MI AGENDA"

### Diapositiva 9: User Story 1 — Creación Rápida de Tareas

**ID**: US-01  
**Título**: Creación ágil de tareas con prioridad visual  
**Historia**:
> **Como** estudiante universitario o trabajador freelance,  
> **quiero** poder crear una tarea especificando título, fecha y prioridad (Alta 🔴, Media 🟡, Baja 🟢) desde un botón flotante accesible,  
> **para** registrar mis obligaciones cotidianas de forma inmediata sin perder tiempo.

#### Criterios de Aceptación:
- **Dado** que estoy en la pantalla principal de la app,  
- **Cuando** toco el botón flotante `+` (FAB) ubicado al alcance del pulgar,  
- **Entonces** se despliega el formulario en un *Bottom Sheet* con la prioridad "Media" seleccionada por defecto.  
- **Y** al completar el título y fecha, la tarea se guarda inmediatamente reflejando el distintivo de color correspondiente.

---

### Diapositiva 10: User Story 2 — Filtrado Dinámico por Estado y Prioridad

**ID**: US-02  
**Título**: Filtrado dinámico de tareas según urgencia y estado  
**Historia**:
> **Como** usuario con múltiples actividades simultáneas,  
> **quiero** filtrar mi lista de tareas entre Pendientes/Completadas y seleccionar un nivel de prioridad específico,  
> **para** enfocar mi atención únicamente en lo que debo resolver con urgencia sin distraerme.

#### Criterios de Aceptación:
- **Dado** que tengo varias tareas registradas en mi agenda,  
- **Cuando** toco el tab de estado "Pendientes" y el chip de prioridad "🔴 Alta",  
- **Entonces** la lista se actualiza al instante mostrando únicamente las tareas pendientes con prioridad alta.  
- **Y** el contador rápido de la cabecera muestra la cantidad exacta de tareas filtradas.

---

### Diapositiva 11: User Story 3 — Uso a Una Mano y Accesibilidad Visual

**ID**: US-03  
**Título**: Operación ergonómica a una sola mano y modo oscuro  
**Historia**:
> **Como** persona que utiliza la aplicación en movimiento (transporte público o caminando),  
> **quiero** poder activar el Modo Oscuro y contar con controles ubicados en la parte inferior (*Thumb Zone*),  
> **para** utilizar la app cómodamente con una sola mano y evitar la fatiga visual en la noche.

#### Criterios de Aceptación:
- **Dado** que estoy en la pantalla de Ajustes de la aplicación,  
- **Cuando** activo el interruptor de "Modo Oscuro" o "Modo Zurdo",  
- **Entonces** la interfaz cambia inmediatamente su esquema de colores a tonos oscuros (o mueve el botón de acción a la izquierda).  
- **Y** la preferencia se mantiene guardada para las próximas sesiones del usuario.

---

### Diapositiva 12: Conclusiones
- Las metodologías ágiles permiten centrar el desarrollo en el valor real para el usuario final.
- **Scrum y User Stories** aseguran que características complejas (como la accesibilidad y ergonomía en "Mi Agenda") se puedan iterar y validar rápidamente.
- La transición de requisitos tradicionales a Historias de Usuario fomenta la empatía del equipo de desarrollo con los problemas reales del usuario en movilidad.
