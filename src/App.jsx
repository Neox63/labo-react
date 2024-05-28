import { useState } from "react";
import { Todo } from "./components/Todo";
import { nanoid } from "nanoid";
import { Plus } from "lucide-react";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Faire les courses",
      done: true,
    },
    {
      id: 2,
      name: "Faire le ménage",
      done: false,
    },
    {
      id: 3,
      name: "Faire du sport",
      done: false,
    },
  ]);

  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="my-4 text-4xl font-bold text-center text-blue-500">Ma todo list</h1>

      {todos.length === 0 ? (
        <span className="text-lg font-bold text-center">
          Vous n&apos;avez pas ajouté de todo !
        </span>
      ) : (
        <ul className="flex flex-col gap-2 w-[90%] lg:w-1/3">
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} setTodos={setTodos} />
          ))}
        </ul>
      )}

      <div className="flex gap-2 w-[90%] lg:w-1/3">
        <input
          type="text"
          placeholder="Ajouter un todo"
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && value !== "") {
              setTodos([
                ...todos,
                {
                  id: nanoid(),
                  name: value,
                  done: false,
                },
              ]);

              setValue("");
            }
          }}
        />
        <button
          className="flex items-center gap-2 px-4 py-2 text-white transition-colors duration-150 bg-blue-500 rounded-md hover:bg-blue-400"
          onClick={() => {
            if (value !== "") {
              setTodos([
                ...todos,
                {
                  id: nanoid(),
                  name: value,
                  done: false,
                },
              ]);

              setValue("");
            }
          }}
        >
          <Plus />
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default App;
