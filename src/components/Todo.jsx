export const Todo = ({ todo }) => {
  return (
    <li className="px-4 py-2 border rounded-md bg-gray-200 flex justify-between">
      <span>{todo.name}</span>
      <button className="text-white bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 transition-colors duration-150">
        Supprimer
      </button>
    </li>
  );
};
