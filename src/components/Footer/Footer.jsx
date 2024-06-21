import React from "react";
import Insta from "../../assets/Images/icons/Insta.png";
import Twitter from "../../assets/Images/icons/Twitter.png";
import Facebook from "../../assets/Images/icons/Facebook.png";
import Location from "../../assets/Images/icons/Location.png";
import Mail from "../../assets/Images/icons/Mail.png";
import Phone from "../../assets/Images/icons/Phone.png";
import {
  InfoDiv,
  InfoHeader,
  Text,
  ContactDiv,
  SocialDiv,
  TopDiv,
  Img,
  BottomDiv,
} from "./Footer.js";

const FooterElement = () => {
  return (
    <footer>
      <TopDiv>
        <InfoDiv>
          <InfoHeader>Company Info</InfoHeader>
          <Text>About Us</Text>
          <Text>Carrier</Text>
          <Text>We are hiring</Text>
          <Text>Blog</Text>
        </InfoDiv>
        <InfoDiv>
          <InfoHeader>Legal</InfoHeader>
          <Text>About Us</Text>
          <Text>Carrier</Text>
          <Text>We are hiring</Text>
          <Text>Blog</Text>
        </InfoDiv>
        <InfoDiv>
          <InfoHeader>Features</InfoHeader>
          <Text>Business Marketing</Text>
          <Text>User Analytic</Text>
          <Text>Live Chat</Text>
          <Text>Unlimited Support</Text>
        </InfoDiv>
        <InfoDiv>
          <InfoHeader>Resources</InfoHeader>
          <Text>IOS & Android</Text>
          <Text>Watch a Demo</Text>
          <Text>Customers</Text>
          <Text>API</Text>
        </InfoDiv>
        <InfoDiv>
          <InfoHeader>Get In Touch</InfoHeader>
          <ContactDiv>
            <Img src={Phone} />
            <Text>(480) 555-0103</Text>
          </ContactDiv>
          <ContactDiv>
            <Img src={Location} />
            <Text>4517 Washington Ave. Manchester, Kentucky 39495</Text>
          </ContactDiv>
          <ContactDiv>
            <Img src={Mail} />
            <Text>debra.holt@example.com</Text>
          </ContactDiv>
        </InfoDiv>
      </TopDiv>
      <BottomDiv>
        <Text>Made With Love By Figmaland All Right Reserved </Text>
        <SocialDiv>
          <Img src={Facebook} />
          <Img src={Insta} />
          <Img src={Twitter} />
        </SocialDiv>
      </BottomDiv>
    </footer>
  );
};

export default FooterElement;
