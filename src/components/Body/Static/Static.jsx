import React from "react";
import { BlueContainer } from "../../../GeneralStyles";
import { StaticName, StaticNumber, Div } from "./Static.js";

const Static = () => {
  return (
    <BlueContainer>
      <Div>
        <StaticNumber>15K</StaticNumber>
        <StaticName>Happy Customers</StaticName>
      </Div>
      <Div>
        <StaticNumber>150K</StaticNumber>
        <StaticName>Monthly Visitors</StaticName>
      </Div>
      <Div>
        <StaticNumber>15</StaticNumber>
        <StaticName>Countries Worldwide</StaticName>
      </Div>
      <Div>
        <StaticNumber>100+</StaticNumber>
        <StaticName>Top Partners</StaticName>
      </Div>
    </BlueContainer>
  );
};

export default Static;
