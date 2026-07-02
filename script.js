document.getElementById('addButton').addEventListener('click', function() {
    var input = document.getElementById('todoInput');
    if (input.value) {
        var listItem = document.createElement('li');
        listItem.textContent = input.value;
        document.getElementById('todoList').appendChild(listItem);
        input.value = '';
    }
});