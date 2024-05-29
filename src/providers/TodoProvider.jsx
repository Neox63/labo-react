import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
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

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>
  );
};
