import React from "react";
import {
  TransparentBtn,
  Paragraph,
  SecondaryHeader,
  BlueContainer,
  InformationContainer,
} from "../../../GeneralStyles.js";
import RedLine from "../../../assets/Images/icons/RedLine.png";
import Stethoscope from "../../../assets/Images/icons/Stethoscope.png";
import PharmacyLogo from "../../../assets/Images/icons/PharmacyLogo.png";
import MedicalNotes from "../../../assets/Images/icons/MedicalNotes.png";
import GreenArrow from "../../../assets/Images/icons/GreenArrow.png";
import {
  CardDiv,
  DoubleCards,
  SingleCard,
  CardText,
  GreenArrowImg,
  WhiteCard,
  CardHeader,
  RedDivider,
  RedCard,
} from "./OurDoctorsStyles.js";

const OurDoctors = () => {
  return (
    <BlueContainer>
      <InformationContainer>
        <img src={RedLine} alt="" />
        <SecondaryHeader>
          Our Doctors <br />
          Specialize in you
        </SecondaryHeader>
        <Paragraph>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: <br /> Newtonian mechanics
        </Paragraph>
        <TransparentBtn>
          Learn More <GreenArrowImg src={GreenArrow} alt="" />
        </TransparentBtn>
      </InformationContainer>
      <CardDiv>
        <DoubleCards>
          <WhiteCard>
            <RedCard>
              <img src={Stethoscope} alt="" />
            </RedCard>
            <CardHeader>Quick examination</CardHeader>
            <RedDivider></RedDivider>
            <CardText>The gradual accumulation of information about</CardText>
          </WhiteCard>
          <WhiteCard>
            <RedCard>
              <img src={PharmacyLogo} alt="" />
            </RedCard>
            <CardHeader>Best dental surgeons</CardHeader>
            <RedDivider></RedDivider>
            <CardText>The gradual accumulation of information about </CardText>
          </WhiteCard>
        </DoubleCards>
        <SingleCard>
          <WhiteCard>
            <RedCard>
              <img src={MedicalNotes} alt="" />
            </RedCard>
            <CardHeader>Emergency Case</CardHeader>
            <RedDivider></RedDivider>
            <CardText>The gradual accumulation of information about </CardText>
          </WhiteCard>
        </SingleCard>
      </CardDiv>
    </BlueContainer>
  );
};

export default OurDoctors;
