import React, { useState, useRef } from "react";

function App() {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (index, value) => {
    if (value.length > 1) {
      value = value[value.length - 1];
    }

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Move to the next input box if value is entered
    if (value && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      const newOTP = [...otp];
      newOTP[index - 1] = "";
      setOTP(newOTP);
      inputRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text/plain");
    if (pastedData.length === 4) {
      const newOTP = pastedData.split("").slice(0, 4);
      setOTP(newOTP);
    }
  };

  return (
    <center>
      <br />
      <br />

      {otp.map((value, index) => (
        <input
          style={{ maxWidth: "20px" }}
          key={index}
          type="text"
          maxLength={1}
          value={value}
          
          ref={inputRefs[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleBackspace(index, e)}
          onPaste={handlePaste}
        />
      ))}
    </center>
  );
}

export default App;
