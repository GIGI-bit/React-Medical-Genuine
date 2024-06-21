import styled from "styled-components";

const StaticNumber = styled.h1`
  font-size: 10vh;
  color: rgba(150, 187, 124, 1);
  margin: 0;
`;

const StaticName = styled.p`
  color: white;
  margin: 0;
  font-weight: 600;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { StaticName, StaticNumber, Div };
