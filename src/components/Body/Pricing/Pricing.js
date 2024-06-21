import styled from "styled-components";

const Header = styled.h2`
  margin: 0;
  font-size: 5vh;
  color: white;
`;
const Title = styled.p`
  color: rgba(150, 187, 124, 1);
`;
const Text = styled.p`
  color: white;
  font-weight: 500;
  margin-bottom: 10vh;
`;
const PricingDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  gap: 15vh;
`;
const Card = styled.div`
  background-color: ${(props) =>
    props.color === "white" ? "white" : "rgba(42, 124, 199, 1)"};
  padding: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeartIcon = styled.div`
  background-color: ${(props) =>
    props.color === "white" ? "rgba(150, 187, 124, 1)" : "white"};
  display: flex;
  align-items: center;
  margin: 0;
  padding: 6vh;
  border-radius: 100%;
`;
const FreeText = styled.p`
  color: ${(props) => (props.color === "white" ? "black" : "white")};
  font-weight: 700;
  font-size: 2vh;
`;
const Price = styled.p`
  font-size: 4vh;
  font-weight: 700;
  margin: 0;
  margin-top: 3vh;
  color: ${(props) =>
    props.color === "white" ? "rgba(150, 187, 124, 1)" : "white"};
`;
const PerMonthText = styled.p`
  /* margin: 0; */
  padding: 0;
  font-size: 1.2vh;
  font-weight: 600;
  color: ${(props) =>
    props.color === "white" ? "rgba(142, 194, 242, 1)" : "white"};
`;
const CardText = styled.p`
  font-size: 1.3vh;
  font-weight: 600;
  text-align: center;
  color: ${(props) =>
    props.color === "white" ? "rgba(115, 115, 115, 1)" : "white"};
`;
const CheckedMark = styled.div`
  padding: 0.5vh;
  border-radius: 100%;
  background-color: ${(props) =>
    props.isChecked ? "rgba(45, 192, 113, 1)" : "rgba(189, 189, 189, 1)"};
`;
const CheckedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 1vh;
`;
const Button = styled.button`
  padding: 1.5vh 10vh;
  color: white;
  border: none;
  background-color: ${(props) =>
    props.color === "white"
      ? "rgba(150, 187, 124, 1)"
      : "rgba(45, 192, 113, 1)"};
  font-weight: 600;
  margin-top: 4vh;
`;
const CheckedText = styled.p`
  color: ${(props) => (props.color === "white" ? "black" : "white")};
  font-weight: 500;
  font-size: 1.4;
`;
const Img = styled.img`
  height: 6vh;
  width: 4vw;
`;

const StateText = styled.p`
  font-size: 1.4vh;
  font-weight: 500;
  text-align: center;
  color: ${(props) => (props.color !== "" ? props.color : "white")};
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 5vh;
`;

const NewSticker = styled.div`
  color: white;
  font-weight: 700;
  background-color: rgba(231, 124, 64, 1);
  padding: 2vh;
  border: none;
  position: absolute;
  font-size: 3vh;
  border-radius: 100%;
  left: 95%;
  top: -5%;
`;

export {
  NewSticker,
  Header,
  CheckedDiv,
  Img,
  Title,
  CheckedText,
  Text,
  StateText,
  CardsContainer,
  Card,
  PricingDiv,
  HeartIcon,
  FreeText,
  Price,
  PerMonthText,
  CardText,
  CheckedMark,
  CheckContainer,
  Button,
};
