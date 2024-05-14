import React, { useState } from "react";

// NOTE :  IN RADIO BUTTON WE HAVE TO SPECIFY NAME PROPERTY FOR NOT TO BE MULTI SELECT

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const sports = [
  "Football",
  "Basketball",
  "Tennis",
  "Swimming",
  "Golf",
  "Cricket",
  "Baseball",
];
const App = () => {
  const [game, setGame] = useState("");
  const [day, setDay] = useState("");
  console.log(game);

  return (
    <div>
      <h2>
        On {day} you will play {game}
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <div>
          {sports.map((ele, id) => {
            return (
              <div key={id}>
                <input
                  type="radio"
                  name="game"
                  value={ele}
                  onChange={(e) => setGame(e.target.value)}
                />
                <label>{ele}</label>
              </div>
            );
          })}
        </div>
        <div>
          {weekdays.map((ele, id) => {
            return (
              <div key={id}>
                <input
                  type="radio"
                  name="day"
                  value={ele}
                  onChange={(e) => setDay(e.target.value)}
                />
                <label>{ele}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
