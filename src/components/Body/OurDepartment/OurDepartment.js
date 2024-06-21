import styled from "styled-components";

const Department = styled.div``;
const Title = styled.p`
  color: rgba(150, 187, 124, 1);
  font-weight: 500;
  font-size: 2vh;
`;
const Header = styled.h2`
  font-size: 4.3vh;
  margin: 0;
  color: white;
`;
const Text = styled.p`
  color: white;
  margin-bottom: 10vh;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 7vh;
`;
const CardDiv = styled.div`
  background-color: white;
  padding-bottom: 3vh;
`;
const ImagePart = styled.div`
  position: relative;
`;
const InfoPart = styled.div`
  padding: 1.5vh;
  margin-top: 2vh;
`;
const Sale = styled.div`
  position: absolute;
  color: white;
  background: rgba(231, 64, 64, 1);
  padding: 5px 10px;
  border-radius: 3px;
  font-weight: 600;
  left: 2vh;
  top: 3vh;
`;
const IconsDiv = styled.div`
  position: absolute;
  top: 28vh;
  display: flex;
  justify-content: center;
  gap: 10px;
  left: 11vh;
  margin: 0;
`;
const IconBuble = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
`;
const CardTitle = styled.p`
  color: rgba(150, 187, 124, 1);
  font-weight: 700;
  margin: 0;
`;
const CardHeader = styled.p`
  color: rgba(37, 43, 66, 1);

  font-weight: 700;
`;
const RatingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  gap: 5px;
  border-radius: 2vh;
  background: rgba(45, 64, 89, 1);
`;

const TitleAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.p`
  color: white;
  font-size: 1.5vh;
  margin: 0;
`;
const CardText = styled.p`
  color: rgba(115, 115, 115, 1);
  font-weight: 600;
`;
const SalesDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  font-weight: 600;
`;
const PriceDiv = styled.div`
  display: flex;
  justify-content: left;
  gap: 1vh;
`;
const SalesText = styled.p`
  color: rgba(115, 115, 115, 1);
`;

const OldPrice = styled.p`
  font-weight: 600;
  color: rgba(189, 189, 189, 1);
`;
const NewPrice = styled.p`
  color: rgba(255, 171, 113, 1);
  font-weight: 600;
`;
const Button = styled.button`
  display: flex;
  gap: 1vh;
  color: rgba(150, 187, 124, 1);
  background-color: transparent;
  padding: 1.5vh 2vh;
  font-size: 2vh;
  border-radius: 4vh;
  align-items: center;
  font-weight: 600;
  border: 1px solid rgba(150, 187, 124, 1);
`;

export {
  IconsDiv,
  Title,
  Header,
  Text,
  Department,
  CardsContainer,
  CardDiv,
  ImagePart,
  InfoPart,
  Sale,
  TitleAndRating,
  IconBuble,
  CardTitle,
  Price,
  CardHeader,
  RatingDiv,
  CardText,
  SalesDiv,
  PriceDiv,
  SalesText,
  OldPrice,
  NewPrice,
  Button,
};
