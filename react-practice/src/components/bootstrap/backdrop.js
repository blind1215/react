import styled from "styled-components";

const backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: rgba(0, 0, 0, 0.7); */
  background: #000;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
`;

export default backdrop;
