import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleChange = (method) => {
    if (method == "add") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h1>Counter:-{counter}</h1>
      <button
        onClick={() => {
          handleChange("add");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleChange("substract");
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
