import React from 'react';

import { 
  PostContainer,
  TitleBox,
  Title,
  ContentBox,
  Content,
} from './styles';

export default function Posts({ post }) {
  return (
    <PostContainer>
      <TitleBox>
        <Title>{post.title}</Title>
      </TitleBox>
      <ContentBox>
        <Content>{post.content}</Content>
      </ContentBox>
    </PostContainer>
  );
}
