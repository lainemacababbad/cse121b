// Fetching data from JSON
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    // Display data on the to-do list
    const ul = document.getElementById("tasks-list");
    data.slice(0, 5).forEach(task => {
        const li = document.createElement("li");

        // Add a radio button and task title
        li.innerHTML = `
            <input type="radio" name="taskRadio" onclick="toggleStrikeThrough(this)">
            <span>${task.title}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;

        ul.appendChild(li);
    });
}

// Adding task
function addTask() {
    var input = document.getElementById("new-task");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Deleting task
    var ul = document.getElementById("tasks-list");
    var li = document.createElement("li");

    // Add a radio button and task title
    li.innerHTML = `
        <input type="radio" name="taskRadio" onclick="toggleStrikeThrough(this)">
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    ul.appendChild(li);

    input.value = "";
}

// Function to use the Enter key on the keyboard when entering a task
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}

// Confirmation to delete a task
function deleteTask(button) {
    var li = button.closest("li"); // Find the closest ancestor <li> element
    var isConfirmed = confirm("Are you sure you want to delete this task?");

    if (isConfirmed) {
        li.remove();
    }
}

// Toggle strikethrough
function toggleStrikeThrough(radioButton) {
    var li = radioButton.closest("li");
    var taskText = li.querySelector("span");

    // Toggle the 'strikethrough' class
    taskText.classList.toggle("strikethrough");
}

// Fetch data when the page loads
fetchData();
