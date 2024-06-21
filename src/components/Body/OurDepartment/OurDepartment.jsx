import React from "react";
import { BlueContainer } from "../../../GeneralStyles";
import {
  Title,
  Header,
  Text,
  CardsContainer,
  CardDiv,
  ImagePart,
  InfoPart,
  TitleAndRating,
  Sale,
  IconBuble,
  Price,
  CardTitle,
  SalesText,
  CardHeader,
  RatingDiv,
  CardText,
  SalesDiv,
  IconsDiv,
  PriceDiv,
  OldPrice,
  NewPrice,
  Department,
  Button,
} from "./OurDepartment.js";
import Surgeons from "../../../assets/Images/Departments/Surgeons.png";
import Bubbles from "../../../assets/Images/Departments/Bubbles.png";
import Hands from "../../../assets/Images/Departments/Hands.png";
import Star from "../../../assets/Images/icons/Star.png";
import Download from "../../../assets/Images/icons/Download.png";
import GreenArrow from "../../../assets/Images/icons/GreenArrow.png";
import Cart from "../../../assets/Images/icons/Cart.png";
import Heart from "../../../assets/Images/icons/Heart.png";
import Eye from "../../../assets/Images/icons/Eye.png";

const OurDepartment = () => {
  return (
    <BlueContainer>
      <Department>
        <Title>Practice Advice</Title>
        <Header>Our Department</Header>
        <Text>
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </Text>

        <CardsContainer>
          <CardDiv>
            <ImagePart>
              <Sale>Sale</Sale>
              <img src={Surgeons} alt="" />
              <IconsDiv>
                <IconBuble>
                  <img src={Heart} alt="" />
                </IconBuble>
                <IconBuble>
                  <img src={Cart} alt="" />
                </IconBuble>
                <IconBuble>
                  <img src={Eye} alt="" />
                </IconBuble>
              </IconsDiv>
            </ImagePart>
            <InfoPart>
              <TitleAndRating>
                <CardTitle>Cancer Care</CardTitle>
                <RatingDiv>
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <Price>4.9</Price>
                </RatingDiv>
              </TitleAndRating>
              <CardHeader>Best dental surgeons</CardHeader>

              <CardText>
                We focus on ergonomics and meeting <br /> you where you work.
                It's only a <br /> keystroke away.
              </CardText>
              <SalesDiv>
                <div>
                  <img src={Download} alt="" />
                </div>
                <SalesText>15 Sales</SalesText>
              </SalesDiv>
              <PriceDiv>
                <OldPrice>$16.48</OldPrice>
                <NewPrice>$6.48</NewPrice>
              </PriceDiv>
              <Button>
                Learn More <img src={GreenArrow} alt="" />
              </Button>
            </InfoPart>
          </CardDiv>

          <CardDiv>
            <ImagePart>
              <Sale>Sale</Sale>
              <img src={Bubbles} alt="" />
              <IconsDiv>
                <IconBuble>
                  <img src={Heart} alt="" />
                </IconBuble>
                <IconBuble>
                  <img src={Cart} alt="" />
                </IconBuble>
                <IconBuble>
                  <img src={Eye} alt="" />
                </IconBuble>
              </IconsDiv>
            </ImagePart>
            <InfoPart>
              <TitleAndRating>
                <CardTitle>Emergency Case</CardTitle>
                <RatingDiv>
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <Price>4.9</Price>
                </RatingDiv>
              </TitleAndRating>
              <CardHeader>Online Appoinment</CardHeader>
              <CardText>
                We focus on ergonomics and meeting <br />
                you where you work. It's only a <br /> keystroke away.
              </CardText>
              <SalesDiv>
                <div>
                  <img src={Download} alt="" />
                </div>
                <SalesText>15 Sales</SalesText>
              </SalesDiv>
              <PriceDiv>
                <OldPrice>$16.48</OldPrice>
                <NewPrice>$6.48</NewPrice>
              </PriceDiv>
              <Button>
                Learn More <img src={GreenArrow} alt="" />
              </Button>
            </InfoPart>
          </CardDiv>

          <CardDiv>
            <ImagePart>
              <Sale>Sale</Sale>
              <img src={Hands} alt="" />
              <IconsDiv>
                <IconBuble>
                  <img src={Heart} alt="" />
                </IconBuble>
                <IconBuble>
                  <img src={Cart} alt="" />
                </IconBuble>
                <IconBuble>
                  <img src={Eye} alt="" />
                </IconBuble>
              </IconsDiv>
            </ImagePart>
            <InfoPart>
              <TitleAndRating>
                <CardTitle>Painless procedures</CardTitle>
                <RatingDiv>
                  <div>
                    <img src={Star} alt="" />
                  </div>
                  <Price>4.9</Price>
                </RatingDiv>
              </TitleAndRating>
              <CardHeader>Emergency Case</CardHeader>
              <CardText>
                We focus on ergonomics and meeting <br />
                you where you work. It's only a <br />
                keystroke away.
              </CardText>
              <SalesDiv>
                <div>
                  <img src={Download} alt="" />
                </div>
                <SalesText>15 Sales</SalesText>
              </SalesDiv>
              <PriceDiv>
                <OldPrice>$16.48</OldPrice>
                <NewPrice>$6.48</NewPrice>
              </PriceDiv>
              <Button>
                Learn More <img src={GreenArrow} alt="" />
              </Button>
            </InfoPart>
          </CardDiv>
        </CardsContainer>
      </Department>
    </BlueContainer>
  );
};

export default OurDepartment;
