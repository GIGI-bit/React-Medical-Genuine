import PageLogo from "../../assets/Images/PageLogo.png";
import HeaderBackground from "../../assets/Images/HeaderBackground.png";
import LeftArrow from "../../assets/Images/icons/LeftArrow.png";
import { Container, TransparentBtn } from "../../GeneralStyles.js";
import {
  Nav,
  Header,
  TitleDiv,
  H1,
  Logo,
  Title,
  UL,
  BackgroundImage,
  Join,
  ButtonContainer,
  LargeJoin,
} from "./HeaderStyles";

const HeaderElement = () => {
  return (
    <Header>
      <BackgroundImage src={HeaderBackground} />
      <Container>
        <Nav>
          <div>
            <Logo src={PageLogo} />
          </div>
          <UL>
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </UL>
          <ButtonContainer>
            <TransparentBtn isLogin={true}>Log In</TransparentBtn>
            <Join>
              Join Us <img src={LeftArrow} alt="" />
            </Join>
          </ButtonContainer>
        </Nav>
        <TitleDiv>
          <TransparentBtn isLogin={false}>Join Us</TransparentBtn>
          <H1>Meet the Best Hospital</H1>
          <Title>
            We are always fully focused on helping your child and you.
          </Title>
          <LargeJoin>Join Us</LargeJoin>
        </TitleDiv>
      </Container>
    </Header>
  );
};

export default HeaderElement;
