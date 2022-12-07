import utils from './utils.js';
import ls from './ls.js';
// On click handler
document.querySelector("#addBtn").onclick= addNewTodo;
document.querySelector("#activeFilter").onclick= applyFilter;
document.querySelector("#allFilter").onclick= applyFilter;
document.querySelector("#completedFilter").onclick= applyFilter;
// get input
const input = document.querySelector('#todoInput');
// add on Enter
input.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewTodo();
})

loadTodos();

function addNewTodo(e) {
    const todo = {id: Date.now(), content: input.value, completed: false};
    if (todo.content != '') {
        ls.saveTodo(todo);
        input.value = '';
    }   
    loadTodos();
}

function createTodoItem(todo) {
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = toggleComplete;
    if (todo.completed == true) {
        completeBtn.innerText = '✔️';
    }

    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');
    if (todo.completed == true) {
        todoContent.style.textDecoration = 'line-through';
        todoContent.style.backgroundColor = 'rgba(247, 243, 243, 0.534)';
    }
    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = '❌';
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addTodoList(todoDiv) {
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos() {
    utils.clearList()
    const todoList = ls.getTodoList().sort(function(a, b){return a.id - b.id});
    
    counting(todoList)
    todoList.forEach(todo => {
        const el = createTodoItem(todo)
        addTodoList(el);
    })
}

function deleteTodo(e) {
        utils.clearList()
        const id = e.target.getAttribute('data-id');
        ls.deleteTodo(id)
        loadTodos();
}


function toggleComplete(e) {
    const ids = e.target.getAttribute('data-id');
    ls.changeBoolean(ids)
    loadTodos();
}

function applyFilter(e) {
    utils.clearList()
    const todos = ls.getTodoList()
    utils.sortItems(todos);
 
    if (e.currentTarget.id == 'allFilter') {
        loadTodos()
        counting(ls.getTodoList())
    } else if (e.currentTarget.id == 'activeFilter') {
        console.log(e)
        const filter = utils.activeFilter(todos)
        counting(filter)
        createFilterItems(filter)
    }  else if (e.currentTarget.id == 'completedFilter') {
        const filter = utils.completedFilter(todos);
        counting(filter)
        createFilterItems(filter)
    }
}

function createFilterItems(filter) {
    filter.forEach(todo => {
        const el = createTodoItem(todo)
        addTodoList(el);
    })
}

function counting(filter) {
    let counts = filter.length;
    document.getElementById('count').innerText = `${counts} Items`;
}


