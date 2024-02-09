import { BrowserRouter, Route, Router } from "react-router-dom";
import AddTodo from "./components/addTodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";

const App = () => {
  return (
    <main>
      <p className="bg-ye container mx-auto text-2xl md:text-3xl border-2 border-gray-500 p-6 m-4  md:p-4  text-center font-bold underline">
        TODO REACT + TYPESCRIPT
      </p>
      <BrowserRouter>
        <Navbar />
        <AddTodo />
        <Todos />
      </BrowserRouter>
    </main>
  );
};

export default App;
