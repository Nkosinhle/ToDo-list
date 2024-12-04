const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22',
  dueTime: '13:51'
 },
 {
  name: 'wash dishes',
dueDate: '2022-12-22',
dueTime: '14:51'
}];

displayToDoList();

function displayToDoList(){
  let todoListHTML = '';

  for(let i =0; i < todoList.length; i++){
    const todoObject = todoList[i];

    const{name, dueDate, dueTime} = todoObject
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <div> ${dueTime}</div>

    <button onclick = "
      todoList.splice(${i}, 1);
      displayToDoList();
    " class= "delete-todo-button"
    >Delete</button> 
  `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addToTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  const timeInputElement = document.querySelector('.js-due-time-input');
  const dueTime = timeInputElement.value;


  todoList.push({
    name, 
    dueDate,
    dueTime
  });

  inputElement.value = '';
  displayToDoList();
}
