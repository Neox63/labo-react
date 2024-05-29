import { useContext, useEffect, useState } from "react";
import { Todo } from "./components/Todo";
import { nanoid } from "nanoid";
import { Plus } from "lucide-react";
import { TodoContext } from "./providers/TodoProvider";
import { useWindowResize } from "./hooks/useWindowResize";
import TodoContainer from "./components/TodosContainer";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");

  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.org/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const { width, height } = useWindowResize();

  console.log(width, height);

  console.log(posts);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="my-4 text-4xl font-bold text-center text-blue-500">Ma todo list</h1>

      {todos.length === 0 ? (
        <span className="text-lg font-bold text-center">
          Vous n&apos;avez pas ajouté de todo !
        </span>
      ) : (
        <TodoContainer>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} setTodos={setTodos} />
          ))}
        </TodoContainer>
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
