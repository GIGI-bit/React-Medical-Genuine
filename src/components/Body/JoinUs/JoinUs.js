import styled from "styled-components";

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40vh;
`;
const Header = styled.h2`
  color: white;
  font-size: 4vh;
  margin: 0;
`;
const Title = styled.p`
  color: rgba(150, 187, 124, 1);
`;
const Text = styled.p`
  text-align: center;
  color: rgba(255, 255, 255, 1);

  font-size: 1.5vh;
  font-weight: 500;
`;
const InputDiv = styled.div`
  border: white solid 2px;
  border-radius: 5px;
  margin-top: 6vh;
`;
const Input = styled.input`
  padding: 2vh 3vh;
  width: 50vh;
  border: none;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
const Button = styled.button`
  border: none;
  border-style: none;
  padding: 2vh 3vh;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  background: rgba(150, 187, 124, 1);
`;

export { JoinContainer, Header, Text, Title, Input, InputDiv, Button };
