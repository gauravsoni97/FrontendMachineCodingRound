import React, { useState } from "react";
import "./index.css";

const data = [
  { id: 1, name: "itemName1", isSelected: false, position: "leftSide" },
  { id: 2, name: "itemName2", isSelected: false, position: "leftSide" },
  { id: 3, name: "itemName3", isSelected: false, position: "leftSide" },
  { id: 4, name: "itemName4", isSelected: false, position: "leftSide" },
];

const App = () => {
  const [arrList, setArrList] = useState(data);

  const handleSelectListItem = (id) => {
    const udpatedItem = arrList.map((ele) =>
      ele.id === id ? { ...ele, isSelected: true } : ele
    );
    setArrList(udpatedItem);
  };
  const handleShiftList = (param) => {
    const ChangePosition = arrList.map((ele) =>
      ele.isSelected ? { ...ele, position: param, isSelected: false } : ele
    );

    setArrList(ChangePosition);
  };

  return (
    <center>
      <div className="parentOfBox">
        <div className="ListBox">
          {arrList
            .filter((ele) => ele.position === "leftSide")
            .map((ele) => {
              return (
                <div
                  className="ListItem"
                  onClick={() => handleSelectListItem(ele.id)}
                >
                  {ele.name}
                </div>
              );
            })}
        </div>
        <div className="btnGroup">
          <button onClick={() => handleShiftList("rightSide")}>
            left to right
          </button>
          <button onClick={() => handleShiftList("leftSide")}>
            right to left
          </button>
        </div>
        <div className="ListBox">
          {arrList
            .filter((ele) => ele.position === "rightSide")
            .map((ele) => {
              return (
                <div
                  className="ListItem"
                  onClick={() => handleSelectListItem(ele.id)}
                >
                  {ele.name}
                </div>
              );
            })}
        </div>
      </div>
    </center>
  );
};

export default App;
