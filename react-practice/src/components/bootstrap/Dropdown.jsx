import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [isHide, setIsHide] = useState(false);
  const dropdownEl = useRef(null);
  const hideOption = () => {
    console.log(isHide);
    if (isHide === true) {
      setIsHide(false);
    } else {
      setIsHide(true);
    }
  };
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownEl.current && !dropdownEl.current.contains(e.target)) {
        setIsHide(false);
      }
    };
    document.body.addEventListener("click", onClick);
    return () => {
      document.body.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <hr />
      <Wrapper ref={dropdownEl}>
        <Button onClick={hideOption}>dropdown</Button>
        {isHide && (
          <Menu>
            <Item>Item1</Item>
            <Item>Item2</Item>
            <Item>Item3</Item>
            <Item>Item4</Item>
          </Menu>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 5px;
`;
const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  background: #198754;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Menu = styled.ul`
  position: absolute;
  background: #fff;
  width: 150px;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ddd;
`;
const Item = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background: #efefef;
  }
`;

export default Dropdown;
