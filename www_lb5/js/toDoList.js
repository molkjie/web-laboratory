let taskCounter = 0;

function addTask() {
  let taskText = document.getElementById('taskInput').value.trim();
  if (taskText === '') return;

  taskCounter++;

  let taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  let taskContent = document.createElement('span');
  taskContent.textContent = `${taskText}`;

  let deleteBtn = document.createElement('span');
  deleteBtn.textContent = 'X';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function () {
    taskContent.classList.add('completed');
    taskDiv.removeChild(deleteBtn);
    document.getElementById('taskList').appendChild(taskDiv);
  };

  taskDiv.appendChild(taskContent);
  taskDiv.appendChild(deleteBtn);

  let taskList = document.getElementById('taskList');
  taskList.appendChild(taskDiv);

  document.getElementById('taskInput').value = '';
}
