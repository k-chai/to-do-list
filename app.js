// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const tasksContainer = document.getElementById('tasks-container');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new task element
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <input type="checkbox" class="checkbox" onclick="toggleTask(this)">
            <span class="task-text">${taskText}</span>
            <button onclick="removeTask(this)" class="remove-button"><i class="fas fa-trash-alt"></i></button>
        `;

        // Append the task element to the tasks container
        tasksContainer.appendChild(taskElement);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(buttonElement) {
    const taskElement = buttonElement.parentNode;
    tasksContainer.removeChild(taskElement);
}

// Function to toggle the strikethrough effect when the checkbox is checked
function toggleTask(checkboxElement) {
    const taskText = checkboxElement.nextElementSibling; // Get the sibling span element
    taskText.style.textDecoration = checkboxElement.checked ? 'line-through' : 'none';
}

// Allow adding a task on pressing Enter key
taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});


// Function to delete all tasks
function deleteAllTasks() {
    tasksContainer.innerHTML = '';
}