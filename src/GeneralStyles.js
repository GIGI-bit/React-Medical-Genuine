import styled from "styled-components";

const TransparentBtn = styled.button`
  background: transparent;
  border: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isLogin ? "white" : "rgba(150, 187, 124, 1)")};
`;

const Container = styled.div`
  position: relative;
  padding: 5vh 15vh 0vh 15vh;
`;

const BlueContainer = styled.div`
  position: relative;
  padding: 15vh 15vh 5vh 15vh;
  background: rgba(45, 64, 89, 1);
  font-family: "Montserrat";
  display: flex;
  justify-content: space-between;
`;
const SecondaryHeader = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 5vh;
  text-align: left;
`;

const Paragraph = styled.p`
  color: white;
  font-weight: 500;
  margin-bottom: 4vh;
  /* width: 40vh; */
`;

const InformationContainer = styled.div`
  text-align: left;
  padding-top: 9vh;
  width: 40vw;
`;

export {
  Paragraph,
  InformationContainer,
  Container,
  BlueContainer,
  SecondaryHeader,
  TransparentBtn,
};
