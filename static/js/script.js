document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDueDateInput = document.getElementById('task-due-date');

    // Column Lists
    const notStartedList = document.getElementById('not-started-list');
    const inProgressList = document.getElementById('in-progress-list');
    const completedList = document.getElementById('completed-list');

    // Load tasks from Local Storage or initialize an empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    /**
     * Saves the current tasks array to Local Storage.
     */
    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    /**
     * Formats the due date for display.
     * @param {string} dueDateString - The ISO string from the input.
     * @returns {object} - An object containing the formatted string and overdue status.
     */
    const formatDueDate = (dueDateString) => {
        if (!dueDateString) return { text: 'No due date', overdue: false };

        const date = new Date(dueDateString);
        const now = new Date();
        const isOverdue = date < now;

        // Use Intl.DateTimeFormat for locale-aware formatting
        const formatter = new Intl.DateTimeFormat(navigator.language, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        return { text: formatter.format(date), overdue: isOverdue };
    };

    /**
     * Creates a task list item element.
     * @param {object} task - The task object.
     * @returns {HTMLElement} - The list item element.
     */
    const createTaskElement = (task) => {
        const li = document.createElement('li');
        li.className = `task-item status-${task.status}`;
        li.dataset.id = task.id;

        const taskText = document.createElement('p');
        taskText.className = 'task-text';
        taskText.textContent = task.text;

        const { text: formattedDate, overdue } = formatDueDate(task.dueDate);
        const taskMeta = document.createElement('div');
        taskMeta.className = `task-meta ${overdue && task.status !== 'completed' ? 'overdue' : ''}`;
        taskMeta.innerHTML = `<i class="far fa-calendar-alt"></i><span>${formattedDate}</span>`;

        const controls = document.createElement('div');
        controls.className = 'task-controls';

        const statusSelect = document.createElement('select');
        statusSelect.className = 'status-select';
        const statuses = ['not-started', 'in-progress', 'completed'];
        statuses.forEach(status => {
            const option = document.createElement('option');
            option.value = status;
            option.textContent = status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            if (status === task.status) option.selected = true;
            statusSelect.appendChild(option);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteBtn.title = 'Delete Task';

        li.appendChild(taskText);
        li.appendChild(taskMeta);
        controls.appendChild(statusSelect);
        controls.appendChild(deleteBtn);
        li.appendChild(controls);

        return li;
    };

    /**
     * Renders all tasks into their respective columns.
     */
    const renderTasks = () => {
        // Clear all lists
        notStartedList.innerHTML = '';
        inProgressList.innerHTML = '';
        completedList.innerHTML = '';

        if (tasks.length === 0) {
            notStartedList.innerHTML = '<p class="empty-list-msg">No tasks here!</p>';
        } else {
            tasks.forEach(task => {
                const taskElement = createTaskElement(task);
                switch (task.status) {
                    case 'not-started':
                        notStartedList.appendChild(taskElement);
                        break;
                    case 'in-progress':
                        inProgressList.appendChild(taskElement);
                        break;
                    case 'completed':
                        completedList.appendChild(taskElement);
                        break;
                }
            });
        }
    };

    /**
     * Adds a new task.
     * @param {string} text - The content of the task.
     * @param {string} dueDate - The due date string.
     */
    const addTask = (text, dueDate) => {
        const newTask = {
            id: Date.now(),
            text: text,
            dueDate: dueDate,
            status: 'not-started'
        };
        tasks.push(newTask);
        saveTasks();
        renderTasks();
    };

    const updateTaskStatus = (id, newStatus) => {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.status = newStatus;
            saveTasks();
            renderTasks();
        }
    };

    const deleteTask = (id) => {
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
    };

    // --- Event Listeners ---
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const dueDate = taskDueDateInput.value;
        if (taskText && dueDate) {
            addTask(taskText, dueDate);
            taskForm.reset();
            taskInput.focus();
        } else {
            alert('Please fill in both the task and the due date.');
        }
    });

    // Event delegation for the entire board
    document.querySelector('.task-board').addEventListener('click', (e) => {
        const deleteButton = e.target.closest('.delete-btn');
        if (deleteButton) {
            const taskId = parseInt(deleteButton.closest('.task-item').dataset.id);
            if (confirm('Are you sure you want to delete this task?')) {
                deleteTask(taskId);
            }
        }
    });

    document.querySelector('.task-board').addEventListener('change', (e) => {
        if (e.target.classList.contains('status-select')) {
            const taskId = parseInt(e.target.closest('.task-item').dataset.id);
            const newStatus = e.target.value;
            updateTaskStatus(taskId, newStatus);
        }
    });

    // --- Initial Render ---
    renderTasks();
});