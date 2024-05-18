import React, { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [startCounter, setStartCounter] = useState(false);

  const handleStartStop = () => {
    setStartCounter(!startCounter);
  };
  const handleResetTimer = () => {
    setCounter(0);
  };

  useEffect(() => {
    let timer;

    if (startCounter) {
      timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [startCounter]);

  return (
    <center>
      <h1>{counter}</h1>
      <br />
      <button onClick={handleStartStop}>
        {startCounter ? "Stop" : "Start"}
      </button>
      <button onClick={handleResetTimer}>Reset Timer</button>
    </center>
  );
};

export default App;
