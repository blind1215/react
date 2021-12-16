import React, { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const Info = () => {
  //   const [name, setName] = useState("");
  //   const [nickName, setNickName] = useState("");

  //   useEffect(() => {
  //     console.log("최초 렌더링");
  //   }, []);
  //   useEffect(() => {
  //     console.log("네임이 변경되었다");
  //   }, [name]);
  //   useEffect(() => {
  //     console.log("닉네임이 변경되었다");
  //   }, [nickName]);

  //   const changeInput = (e, v) => {
  //     console.log(e);
  //     if (v === 1) {
  //       setName(e.target.value);
  //     } else if (v === 2) {
  //       setNickName(e.target.value);
  //     }
  //   };

  const [state, dispatch] = useReducer(reducer, { name: "", nickName: "" });
  const { name, nickName } = state;
  const changeInput = (e) => {
    dispatch(e.target);
  };
  return (
    <>
      <hr />
      <div>
        <input
          placeholder="이름 입력"
          onChange={changeInput}
          name="name"
          value={name}
        />
        <input
          placeholder="닉네임 입력"
          onChange={changeInput}
          name="nickName"
          value={nickName}
        />
      </div>
      <h3>이름 : {name}</h3>
      <h3>닉네임 : {nickName}</h3>
    </>
  );
};

export default Info;
