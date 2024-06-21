import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Logo = styled.img``;
const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  gap: 1vh;
  color: white;
  font-weight: 700;
  font-size: 1.7vh;
`;

const Join = styled.button`
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 3px;
  background: rgba(150, 187, 124, 1);
  padding: 1.5vh 2vh;
  display: flex;
  gap: 2vh;
  align-items: center;
`;
const Header = styled.header`
  font-family: "Montserrat";
  position: relative;
  height: 99vh;
`;
const BackgroundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 2vh;
  margin-left: 30vh;
`;

const LargeJoin = styled.button`
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 3px;
  background: rgba(150, 187, 124, 1);
  padding: 2vh 4.5vh;
  display: flex;
  font-size: 1.3vh;
`;

const TitleDiv = styled.div`
  position: absolute;
  top: 57vh;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const H1 = styled.h1`
  color: white;
  font-size: 9vh;
  text-align: center;
  padding: 0;
  margin-top: 5vh;
`;
const Title = styled.p`
  text-align: center;
  color: white;
  margin-top: 0vh;
  width: 60vh;
  font-size: 3vh;
`;

export {
  LargeJoin,
  Nav,
  Header,
  Join,
  BackgroundImage,
  UL,
  ButtonContainer,
  H1,
  Title,
  TitleDiv,
  Logo,
};
