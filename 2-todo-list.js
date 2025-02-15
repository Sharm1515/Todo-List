const todoList = [{
  name: 'Washing', 
  dueDate:'12-25-2024'
}];

function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach(function(todo, index) {
    const { name, dueDate } = todo;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      " class="btn-2">Delete</button>
    `;
    todoListHTML += html;
  });
  

  document.querySelector('.list-todo').innerHTML = todoListHTML;
} 

function addTodo() {
  const inputElem = document.querySelector('.box-input');

  const name = inputElem.value;

  const dateInputElem = document.querySelector('.date-input');

  const date = dateInputElem.value;

  todoList.push({
    name: name,
    dueDate: date
  });

  inputElem.value = '';

  renderTodoList();

}