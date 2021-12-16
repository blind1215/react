import React, { useState } from "react";
import styled, { css } from "styled-components";

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indexH = (i) => {
    if (i === activeIndex) {
      setActiveIndex(data.length);
    } else {
      setActiveIndex(i);
    }
  };
  return (
    <List>
      {data.map(({ id, title, content }, index) => (
        <Item key={id} active={index === activeIndex}>
          <Header onClick={() => indexH(index)}>{title}</Header>
          <Body>{content}</Body>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ddd;
  margin: 20px;
  width: 800px;
  border-radius: 4px;
`;
const Item = styled.li`
  & + & {
    border-top: 1px solid #ddd;
  }

  ${({ active }) =>
    active &&
    css`
      ${Header} {
        background: #e7f1ff;
        color: #0c63e4;
      }
      ${Body} {
        display: block;
      }
    `}
`;
const Header = styled.div`
  padding: 10px 15px;
  cursor: pointer;
`;
const Body = styled.div`
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  display: none;
`;

export default Accordion;
