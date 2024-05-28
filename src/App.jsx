import { useState } from "react";
import { Todo } from "./components/Todo";

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
    <div className="flex justify-center items-center gap-8 flex-col">
      <h1 className="text-4xl font-bold text-blue-500 text-center my-4">Ma todo list</h1>

      {todos.length === 0 ? (
        <span className="font-bold text-lg text-center">
          Vous n&apos;avez pas ajouté de todo !
        </span>
      ) : (
        <ul className="flex flex-col gap-2 w-1/3">
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} setTodos={setTodos} />
          ))}
        </ul>
      )}

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
            if (value !== "") {
              setTodos([
                ...todos,
                {
                  name: value,
                  done: false,
                },
              ]);

              setValue("");
            }
          }}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
};

export default App;
