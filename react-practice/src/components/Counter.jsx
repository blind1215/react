import React from "react";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);

  const handleClick = () => {
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <div style={{ padding: 50 }}>
      <br></br>
      <h1>{number}</h1>
      <button onClick={handleClick}> +1</button>
    </div>
  );
};

export default Counter;
