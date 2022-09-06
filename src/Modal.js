import { useContext } from "react";
import styled from "styled-components";
import ModalOpen from "./context/open";

const Overview = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Box = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Modal() {
  const {
    actions: { setIsOpen },
  } = useContext(ModalOpen);
  return (
    <Overview>
      <Box>
        <h1>hello!</h1>
        <button onClick={() => setIsOpen(false)}>닫기</button>
      </Box>
    </Overview>
  );
}
