const todo = document.querySelector(".todo");
const todoForm = todo.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = todo.querySelector(".todo-list");

let toDos = [];

// Load saved todos from localStorage
const savedTodo = () => {
  const savedToDos = JSON.parse(localStorage.getItem("todo"));

  // Update the toDos array and paint each task
  if (savedToDos !== null) {
    toDos = savedToDos;
    savedToDos.forEach((task) => {
      paintTodo(task);
    });
  }
};

// Remove a task
const removeTodo = (task) => {
  // Remove the parent element of task
  const li = task.target.parentElement;
  li.remove();

  // Update toDos array and localStorage
  toDos = toDos.filter((task) => task.id !== parseInt(li.id));
  localStorage.setItem("todo", JSON.stringify(toDos));
};

// Display each Todo task
const paintTodo = (task) => {
  const li = document.createElement("li");
  const text = document.createElement("span");
  const button = document.createElement("button");

  li.id = task.id;
  text.innerText = task.text;
  button.innerText = "❌";
  button.addEventListener("click", removeTodo);

  li.appendChild(text);
  li.appendChild(button);
  todoList.appendChild(li);
};

// Handle Task Submission
const handleTask = (e) => {
  e.preventDefault();

  // Create a user task object with text and randomly created id
  const userTask = todoInput.value.trim();
  const userTaskObj = {
    text: userTask,
    id: Date.now(), // Use unique id -> timestamp
  };

  // Paint new task and update the array and localStorage
  paintTodo(userTaskObj);
  toDos.push(userTaskObj);
  localStorage.setItem("todo", JSON.stringify(toDos));

  todoInput.value = "";
};

todoForm.addEventListener("submit", handleTask);

// Load saved todos as the page loads
savedTodo();
