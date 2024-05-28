import { useState } from "react";
import { Todo } from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([
    {
      name: "Faire les courses",
      done: true,
    },
    {
      name: "Faire le ménage",
      done: false,
    },
    {
      name: "Faire du sport",
      done: false,
    },
  ]);

  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center gap-8 flex-col">
      <h1 className="text-4xl font-bold text-blue-500 text-center my-4">Ma todo list</h1>

      <ul className="flex flex-col gap-2 w-1/3">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ul>

      <div className="flex gap-2 w-1/3">
        <input
          type="text"
          placeholder="Ajouter un todo"
          className="border border-gray-300 px-4 py-2 rounded-md"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors duration-150"
          onClick={() => {
            setTodos([
              ...todos,
              {
                name: value,
                done: false,
              },
            ]);

            setValue("");
          }}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default App;
