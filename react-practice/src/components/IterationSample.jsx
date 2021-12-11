import React, { useState } from "react";

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const [message, setMessage] = useState("");
  const newArray = names.map((e, i) => {
    return <li key={i}>{e} 입니다</li>;
  });
  const clickH = () => {
    alert(message);
    setMessage("");
  };
  return (
    <>
      <br />
      <input onChange={(e) => setMessage(e.target.value)} value={message} />
      <button onClick={clickH}>추가</button>
      <ul>
        {names.map((name, i) => (
          <li key={i}>{name} 입니다.</li>
        ))}
        {newArray}
      </ul>
    </>
  );
};

export default IterationSample;
