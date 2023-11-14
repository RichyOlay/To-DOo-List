function addTask() {
    var newTaskText = document.getElementById('newTask').value;

    if (newTaskText.trim() !== '') {
        var taskList = document.getElementById('taskList');

        var li = document.createElement('li');
        li.className = 'task-item';

        var span = document.createElement('span');
        span.innerText = newTaskText;

        var actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';

        var editBtn = document.createElement('button');
        editBtn.classList.add('styled-button');
        editBtn.innerText = 'Edit';
        editBtn.onclick = function() {
            var editedText = prompt('Edit Task:', span.innerText);
            if (editedText !== null) {
                span.innerText = editedText;
            }
        };

        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('styled-button2');
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = function() {
            li.remove();
        };

        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(actionsDiv);

        taskList.appendChild(li);

        // Clear the input field after adding the task
        document.getElementById('newTask').value = '';
    }
}

function editTask(button) {
    var taskItem = button.closest('.task-item');
    var taskText = taskItem.querySelector('span').innerText;
    var newTaskText = prompt('Edit Task:', taskText);

    if (newTaskText !== null) {
        taskItem.querySelector('span').innerText = newTaskText;
    }
}

function deleteTask(button) {
    var taskItem = button.closest('.task-item');
    taskItem.remove();
}