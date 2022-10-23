function activeFilter(todos) {
    return todos.filter( todo => {
        return !todo.completed;
    })
}
function completedFilter(todos) {
    return todos.filter( todo => {
        return todo.completed;
    })
}

function clearList() {
    document.querySelector('#todos').innerHTML = '';
}

function sortItems(todos) {
    todos.sort(function(a, b){return a.id - b.id});
}
export default {
    activeFilter,
    completedFilter,
    clearList,
    sortItems
};