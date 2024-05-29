import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { TodoContext } from "../providers/TodoProvider";

export const Todo = ({ todo }) => {
  const { setTodos } = useContext(TodoContext);

  return (
    <li className="flex items-center justify-between px-4 py-2 bg-gray-200 border rounded-md">
      <span className={`${todo.done ? "line-through" : ""}`}>{todo.name}</span>

      <div className="flex gap-2">
        <button
          onClick={() => {
            setTodos((previousTodos) =>
              previousTodos.map((currentTodo) => {
                if (currentTodo.id === todo.id) {
                  return {
                    ...currentTodo,
                    done: !currentTodo.done,
                  };
                }

                return currentTodo;
              })
            );
          }}
          className="px-2 py-1 text-white transition-colors duration-150 bg-green-500 rounded-md hover:bg-green-400"
        >
          Marqué comme {todo.done ? "non fait" : "fait"}
        </button>
        <button
          onClick={() => {
            setTodos((previousTodos) =>
              previousTodos.filter((prev) => todo.id !== prev.id)
            );
          }}
          className="px-2 py-1 text-white transition-colors duration-150 bg-red-500 rounded-md hover:bg-red-400"
        >
          <Trash2 />
        </button>
      </div>
    </li>
  );
};
