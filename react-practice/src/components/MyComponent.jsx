import React from "react";

const MyComponent = ({ name, name2, children }) => {
  return (
    <div>
      <br />
      안녕하세요, 제이름은{name} 입니다.
      <br />
      그리고 제이름은 {name2} 입니다.
      {children}
      <br />
    </div>
  );
};

export default MyComponent;
