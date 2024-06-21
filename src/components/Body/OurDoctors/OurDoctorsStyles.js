import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vh;
`;

const DoubleCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vh;
`;
const SingleCard = styled.div`
  align-items: center;
  padding-top: 15vh;
`;
const WhiteCard = styled.div`
  background-color: white;
  padding: 2vh;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: baseline;
`;
const RedCard = styled.div`
  background: rgba(255, 113, 113, 1);
  padding: 1.5vh;
  border-radius: 8px;
`;

const CardHeader = styled.p`
  margin: 0;
  font-weight: 600;
`;
const RedDivider = styled.div`
  width: 5vh;
  border-bottom: 3px solid rgba(255, 113, 113, 1);
`;

const CardText = styled.p`
  color: rgba(115, 115, 115, 1);
  width: 10vw;
`;
const GreenArrowImg = styled.img`
  margin-left: 10px;
`;

export {
  GreenArrowImg,
  CardDiv,
  CardText,
  RedDivider,
  CardHeader,
  WhiteCard,
  RedCard,
  DoubleCards,
  SingleCard,
};
