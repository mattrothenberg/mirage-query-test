import wretch from "wretch";

export function fetchTodos() {
  return wretch()
    .url("/api/todos")
    .get()
    .json<Todo[]>((res) => res.todos);
}
