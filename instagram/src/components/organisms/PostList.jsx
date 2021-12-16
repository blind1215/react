import React from "react";
import styled from "styled-components";

const PostList = ({ data }) => {
  console.log(data);
  return (
    <List>
      {data.map(({ user_name, imageList, profile_image }, index) => (
        <Container key={index}>
          <Header>
            <ProfileImage src={profile_image} />
            <UserName>{user_name}</UserName>
          </Header>
          <Main>
            {imageList.map((img) => (
              <PostImage key={img} src={img} />
            ))}
          </Main>
        </Container>
      ))}
    </List>
  );
};

const List = styled.div``;
const Container = styled.article`
  background: #fff;
  border: 1px solid #dbdbdb;
  margin-bottom: 24px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`;
const UserName = styled.span`
  flex: 1;
  margin-left: 12px;
  color: #262626;
`;
const Main = styled.main``;
const PostImage = styled.img`
  width: 100%;
`;
export default PostList;
