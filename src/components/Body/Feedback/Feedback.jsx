import React from "react";
import { BlueContainer } from "../../../GeneralStyles";
import {
  FeedbackContainer,
  Title,
  Header,
  Text,
  CommentsContainer,
  Comment,
  CommentText,
  UserName,
  UserOccupation,
  UserImg,
  StarContainer,
  UserInfo,
  UserData,
} from "./Feedback.js";

import FilledStar from "../../../assets/Images/Comments/FilledStar.png";
import EmptyStar from "../../../assets/Images/Comments/EmptyStar.png";
import FirstUser from "../../../assets/Images/Comments/FirstUser.png";
import SecondUser from "../../../assets/Images/Comments/SecondUser.png";
import ThirdUser from "../../../assets/Images/Comments/ThirdUser.png";

const Feedback = () => {
  return (
    <BlueContainer>
      <FeedbackContainer>
        <Title>Practice Advice</Title>
        <Header>Each and every client is important</Header>
        <Text>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics.
        </Text>
        <CommentsContainer>
          <Comment>
            <StarContainer>
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={EmptyStar} alt="" />
            </StarContainer>
            <CommentText>
              Slate helps you see <br />
              how many more days <br />
              you need to work to <br />
              reach your financial <br />
              goal for the month <br />
              and year.
            </CommentText>
            <UserInfo>
              <UserImg src={FirstUser} />
              <UserData>
                <UserName>Regina Miles</UserName>
                <UserOccupation>Designer</UserOccupation>
              </UserData>
            </UserInfo>
          </Comment>
          <Comment>
            <StarContainer>
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={EmptyStar} alt="" />
            </StarContainer>
            <CommentText>
              Slate helps you see <br />
              how many more days <br />
              you need to work to <br />
              reach your financial <br />
              goal for the month <br />
              and year.
            </CommentText>
            <UserInfo>
              <UserImg src={SecondUser} />
              <UserData>
                <UserName>Regina Miles</UserName>
                <UserOccupation>Designer</UserOccupation>
              </UserData>
            </UserInfo>
          </Comment>
          <Comment>
            <StarContainer>
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={FilledStar} alt="" />
              <img src={EmptyStar} alt="" />
            </StarContainer>
            <CommentText>
              Slate helps you see <br />
              how many more days <br />
              you need to work to <br />
              reach your financial <br />
              goal for the month <br />
              and year.
            </CommentText>
            <UserInfo>
              <UserImg src={ThirdUser} />
              <UserData>
                <UserName>Regina Miles</UserName>
                <UserOccupation>Designer</UserOccupation>
              </UserData>
            </UserInfo>
          </Comment>
        </CommentsContainer>
      </FeedbackContainer>
    </BlueContainer>
  );
};

export default Feedback;
