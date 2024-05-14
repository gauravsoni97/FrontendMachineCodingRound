import React, { useState } from "react";

const arr = [
  { id: 1, value: "A", isChecked: false },
  { id: 2, value: "B", isChecked: false },
  { id: 3, value: "C", isChecked: false },
];

const App = () => {
  const [items, setItems] = useState(arr);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckedItem = (id) => {
    const updatedItem = items.map((ele) =>
      ele.id === id ? { ...ele, isChecked: !ele.isChecked } : ele
    );
    setItems(updatedItem);

    const allSelected = updatedItem.every((ele) => ele.isChecked);
    setSelectAll(allSelected);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedItems = items.map((item) => ({
      ...item,
      isChecked: !selectAll,
    }));
    setItems(updatedItems);
  };

  return (
    <div>
      <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
      <label>Select All</label>
      <br /> <br />
      {items.map((ele) => (
        <div key={ele.id}>
          <input
            type="checkbox"
            checked={ele.isChecked}
            onChange={() => handleCheckedItem(ele.id)}
          />
          <label>{ele.value}</label>
        </div>
      ))}
    </div>
  );
};

export default App;
