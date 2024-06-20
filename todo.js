document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const taskText = document.createElement('span');
        taskText.textContent = task;
        todoItem.appendChild(taskText);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    }
});
