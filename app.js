/* ==========================================================================
   MI AGENDA - MOCKUP UX/UI INTERACTIVO
   Lógica JavaScript pura (sin dependencias) para la presentación
   ========================================================================== */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATOS DE PRUEBA INICIALES
  // --------------------------------------------------------------------------
  const DEFAULT_TASKS = [
    {
      id: 'task-1',
      title: 'Entregar TP Final de Prototipado UX/UI',
      description: 'Subir bocetos, wireframes y link del mockup interactivo en el aula virtual.',
      dueDate: getRelativeDate(0), // Hoy
      priority: 'alta',
      completed: false,
      createdAt: Date.now() - 86400000 * 2
    },
    {
      id: 'task-2',
      title: 'Enviar presupuesto a cliente Freelance',
      description: 'Detallar horas de desarrollo frontend y rediseño de landing page.',
      dueDate: getRelativeDate(1), // Mañana
      priority: 'alta',
      completed: false,
      createdAt: Date.now() - 86400000
    },
    {
      id: 'task-3',
      title: 'Repasar conceptos para examen de Software',
      description: 'Revisar principios SOLID, patrones de diseño y diagramas UML.',
      dueDate: getRelativeDate(2),
      priority: 'media',
      completed: false,
      createdAt: Date.now() - 43200000
    },
    {
      id: 'task-4',
      title: 'Comprar cuadernos e insumos de estudio',
      description: 'Aprovechar descuento estudiantil en la librería del centro.',
      dueDate: getRelativeDate(-1), // Vencida ayer
      priority: 'baja',
      completed: true,
      createdAt: Date.now() - 86400000 * 3
    },
    {
      id: 'task-5',
      title: 'Reunión de avance con equipo de proyecto',
      description: 'Coordinar entregables de la próxima iteración por Google Meet.',
      dueDate: getRelativeDate(3),
      priority: 'media',
      completed: false,
      createdAt: Date.now()
    }
  ];

  function getRelativeDate(daysOffset) {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    return d.toISOString().split('T')[0];
  }

  // --------------------------------------------------------------------------
  // 2. ESTADO GLOBAL DE LA APLICACIÓN
  // --------------------------------------------------------------------------
  let state = {
    tasks: [],
    filterStatus: 'all',      // 'all' | 'pending' | 'completed'
    filterPriority: 'all',    // 'all' | 'alta' | 'media' | 'baja'
    searchQuery: '',
    currentNav: 'tasks',      // 'tasks' | 'today' | 'priority' | 'accessibility'
    deleteTargetId: null,
    isDarkTheme: true
  };

  // --------------------------------------------------------------------------
  // 3. REFERENCIAS A ELEMENTOS DEL DOM
  // --------------------------------------------------------------------------
  const DOM = {
    // Marco del dispositivo y reloj
    deviceFrame: document.getElementById('device-frame'),
    statusClock: document.getElementById('status-clock'),

    // Cabecera y Contadores
    statPending: document.getElementById('stat-pending').querySelector('.stat-num'),
    statCompleted: document.getElementById('stat-completed').querySelector('.stat-num'),
    
    // Búsqueda y Filtros
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search'),
    segmentBtns: document.querySelectorAll('.segment-btn'),
    chipBtns: document.querySelectorAll('.chip-btn'),

    // Lista de Tareas
    taskList: document.getElementById('task-list'),
    emptyState: document.getElementById('empty-state'),
    btnEmptyAdd: document.getElementById('btn-empty-add'),
    currentViewTitle: document.getElementById('current-view-title'),
    tasksCountTag: document.getElementById('tasks-count-tag'),

    // Bottom Nav & FAB
    navItems: document.querySelectorAll('.nav-item'),
    btnOpenCreate: document.getElementById('btn-open-create'),

    // Modal Tarea (Crear/Editar)
    modalTaskBackdrop: document.getElementById('modal-task-backdrop'),
    modalTaskSheet: document.getElementById('modal-task-sheet'),
    btnCloseTaskModal: document.getElementById('btn-close-task-modal'),
    btnCancelTask: document.getElementById('btn-cancel-task'),
    taskForm: document.getElementById('task-form'),
    modalTitle: document.getElementById('modal-title'),
    formTaskId: document.getElementById('form-task-id'),
    formTitle: document.getElementById('form-title'),
    formDescription: document.getElementById('form-description'),
    formDueDate: document.getElementById('form-due-date'),
    formStatusCheckbox: document.getElementById('form-status-checkbox'),

    // Modal Accesibilidad & Ajustes
    modalAccBackdrop: document.getElementById('modal-accessibility-backdrop'),
    btnCloseAccModal: document.getElementById('btn-close-acc-modal'),
    btnCloseAccDone: document.getElementById('btn-close-acc-done'),
    toggleDarkMode: document.getElementById('toggle-dark-mode'),
    toggleHighContrast: document.getElementById('toggle-high-contrast'),
    toggleLargeFont: document.getElementById('toggle-large-font'),
    toggleLeftyMode: document.getElementById('toggle-lefty-mode'),

    // Modal Confirmación Eliminar
    modalConfirmBackdrop: document.getElementById('modal-confirm-backdrop'),
    btnCancelDelete: document.getElementById('btn-cancel-delete'),
    btnConfirmDelete: document.getElementById('btn-confirm-delete'),

    // Toast Notification
    toast: document.getElementById('toast-notification'),
    toastMessage: document.getElementById('toast-message'),
    toastIcon: document.getElementById('toast-icon')
  };

  // --------------------------------------------------------------------------
  // 4. INICIALIZACIÓN
  // --------------------------------------------------------------------------
  function init() {
    loadTasksFromStorage();
    updateClock();
    setInterval(updateClock, 30000);
    
    DOM.formDueDate.value = getRelativeDate(0);

    bindEvents();
    render();
  }

  function loadTasksFromStorage() {
    const saved = localStorage.getItem('mi_agenda_tasks');
    if (saved) {
      try {
        state.tasks = JSON.parse(saved);
      } catch (e) {
        state.tasks = [...DEFAULT_TASKS];
      }
    } else {
      state.tasks = [...DEFAULT_TASKS];
      saveTasksToStorage();
    }
  }

  function saveTasksToStorage() {
    localStorage.setItem('mi_agenda_tasks', JSON.stringify(state.tasks));
  }

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    DOM.statusClock.textContent = `${hours}:${mins}`;
  }

  // --------------------------------------------------------------------------
  // 5. REGISTRO DE EVENTOS
  // --------------------------------------------------------------------------
  function bindEvents() {
    // Búsqueda
    DOM.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      DOM.clearSearchBtn.classList.toggle('hidden', state.searchQuery === '');
      render();
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.searchQuery = '';
      DOM.clearSearchBtn.classList.add('hidden');
      render();
    });

    // Filtros por estado (Tabs)
    DOM.segmentBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.segmentBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        state.filterStatus = btn.dataset.filterStatus;
        render();
      });
    });

    // Filtros por prioridad (Chips)
    DOM.chipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.chipBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.filterPriority = btn.dataset.filterPriority;
        render();
      });
    });

    // Navegación Inferior
    DOM.navItems.forEach(item => {
      item.addEventListener('click', () => {
        const targetNav = item.dataset.nav;
        if (targetNav === 'accessibility') {
          openAccessibilityModal();
          return;
        }

        DOM.navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        state.currentNav = targetNav;

        if (targetNav === 'today') {
          state.filterStatus = 'pending';
          state.filterPriority = 'all';
          DOM.currentViewTitle.textContent = 'Tareas para Hoy';
        } else if (targetNav === 'priority') {
          state.filterStatus = 'pending';
          state.filterPriority = 'alta';
          DOM.currentViewTitle.textContent = 'Prioridad Alta';
        } else {
          DOM.currentViewTitle.textContent = 'Tareas de Hoy';
        }
        render();
      });
    });

    // Abrir modal de creación
    DOM.btnOpenCreate.addEventListener('click', () => openTaskModal());
    DOM.btnEmptyAdd.addEventListener('click', () => openTaskModal());

    // Cerrar modal de tarea
    DOM.btnCloseTaskModal.addEventListener('click', closeTaskModal);
    DOM.btnCancelTask.addEventListener('click', closeTaskModal);
    DOM.modalTaskBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.modalTaskBackdrop) closeTaskModal();
    });

    // Guardar / Editar Tarea
    DOM.taskForm.addEventListener('submit', handleTaskFormSubmit);

    // Modal de Accesibilidad & Ajustes
    DOM.btnCloseAccModal.addEventListener('click', closeAccessibilityModal);
    DOM.btnCloseAccDone.addEventListener('click', closeAccessibilityModal);
    DOM.modalAccBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.modalAccBackdrop) closeAccessibilityModal();
    });

    // Toggle Modo Oscuro
    DOM.toggleDarkMode.addEventListener('change', (e) => {
      state.isDarkTheme = e.target.checked;
      document.body.classList.toggle('light-theme', !state.isDarkTheme);
      showToast(state.isDarkTheme ? 'Modo Oscuro activado' : 'Modo Claro activado', state.isDarkTheme ? 'ri-moon-line' : 'ri-sun-line');
    });

    // Toggle Alto Contraste
    DOM.toggleHighContrast.addEventListener('change', (e) => {
      document.body.classList.toggle('high-contrast', e.target.checked);
    });

    // Toggle Fuente Ampliada
    DOM.toggleLargeFont.addEventListener('change', (e) => {
      document.body.classList.toggle('large-font', e.target.checked);
    });

    // Toggle Modo Zurdo
    DOM.toggleLeftyMode.addEventListener('change', (e) => {
      document.body.classList.toggle('lefty-mode', e.target.checked);
    });

    // Modal Confirmación Eliminar
    DOM.btnCancelDelete.addEventListener('click', closeConfirmModal);
    DOM.btnConfirmDelete.addEventListener('click', handleConfirmDelete);
    DOM.modalConfirmBackdrop.addEventListener('click', (e) => {
      if (e.target === DOM.modalConfirmBackdrop) closeConfirmModal();
    });
  }

  // --------------------------------------------------------------------------
  // 6. RENDERIZADO DE TAREAS
  // --------------------------------------------------------------------------
  function render() {
    let filtered = state.tasks.filter(task => {
      if (state.filterStatus === 'pending' && task.completed) return false;
      if (state.filterStatus === 'completed' && !task.completed) return false;
      if (state.filterPriority !== 'all' && task.priority !== state.filterPriority) return false;

      if (state.searchQuery !== '') {
        const matchesTitle = task.title.toLowerCase().includes(state.searchQuery);
        const matchesDesc = (task.description || '').toLowerCase().includes(state.searchQuery);
        if (!matchesTitle && !matchesDesc) return false;
      }

      if (state.currentNav === 'today') {
        const todayStr = getRelativeDate(0);
        if (task.dueDate !== todayStr) return false;
      }

      return true;
    });

    filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    const totalPending = state.tasks.filter(t => !t.completed).length;
    const totalCompleted = state.tasks.filter(t => t.completed).length;
    DOM.statPending.textContent = totalPending;
    DOM.statCompleted.textContent = totalCompleted;

    DOM.tasksCountTag.textContent = `${filtered.length} ${filtered.length === 1 ? 'tarea' : 'tareas'}`;

    if (filtered.length === 0) {
      DOM.taskList.innerHTML = '';
      DOM.emptyState.classList.remove('hidden');
    } else {
      DOM.emptyState.classList.add('hidden');
      DOM.taskList.innerHTML = filtered.map(task => createTaskCardHTML(task)).join('');
      bindTaskCardEvents();
    }
  }

  function createTaskCardHTML(task) {
    const isCompleted = task.completed;
    const priorityLabel = task.priority.charAt(0).toUpperCase() + task.priority.slice(1);
    const dateInfo = formatDueDate(task.dueDate, isCompleted);

    return `
      <div class="task-card ${isCompleted ? 'completed-card' : ''}" data-id="${task.id}" role="listitem">
        <div class="task-checkbox-wrapper">
          <button class="custom-checkbox" data-action="toggle" title="${isCompleted ? 'Marcar pendiente' : 'Marcar completada'}" aria-label="Cambiar estado">
            <i class="ri-check-line"></i>
          </button>
        </div>

        <div class="task-content" data-action="edit">
          <div class="task-title-row">
            <h3 class="task-title">${escapeHTML(task.title)}</h3>
            <div class="task-actions">
              <button class="btn-card-action edit" data-action="edit" title="Editar tarea">
                <i class="ri-pencil-line"></i>
              </button>
              <button class="btn-card-action delete" data-action="delete" title="Eliminar tarea">
                <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>

          ${task.description ? `<p class="task-description">${escapeHTML(task.description)}</p>` : ''}

          <div class="task-footer">
            <span class="badge badge-priority ${task.priority}">
              <i class="ri-flag-fill"></i> ${priorityLabel}
            </span>
            <span class="badge badge-date ${dateInfo.cssClass}">
              <i class="ri-calendar-line"></i> ${dateInfo.text}
            </span>
          </div>
        </div>
      </div>
    `;
  }

  function formatDueDate(dueDateStr, isCompleted) {
    if (!dueDateStr) return { text: 'Sin fecha', cssClass: '' };

    const todayStr = getRelativeDate(0);
    const tomorrowStr = getRelativeDate(1);
    const yesterdayStr = getRelativeDate(-1);

    if (dueDateStr === todayStr) {
      return { text: 'Vence Hoy', cssClass: isCompleted ? '' : 'today' };
    } else if (dueDateStr === tomorrowStr) {
      return { text: 'Vence Mañana', cssClass: '' };
    } else if (dueDateStr === yesterdayStr) {
      return { text: 'Venció Ayer', cssClass: isCompleted ? '' : 'overdue' };
    } else if (dueDateStr < todayStr) {
      return { text: `Venció el ${dueDateStr}`, cssClass: isCompleted ? '' : 'overdue' };
    }

    return { text: `Vence: ${dueDateStr}`, cssClass: '' };
  }

  function bindTaskCardEvents() {
    const cards = DOM.taskList.querySelectorAll('.task-card');
    cards.forEach(card => {
      const taskId = card.dataset.id;

      card.addEventListener('click', (e) => {
        const actionBtn = e.target.closest('[data-action]');
        const action = actionBtn ? actionBtn.dataset.action : 'edit';

        if (action === 'toggle') {
          e.stopPropagation();
          toggleTaskCompleted(taskId);
        } else if (action === 'delete') {
          e.stopPropagation();
          openConfirmModal(taskId);
        } else if (action === 'edit') {
          openTaskModal(taskId);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. ACCIONES DE TAREAS
  // --------------------------------------------------------------------------
  function toggleTaskCompleted(taskId) {
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;
    saveTasksToStorage();
    
    const message = task.completed ? '¡Tarea completada! 🎉' : 'Tarea marcada como pendiente';
    const icon = task.completed ? 'ri-checkbox-circle-fill' : 'ri-time-line';
    showToast(message, icon);
    
    render();
  }

  function openTaskModal(editTaskId = null) {
    DOM.taskForm.reset();
    
    if (editTaskId) {
      const task = state.tasks.find(t => t.id === editTaskId);
      if (!task) return;

      DOM.modalTitle.textContent = 'Editar Tarea';
      DOM.formTaskId.value = task.id;
      DOM.formTitle.value = task.title;
      DOM.formDescription.value = task.description || '';
      DOM.formDueDate.value = task.dueDate;
      DOM.formStatusCheckbox.checked = task.completed;

      const priorityRadio = DOM.taskForm.querySelector(`input[name="priority"][value="${task.priority}"]`);
      if (priorityRadio) priorityRadio.checked = true;
    } else {
      DOM.modalTitle.textContent = 'Nueva Tarea';
      DOM.formTaskId.value = '';
      DOM.formDueDate.value = getRelativeDate(0);
      const defaultRadio = DOM.taskForm.querySelector('input[name="priority"][value="media"]');
      if (defaultRadio) defaultRadio.checked = true;
    }

    DOM.modalTaskBackdrop.classList.remove('hidden');
    setTimeout(() => DOM.formTitle.focus(), 150);
  }

  function closeTaskModal() {
    DOM.modalTaskBackdrop.classList.add('hidden');
  }

  function handleTaskFormSubmit(e) {
    e.preventDefault();

    const taskId = DOM.formTaskId.value;
    const title = DOM.formTitle.value.trim();
    const description = DOM.formDescription.value.trim();
    const dueDate = DOM.formDueDate.value;
    const priority = DOM.taskForm.querySelector('input[name="priority"]:checked').value;
    const completed = DOM.formStatusCheckbox.checked;

    if (!title || !dueDate) {
      showToast('Por favor completá los campos obligatorios', 'ri-alert-line');
      return;
    }

    if (taskId) {
      const taskIndex = state.tasks.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex],
          title,
          description,
          dueDate,
          priority,
          completed
        };
        showToast('Tarea actualizada correctamente', 'ri-save-line');
      }
    } else {
      const newTask = {
        id: 'task-' + Date.now(),
        title,
        description,
        dueDate,
        priority,
        completed,
        createdAt: Date.now()
      };
      state.tasks.unshift(newTask);
      showToast('Nueva tarea creada con éxito', 'ri-add-circle-line');
    }

    saveTasksToStorage();
    closeTaskModal();
    render();
  }

  function openConfirmModal(taskId) {
    state.deleteTargetId = taskId;
    DOM.modalConfirmBackdrop.classList.remove('hidden');
  }

  function closeConfirmModal() {
    state.deleteTargetId = null;
    DOM.modalConfirmBackdrop.classList.add('hidden');
  }

  function handleConfirmDelete() {
    if (!state.deleteTargetId) return;

    state.tasks = state.tasks.filter(t => t.id !== state.deleteTargetId);
    saveTasksToStorage();
    closeConfirmModal();
    showToast('Tarea eliminada de la agenda', 'ri-delete-bin-line');
    render();
  }

  // --------------------------------------------------------------------------
  // 8. MODAL DE ACCESIBILIDAD & AJUSTES
  // --------------------------------------------------------------------------
  function openAccessibilityModal() {
    DOM.modalAccBackdrop.classList.remove('hidden');
  }

  function closeAccessibilityModal() {
    DOM.modalAccBackdrop.classList.add('hidden');
  }

  function showToast(message, iconClass = 'ri-checkbox-circle-fill') {
    DOM.toastMessage.textContent = message;
    DOM.toastIcon.className = `${iconClass} toast-icon`;
    
    DOM.toast.classList.remove('hidden');

    clearTimeout(DOM.toast._timer);
    DOM.toast._timer = setTimeout(() => {
      DOM.toast.classList.add('hidden');
    }, 2500);
  }

  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  document.addEventListener('DOMContentLoaded', init);

})();
