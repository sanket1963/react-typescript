import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useTodos } from "../store/todo";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <>
      <form className="container mx-auto px-4" onSubmit={handleFormSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 mt-1.5 pointer-events-none">
            <svg
              className="w-8 h-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <IoIosSearch />
            </svg>
          </div>
          <input
            className="block w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
