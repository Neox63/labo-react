export const Todo = ({ todo, setTodos }) => {
  return (
    <li className="px-4 py-2 border rounded-md bg-gray-200 flex justify-between items-center">
      <span>{todo.name}</span>

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
              })
            );
          }}
          className="text-white bg-green-500 px-2 py-1 rounded-md hover:bg-green-400 transition-colors duration-150"
        >
          Marqué comme {todo.done ? "non fait" : "fait"}
        </button>
        <button
          onClick={() => {
            setTodos((previousTodos) =>
              previousTodos.filter((prev) => todo.id !== prev.id)
            );
          }}
          className="text-white bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 transition-colors duration-150"
        >
          Supprimer
        </button>
      </div>
    </li>
  );
};
