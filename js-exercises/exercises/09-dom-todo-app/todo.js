// Part 1 · Pure to-do logic — NO DOM code in this file.
// Every function returns a NEW array/object. Never mutate the input!
// Run: npm run test:09

/**
 * Create a todo object: { id, text, done: false }
 * - `text` must be trimmed
 * - throw Error("Todo text is required") if the trimmed text is empty
 * - use crypto.randomUUID() for the id (works in browsers and Node)
 */
export function createTodo(text) {
  const trimmedText = text.trim();
  if (!trimmedText) {
    throw new Error("Todo text is required");
  }
  return {
    id: crypto.randomUUID(),
    text: trimmedText,
    done: false
  };
}

/** Return a new array with a new todo added at the END. */
export function addTodo(todos, text) {
  const newTodo = createTodo(text);
  return [...todos, newTodo]; 
}

/**
 * Return a new array where the todo with `id` has `done` flipped.
 * The toggled todo must be a NEW object; others can be reused.
 * hint: map + spread
 */
export function toggleTodo(todos, id) {
  return todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  }
  )
}

/** Return a new array without the todo with `id`. */
export function removeTodo(todos, id) {
  return todos.filter(todo => todo.id !== id);

}

/**
 * filter: "all" | "active" | "done"
 * "active" = not done. Unknown filters behave like "all".
 */
export function filterTodos(todos, filter) {
  switch (filter) {
    case "active":
      return todos.filter(todo => !todo.done);
    case "done":
      return todos.filter(todo => todo.done);
    default:
      return todos;
  }

}

/**
 * Return a friendly counter label for the not-done todos:
 * 0 → "0 items left", 1 → "1 item left", 5 → "5 items left"
 */
export function remainingLabel(todos) {
  const count = todos.filter(todo => !todo.done).length;
  const word = count === 1 ? "item" : "items";
  return `${count} ${word} left`;
}

/** Return a new array with all done todos removed. */
export function clearDone(todos) {
  return todos.filter(todo => !todo.done);
}
