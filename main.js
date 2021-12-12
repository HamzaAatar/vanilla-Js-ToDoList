const addBtn = document.querySelector('#add');
const input = document.querySelector('#task');
const taskList = document.querySelector('ul.task-list');

addGlobalEventListener('click', '.delete', deleteTask);
addGlobalEventListener('click', '#add', addTask);
addGlobalEventListener('click', '.done', markDone);

function addGlobalEventListener(type, selector, callback) {
        document.addEventListener(type, e => {
                if (e.target.matches(selector)) callback(e)
        });
};

function addTask(e) {
        // Unsubmit the form
        e.preventDefault();
        // create the task div
        if (input.value != '') {
                createTask(input.value);
                // free up the input form
                input.value = '';
        }
}

function createTask(value) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const li = document.createElement('li');
        li.innerText = value;

        const btnDiv = document.createElement('div');
        btnDiv.classList.add('task-buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('delete');
        editBtn.innerText = 'Delete';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done');
        doneBtn.innerText = 'Done'

        btnDiv.appendChild(doneBtn);
        btnDiv.appendChild(editBtn);

        taskDiv.appendChild(li);
        taskDiv.appendChild(btnDiv);

        taskList.appendChild(taskDiv);
};

function deleteTask(e) {
        const task = e.target.parentNode.parentNode;
        taskList.removeChild(task);
};

function markDone(e) {
        const task = e.target.parentNode.parentNode;
        task.classList.add('completed');
        e.target.parentNode.removeChild(e.target);
};