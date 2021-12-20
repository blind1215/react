import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import Modal from "./Modal";
import Backdrop from "./backdrop";

const accordionData = [
  {
    id: 1,
    title: "HEADER1",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "HEADER2",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "HEADER3",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "HEADER4",
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const carousel = [
  "https://t1.daumcdn.net/cfile/tistory/24195836566B2D3A2D",
  "https://t1.daumcdn.net/cfile/tistory/2359C43B5646CBBC23",
  "https://previews.123rf.com/images/yelenayemchuk/yelenayemchuk1505/yelenayemchuk150500046/39793065-%EC%97%AC%EB%A6%84-%ED%92%8D%EA%B2%BD.jpg",
  "https://t1.daumcdn.net/cfile/blog/9912F33359E0502605",
];

const Bootstrap = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalNick, setShowModalNick] = useState(false);
  const [name, setName] = useState("");

  const closeModal = () => {
    setShowModal(false);
    setShowModalNick(false);
  };

  const inputH = (text) => {
    alert(text);
    setName(text);
    closeModal();
  };
  return (
    <div>
      <hr />
      <h2>이름 :{name}</h2>
      <h2>닉네임 :</h2>
      <button onClick={() => setShowModal(!showModal)}>이름 바꾸기</button>
      <button onClick={() => setShowModalNick(!showModalNick)}>
        닉네임 바꾸기
      </button>
      {showModal && (
        <Modal close={closeModal} title="이름 변경" submit={inputH} />
      )}
      {showModalNick && (
        <Modal close={closeModal} title="닉네임 변경" submit={inputH} />
      )}
      {(showModal || showModalNick) && <Backdrop onClick={closeModal} />}
      <Carousel data={carousel}></Carousel>
      <Dropdown></Dropdown>
      <Accordion data={accordionData}></Accordion>
    </div>
  );
};

export default Bootstrap;
