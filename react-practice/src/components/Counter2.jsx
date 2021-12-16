import React, { useState } from "react";

const Counter2 = () => {
  const [number, setNumber] = useState(0);
  const numberChange = (num) => {
    if (num === -1 && number === 0) {
      alert("카운터 값은 0 미만이 될수없습니다.");
      return;
    }
    setNumber(number + num);
  };
  return (
    <>
      <hr />
      <h2>현재 카운터 값은 {number} 입니다.</h2>
      <button onClick={() => numberChange(10)}>+10</button>
      <button onClick={() => numberChange(3)}>+3</button>
      <button onClick={() => numberChange(1)}>+1</button>
      <button onClick={() => numberChange(-1)}>-1</button>
    </>
  );
};

export default Counter2;
