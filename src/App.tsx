import React from "react";
import { useTodos } from "./hooks";

function App() {
  const { data: todos, status } = useTodos();

  return (
    <div className="p-4">
      <div className="space-y-4">
        <header className="border-b pb-2">
          <h1 className="text-3xl tracking-tight font-bold">Todo List</h1>
        </header>
        <div>
          {status === "loading" && <div>Spinner goes here</div>}
          {status === "success" && (
            <ul>
              {todos?.map((todo) => {
                return <li key={todo.id}>Todo: {todo.id}</li>;
              })}
            </ul>
          )}
          {status === "error" && <div>Error message goes here</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
