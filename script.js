const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = input.value;
  if (task.trim() !== '') {
    addTask(task);
    input.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerText = task;

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  todoList.appendChild(li);
}
