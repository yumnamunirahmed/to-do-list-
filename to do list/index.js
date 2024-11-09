const addButton = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const clearButton = document.getElementById('clear-btn');
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        taskInput.value = '';
    }
});
clearButton.addEventListener('click', function() {
    taskList.innerHTML = '';
});
