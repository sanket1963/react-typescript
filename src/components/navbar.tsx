import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" container mx-auto text-2xl md:text-3xl border-2 border-gray-500 p-4 rounded m-4  md:p-4  text-center font-bold underline">
      <nav className=" border-gray-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            All
          </Link>
          <Link
            to="/?todos=active"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Active
          </Link>
          <Link
            to="/?todos=completed"
            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Completed
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
