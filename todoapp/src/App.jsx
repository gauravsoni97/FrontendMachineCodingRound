import React, { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [editbtn, setEditbtn] = useState(false);
  const [selectedEditItemId, setSelectedEditItemId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");

    let randomId = new Date().getTime().toString();

    setTodo([...todo, { id: randomId, name: inputText }]);

    if (inputText && editbtn) {
      const updatedElem = todo.map((ele) =>
        ele.id === selectedEditItemId ? { ...ele, name: inputText } : ele
      );

      setTodo(updatedElem);
    }

    setEditbtn(false);
  };

  const handleEdit = (eleId) => {
    const EditItem = todo.find((ele) => ele.id === eleId);
    setInputText(EditItem.name);
    setEditbtn(true);
    setSelectedEditItemId(eleId);
  };
  const handleDelete = (eleId) => {
    const deleteItem = todo.filter((ele) => ele.id !== eleId);
    setTodo(deleteItem)
  };

  return (
    <div>
      <form className="max-w-md mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="search"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="block w-full p-4  text-sm text-gray-900  rounded-lg bg-gray-50  dark:bg-gray-700  dark:text-white"
            placeholder="todo..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 :ring-4 :-none :ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark::ring-blue-800"
          >
            {editbtn ? `update` : `+Add`}
          </button>
        </div>
      </form>
      <center className="mt-10">
        <ul className="max-w-md ">
          {todo.map((ele) => {
            return (
              <li
                key={ele.id}
                className="w-full py-2 rounded  flex  items-center justify-between mb-6  dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              >
                <div className="ms-3 text-sm">{ele.name}</div>
                <div className="flex items-center ">
                  <button
                    type="button"
                    className=":-none text-white bg-green-700 hover:bg-green-800 :ring-4 :ring-green-300 font-medium rounded text-sm py-1  px-3    dark:bg-green-600 dark:hover:bg-green-700 dark::ring-green-800 me-2"
                    onClick={() => handleEdit(ele.id)}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    className=":-none text-white bg-red-700 hover:bg-red-800 :ring-4 :ring-red-300 font-medium rounded text-sm px-5 py-1  px-3  dark:bg-red-600 dark:hover:bg-red-700 me-3 dark::ring-red-900"
                    onClick={() => handleDelete(ele.id)}

                  >
                    Del
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </center>
    </div>
  );
};

export default App;
