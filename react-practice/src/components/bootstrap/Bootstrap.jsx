import React from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";

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
  return (
    <div>
      <hr />
      <Carousel data={carousel}></Carousel>
      <Dropdown></Dropdown>
      <Accordion data={accordionData}></Accordion>
    </div>
  );
};

export default Bootstrap;
