import styled from "styled-components";

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;
const InfoHeader = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
`;
const Text = styled.p`
  color: rgba(115, 115, 115, 1);
  font-family: "Montserrat";
  font-size: 1.5vh;
  margin: 0;
  font-weight: 600;
`;
const ContactDiv = styled.div`
  display: flex;
  justify-content: 2vh;
`;
const SocialDiv = styled.div`
  display: flex;
  gap: 1vh;
`;
const TopDiv = styled.div`
  padding: 5vh 5vh 3vh 10vh;
  display: flex;
  justify-content: space-around;
`;
const BottomDiv = styled.div`
  background: rgba(250, 250, 250, 1);
  padding: 5vh 10vh;
  display: flex;
  gap: 65vh;
  justify-content: center;
`;
const Img = styled.img``;

export {
  InfoDiv,
  InfoHeader,
  Img,
  Text,
  ContactDiv,
  SocialDiv,
  TopDiv,
  BottomDiv,
};
