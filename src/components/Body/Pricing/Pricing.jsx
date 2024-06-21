import React from "react";
import {
  Header,
  Title,
  CardsContainer,
  Card,
  HeartIcon,
  FreeText,
  Text,
  Price,
  CheckedText,
  NewSticker,
  PerMonthText,
  CardText,
  CheckedDiv,
  CheckedMark,
  CheckContainer,
  Img,
  PricingDiv,
  StateText,
  Button,
} from "./Pricing.js";
import { BlueContainer } from "../../../GeneralStyles";
import WhiteHeart from "../../../assets/Images/icons/WhiteHeart.png";
import GreenHeart from "../../../assets/Images/icons/GreenHeart.png";
import CheckMark from "../../../assets/Images/icons/CheckMark.png";

const Pricing = () => {
  return (
    <BlueContainer>
      <PricingDiv>
        <Title>Practice Advice</Title>
        <Header>Pricing</Header>
        <Text>
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </Text>
        <CardsContainer>
          <NewSticker>
            <p>New</p>
          </NewSticker>
          <Card color="white">
            <HeartIcon color="white">
              <Img src={WhiteHeart} alt="" />
            </HeartIcon>
            <FreeText color="white">FREE</FreeText>
            <CardText color="white">
              Organize across all <br /> apps by hand
            </CardText>
            <Price color="white">19$</Price>
            <PerMonthText color="white">Per Month</PerMonthText>
            <StateText color="rgba(115, 115, 115, 1)">
              Slate helps you see how <br />
              many more days you <br /> need...
            </StateText>
            <Button color="white">Try for free</Button>
            <CheckContainer>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Unlimited product updates
                </CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Unlimited product updates
                </CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Unlimited product updates
                </CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={false}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">1GB Cloud storage</CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={false}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Email and community <br /> support
                </CheckedText>
              </CheckedDiv>
            </CheckContainer>
          </Card>
          <Card color="">
            <HeartIcon color="">
              <Img src={GreenHeart} alt="" />
            </HeartIcon>
            <FreeText color="">FREE</FreeText>
            <CardText color="">
              Organize across all <br /> apps by hand
            </CardText>
            <Price color="">19$</Price>
            <PerMonthText color="">Per Month</PerMonthText>
            <StateText color="">
              Slate helps you see how <br />
              many more days you <br /> need...
            </StateText>
            <Button color="blue">Try for free</Button>
            <CheckContainer>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="">Unlimited product updates</CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="">Unlimited product updates</CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="">Unlimited product updates</CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={false}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="">1GB Cloud storage</CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={false}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="">
                  Email and community <br /> support
                </CheckedText>
              </CheckedDiv>
            </CheckContainer>
          </Card>
          <Card color="white">
            <HeartIcon color="white">
              <Img src={WhiteHeart} alt="" />
            </HeartIcon>
            <FreeText color="white">FREE</FreeText>
            <CardText color="white">
              Organize across all <br /> apps by hand
            </CardText>
            <Price color="white">19$</Price>
            <PerMonthText color="white">Per Month</PerMonthText>
            <StateText color="rgba(115, 115, 115, 1)">
              Slate helps you see how <br />
              many more days you <br /> need...
            </StateText>
            <Button color="white">Try for free</Button>
            <CheckContainer>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Unlimited product updates
                </CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Unlimited product updates
                </CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={true}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Unlimited product updates
                </CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={false}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">1GB Cloud storage</CheckedText>
              </CheckedDiv>
              <CheckedDiv>
                <CheckedMark isChecked={false}>
                  <img src={CheckMark} alt="" />
                </CheckedMark>
                <CheckedText color="white">
                  Email and community <br /> support
                </CheckedText>
              </CheckedDiv>
            </CheckContainer>
          </Card>
        </CardsContainer>
      </PricingDiv>
    </BlueContainer>
  );
};

export default Pricing;
