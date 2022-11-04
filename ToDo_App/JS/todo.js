function get_todo() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    var todos = get_todo();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
    show();

    return false;
}

function show() {
    var todos = get_todo();
    var html = '<ul>';
    for (let i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
        console.log(buttons[i]);
    }
}

function remove() {
    var toRemove = this.getAttribute('id');
    var todos = get_todo();
    todos.splice(toRemove, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

document.getElementById('add').addEventListener('click', add);
show();