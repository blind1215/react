import React, { useRef, useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, message: "눈사람" },
    { id: 2, message: "얼음" },
    { id: 3, message: "눈" },
    { id: 4, message: "바람" },
  ]);

  //const [nextId, setNextId] = useState(5);
  const [message, setMessage] = useState("");
  const nextId = useRef(5);

  const clickH = () => {
    //alert(message);
    // 1번방법
    //const newNames = [...names, message];
    // 2번방법
    console.log(nextId);
    setNames((prev) => [...prev, { id: nextId.current, message }]);
    setMessage("");
    //setNextId(nextId + 1);
    nextId.current++;
  };
  const changeH = (e) => {
    setMessage(e.target.value);
  };
  const deleteH = (num) => {
    console.log(num);
    const newNames = names.filter((name) => name.id !== num);
    setNames(newNames);
    console.log(newNames);
  };
  return (
    <>
      <hr />
      <input onChange={(e) => changeH(e)} value={message} />
      <button onClick={clickH}>추가</button>
      <ul>
        {names.map(({ id, message }) => (
          <li key={id} onDoubleClick={() => deleteH(id)}>
            {message} 입니다.
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;
