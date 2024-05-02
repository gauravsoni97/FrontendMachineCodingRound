import React from "react";

const App = () => {
  return (
    <div>
      <form className="max-w-md mx-auto mt-4">
        <div className="relative">
          <input
            type="search"
            className="block w-full p-4  text-sm text-gray-900  rounded-lg bg-gray-50  dark:bg-gray-700  dark:text-white"
            placeholder="todo..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 :ring-4 :-none :ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark::ring-blue-800"
          >
            + Add
          </button>
        </div>
      </form>
      <center className="mt-10">
        <ul className="max-w-md ">
          <li className="w-full py-2 rounded  flex  items-center justify-between mb-6  dark:bg-gray-800 dark:border-gray-700 dark:text-white">
            <div className="ms-3 text-sm">Profile</div>
            <div className="flex items-center ">
              <button
                type="button"
                className=":-none text-white bg-green-700 hover:bg-green-800 :ring-4 :ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark::ring-green-800 me-2"
              >
                Edit
              </button>

              <button
                type="button"
                className=":-none text-white bg-red-700 hover:bg-red-800 :ring-4 :ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark::ring-red-900"
              >
                Del
              </button>
            </div>
          </li>
        </ul>
      </center>
    </div>
  );
};

export default App;
