// Part 2 · Connect the logic to the page.
// Serve this folder and open it in the browser (see README). Keep DevTools open (F12)!
import {
  addTodo, toggleTodo, removeTodo, filterTodos, remainingLabel, clearDone,
} from "./todo.js";

// ---------- 1. Grab the elements we need ----------
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const count = document.querySelector("#todo-count");
const filterButtons = document.querySelectorAll(".filters button");
const clearDoneBtn = document.querySelector("#clear-done");
const loadSamplesBtn = document.querySelector("#load-samples");
// TODO: also grab the filter buttons (all of them), #clear-done and #load-samples

// ---------- 2. State ----------
// The single source of truth. We never edit the DOM by hand — we change state, then render().
let todos = load();
let currentFilter = "all";

// ---------- 3. Render: state → HTML ----------
function render() {
  list.innerHTML = "";

  for (const todo of filterTodos(todos, currentFilter)) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    // TODO: add the "done" class when todo.done is true
    if (todo.done) {
      li.classList.add("done");
    }
    // TODO: create a checkbox (<input type="checkbox">), checked when done
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    // TODO: create a <span> with the todo text (use textContent, NOT innerHTML — why?)
    const span = document.createElement("span");
    span.textContent = todo.text;
    // TODO: create a delete <button class="delete">🗑️</button>
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.textContent = "🗑️";
    // TODO: append all three to the li
    li.append(checkbox, span, deleteBtn);
    list.append(li);
  }

  count.textContent = remainingLabel(todos);
  // TODO: mark the active filter button with the "active" class
  filterButtons.forEach(btn => {
    if (btn.dataset.filter === currentFilter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  })
  save();
}

// ---------- 4. Events: user action → change state → render ----------
form.addEventListener("submit", (event) => {
  event.preventDefault(); // without this, the browser reloads the page!
  
  const text = input.value.trim();
  if (!text) return; // if the input is blank, do nothing

  todos = addTodo(todos, text);
  input.value = "";
  render();
})

list.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;
  const id = li.dataset.id;

  if (event.target.matches("input[type='checkbox']")) {
    todos = toggleTodo(todos, id);
    render();
  }
  
  if (event.target.matches(".delete")) {
    todos = removeTodo(todos, id);
    render();
  }
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    render();
  });
});

clearDoneBtn.addEventListener("click", () => {
  todos = clearDone(todos);
  render();
});

// ---------- 5. Persistence with localStorage ----------
function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function load() {
  try {
    const savedTodos = localStorage.getItem("todos");
    if (!savedTodos) return [];

    const parsedTodos = JSON.parse(savedTodos);
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch {
    return [];
  }
}

// ---------- 6. ⭐ Bonus: fetch from a real API ----------
// On #load-samples click:
//   fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//   → for each item, add a todo with its `title` (and `completed` → done)
//   → render
// Open DevTools → Network to watch the request!

render();
