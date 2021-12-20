import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Modal = ({ close, title, submit }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const inputC = (e) => {
    setText(e.target.value);
  };
  const submitH = () => {
    submit(text);
  };
  return (
    <Container>
      <Header>{title}</Header>
      <Body>
        <input onChange={inputC} />
      </Body>
      <Footer>
        <BtnClose onClick={close}>Close</BtnClose>
        <BtnSubmit onClick={submitH}>Save changes</BtnSubmit>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;
const Header = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
`;
const Body = styled.div`
  padding: 15px;
`;
const Footer = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
`;
const Btn = styled.button`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  background: #6c757d;
  color: #efefef;
  font-size: 15px;
  cursor: pointer;
`;
const BtnClose = styled(Btn)``;
const BtnSubmit = styled(Btn)`
  background: #0d6efd;
`;
export default Modal;
