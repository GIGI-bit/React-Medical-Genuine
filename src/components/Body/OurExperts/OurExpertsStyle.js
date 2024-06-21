import styled from "styled-components";

const ExpertsAddDiv = styled.div`
  position: relative;
`;
const GreenArrowImg = styled.img`
  margin-left: 10px;
`;

const GraySquare = styled.div`
  width: 22vw;
  height: 39vh;
  border-top-right-radius: 8vh;
  border-bottom-left-radius: 8vh;
  position: absolute;
  left: 10vh;
  top: 3vh;
  background: rgba(220, 234, 239, 1);
`;

const StaticsImg = styled.img`
  position: absolute;
  top: 16vh;
  left: -4vh;
`;
const SinglesImg = styled.img`
  position: absolute;
  top: 10vh;
  left: 42vh;
`;
const DocPic = styled.img`
  position: absolute;
  left: 7vh;
`;

export {
  ExpertsAddDiv,
  DocPic,
  SinglesImg,
  GreenArrowImg,
  StaticsImg,
  GraySquare,
};
