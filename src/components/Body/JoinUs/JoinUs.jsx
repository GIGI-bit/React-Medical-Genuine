import React from "react";
import { BlueContainer } from "../../../GeneralStyles";
import {
  JoinContainer,
  Header,
  Text,
  Title,
  Input,
  InputDiv,
  Button,
} from "./JoinUs.js";

const JoinUs = () => {
  return (
    <BlueContainer>
      <JoinContainer>
        <Title>Newsletter</Title>
        <Header>JOIN US</Header>
        <Text>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics.
        </Text>
        <InputDiv>
          <Input placeholder="Your Email"></Input>
          <Button>Subscribe</Button>
        </InputDiv>
      </JoinContainer>
    </BlueContainer>
  );
};

export default JoinUs;
