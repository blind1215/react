import React, { useState } from "react";
import styled from "styled-components";

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const indexC = (num) => {
    console.log(data.length - 1);
    if (activeIndex === 0 && num === -1) {
      console.log(data.length - 1);
      console.log("1번들어옴");
      setActiveIndex(data.length - 1);
    } else if (activeIndex === data.length - 1 && num === 1) {
      console.log("2번들어옴");
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + num);
    }
  };
  return (
    <Wrapper2>
      <ImageList active={activeIndex}>
        {data.map((img, index) => (
          <Image key={index} src={img} active={index === activeIndex} />
        ))}
      </ImageList>
      <BtnLeft onClick={() => indexC(-1)}>이전</BtnLeft>
      <BtnRight onClick={() => indexC(1)}>다음</BtnRight>
      <IndexList>
        {data.map((img, index) => (
          <BtnIndex
            key={img}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </BtnIndex>
        ))}
      </IndexList>
    </Wrapper2>
  );
};

const Wrapper2 = styled.div`
  width: 800px;
  height: 600px;
  position: relative;
  margin: 30px;
  overflow: hidden;
`;
const ImageList = styled.div`
  position: absolute;
  display: flex;
  transform: ${({ active }) => `translateX(${active * -800}px)`};
  transition: transform 0.5s ease-in;
`;
const Image = styled.img`
  width: 800px;
  height: 600px;
  /* top: 0;
  left: 0; */
  /* display: ${({ active }) => !active && "none"}; */
  /* opacity: ${({ active }) => !active && "0"}; */
  /* transition: opacity 0.5s ease-in; */
`;

const BtnLeft = styled.button`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;
const BtnRight = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

const IndexList = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;
const BtnIndex = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: ${({ active }) => active && "50%"};
  & + & {
    margin-left: 10px;
  }
`;
export default Carousel;
