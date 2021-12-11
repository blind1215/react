import React, { useState } from "react";

const EventPractice = () => {
  //   const [value, setValue] = useState("");
  //   const [userName, setUserName] = useState("");
  const [form, setForm] = useState({ userName: "", value: "" });
  const { userName, value } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  //   const handleChange2 = (e) => {
  //     console.log(e.target.value);
  //     setValue(e.target.value);
  //   };
  const handleClick = () => {
    alert(`${userName} : ${value}`);
    setForm({ userName: "", value: "" });
  };
  const handleKeyPress = (e) => {
    e.key === "Enter" && handleClick();
    console.log(e.key);
  };
  return (
    <>
      <br></br>
      <input
        onChange={handleChange}
        placeholder="유저이름"
        name="userName"
        value={userName}
      ></input>
      <input
        onChange={handleChange}
        placeholder="메세지"
        name="value"
        value={value}
        onKeyPress={handleKeyPress}
      ></input>
      <button onClick={handleClick}>확인</button>
    </>
  );
};

export default EventPractice;
