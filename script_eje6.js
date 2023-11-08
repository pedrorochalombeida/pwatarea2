function addTask() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskTable = document.getElementById('taskTable');
        var newRow = taskTable.insertRow();
        
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        
        cell1.textContent = taskText;
        cell2.innerHTML = '<button class="deleteBtn" onclick="deleteTask(this)">Eliminar</button>';
        
        taskInput.value = "";
    }
}

function deleteTask(button) {
    var row = button.parentElement.parentElement;
    row.remove();
}
