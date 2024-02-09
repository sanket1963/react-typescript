import { useTodos } from "../store/todo";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [serarchParams] = useSearchParams();
  let todosData = serarchParams.get("todos");
  console.log("~ file: todos.tsx:10 ~ Todos ~ todosData:", todosData);
  let filterData = todos;

  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }
  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <div className="container mx-auto p-6 px-10">
    <ul className=" ">
      {filterData.map((todo) => {
        return (
          <li className="p-2" key={todo.id}>
            <div className="flex items-center">
            <input className=" m-2"
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label className="text-lg text-gray-700" htmlFor={`todo-${todo.id}`}> {todo.task}</label>

            {todo.completed && (
              <button className="mt-2 sm:mt-0 ml-auto inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
            </div>
          </li>
        );
      })}
    </ul>
    </div>
  );
};

export default Todos;
