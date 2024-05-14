import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const countries = [
  {
    countryName: "USA",
    states: ["California", "New York", "Texas"],
  },
  {
    countryName: "Canada",
    states: ["Ontario", "Quebec", "British Columbia"],
  },
];

const App = () => {

  const [selectItem, setSelectItem] = useState();
  const [stateList, setStateList]= useState([])


const handleSelectCountry = (e) => {
  const selectedCountry = e.target.value;
  setSelectItem(selectedCountry);

  const country = countries.find((ele) => ele.countryName === selectedCountry);
  setStateList(country ? country.states : []);
};

  return (
    <div style={{display:'flex', gap:'1rem'}}>
      <div>
        <select value={selectItem} onChange={handleSelectCountry}>
          {countries.map((ele) => {
            return <option>{ele.countryName}</option>;
          })}
        </select>
      </div>
      <div>
        <select>
          {stateList.map((ele) => {
            return <option>{ele}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default App;
