import styled from "styled-components";

const FeedbackContainer = styled.div``;
const Title = styled.p`
  color: rgba(150, 187, 124, 1);
  font-weight: 700;
`;
const Header = styled.h2`
  color: white;
  font-size: 4.7vh;
  margin: 0;
`;
const Text = styled.p`
  color: white;
  font-size: 2vh;
  margin-bottom: 10vh;
`;
const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10vh;
`;
const Comment = styled.div`
  background-color: white;
  padding: 7vh 10vh 3vh 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CommentText = styled.p`
  text-align: center;
  color: rgba(115, 115, 115, 1);
`;
const UserName = styled.p`
  color: rgba(150, 187, 124, 1);
  margin: 0;
`;
const UserOccupation = styled.p`
  margin: 0;
`;
const UserImg = styled.img``;
const StarContainer = styled.div``;
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 1vh;
`;
const UserData = styled.div``;

export {
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
};
