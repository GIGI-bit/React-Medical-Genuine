import React from "react";
import {
  Paragraph,
  InformationContainer,
  Container,
  BlueContainer,
  SecondaryHeader,
  TransparentBtn,
} from "../../../GeneralStyles";
import RedLine from "../../../assets/Images/icons/RedLine.png";
import GreenArrow from "../../../assets/Images/icons/GreenArrow.png";
import Expert from "../../../assets/Images/Experts/Expert.png";
import Singles from "../../../assets/Images/Experts/Singles.png";
import Statics from "../../../assets/Images/Experts/Statics.png";
import {
  ExpertsAddDiv,
  GreenArrowImg,
  StaticsImg,
  GraySquare,
  DocPic,
  SinglesImg,
} from "./OurExpertsStyle.js";

const OurExperts = () => {
  return (
    <BlueContainer>
      <ExpertsAddDiv>
        <GraySquare></GraySquare>
        <DocPic src={Expert}></DocPic>
        <StaticsImg src={Statics}></StaticsImg>
        <SinglesImg src={Singles}></SinglesImg>
      </ExpertsAddDiv>
      <InformationContainer>
        <img src={RedLine} alt="" />
        <SecondaryHeader>Meet Our Experts</SecondaryHeader>
        <Paragraph>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: <br /> Newtonian mechanics
        </Paragraph>
        <TransparentBtn>
          Learn More <GreenArrowImg src={GreenArrow} alt="" />
        </TransparentBtn>
      </InformationContainer>
    </BlueContainer>
  );
};

export default OurExperts;
