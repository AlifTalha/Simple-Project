const input = document.getElementById("text");
const dateInput = document.getElementById("date");
const add = document.querySelector(".add");
const notes = document.querySelector(".notes");
let taskCount = 0;

add.addEventListener('click', function () {
    if (input.value == "" || dateInput.value == "") {
        alert("Enter Task and Date First!");
    } else {
        taskCount++;

        const taskDiv = document.createElement('div');
        const taskText = document.createElement('p');
        const spanDelete = document.createElement('span');
        const editButton = document.createElement('button');
        const radioDelete = document.createElement('input');
        const time = new Date().toLocaleTimeString();
        const taskDate = dateInput.value;

        taskDiv.className = "task-item";
        spanDelete.innerHTML = "&#10006;";
        taskText.innerHTML = `<strong>Task ${taskCount}:</strong> ${input.value} <br><em>Time:</em> ${time} <br><em>Date:</em> ${taskDate}`;
        editButton.textContent = "Edit";
        radioDelete.type = "radio";
        radioDelete.name = "delete-task";

        taskDiv.appendChild(radioDelete);
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(spanDelete);

        notes.appendChild(taskDiv);

        spanDelete.addEventListener('click', function () {
            taskDiv.remove();
        });

        editButton.addEventListener('click', function () {
            const newText = prompt("Edit your task:", input.value);
            if (newText) {
                taskText.innerHTML = `<strong>Task ${taskCount}:</strong> ${newText} <br><em>Time:</em> ${time} <br><em>Date:</em> ${taskDate}`;
            }
        });

        radioDelete.addEventListener('change', function () {
            if (radioDelete.checked) {
                taskDiv.style.backgroundColor = "#f8d7da";
            } else {
                taskDiv.style.backgroundColor = "#fff";
            }
        });

        input.value = "";
        dateInput.value = "";
    }
});
