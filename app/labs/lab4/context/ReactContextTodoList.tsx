"use client";
import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <input
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="wd-context-todo-title"
          placeholder="New todo"
        />
        <button
          type="button"
          onClick={() => {
            if (title.trim() !== "") {
              addTodo(title);
              setTitle("");
            }
          }}
          id="wd-context-add-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <input
              className="flex-1 rounded border border-neutral-200 px-2 py-1"
              value={todo.title}
              onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              className="ms-2 rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}