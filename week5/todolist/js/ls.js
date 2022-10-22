const TODO_LIST = 'todoList';

function getTodoList() {
    let todoListString = localStorage.getItem(TODO_LIST)

    let todoList = []

    if (todoListString) {
        todoList = JSON.parse(todoListString)
    }

    return todoList;
}

function saveTodo(todo) {
    let todoList = getTodoList();
    todoList.push(todo);
    localStorage.setItem(TODO_LIST, JSON.stringify(todoList))
    console.log(todoList)
}

function changeBoolean(ids) {
    const todoList = getTodoList();
    let upList = todoList.filter(todo => todo.id == ids);
    let id = Number(ids)
    if (upList[0].completed == false) {
        let remove = {id, content: upList[0].content, completed: false}
        removeItem(remove)
        saveTodo({id, content: upList[0].content, completed: true})
    } else if (upList[0].completed == true) {
        let remove1 = {id, content: upList[0].content, completed: true}
        removeItem1(remove1)
        saveTodo({id, content: upList[0].content, completed: false})
    }
    
}   

function removeItem(remove) {
    const todoList = getTodoList();
    let updatedList = todoList.filter(todo => todo.id != remove.id);
    localStorage.setItem(TODO_LIST, JSON.stringify(updatedList))
}

function removeItem1(remove1) {
    const todoList = getTodoList();
    let updatedList = todoList.filter(todo => todo.id !=remove1.id);
    localStorage.setItem(TODO_LIST, JSON.stringify(updatedList))
}
function deleteTodo(id) {
    const todoList = getTodoList();
    let updatedList = todoList.filter(todo => todo.id != id);
    localStorage.setItem(TODO_LIST, JSON.stringify(updatedList))
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    changeBoolean
}
