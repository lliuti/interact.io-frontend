import React, { useState } from 'react';

import Header from '../../Components/Header/index';
import { 
  Container, 
  FeedContainer,
  LeftContainer,
  RightContainer,
  InteractBox,
  PostTitle,
  PostContent,
  InteractButtton,
} from './styles';

export default function Feed() {
  const [title, setTitle] = useState([]);
  const [content, setcontent] = useState([]);

  return (
    <>
    <Header/>
    <Container>
      <LeftContainer>

      </LeftContainer>
      <FeedContainer>
        <InteractBox>
          <PostTitle placeholder='What you want to talk about?'/>
          <PostContent placeholder='Tell us more...'/>
          <InteractButtton>Interact!</InteractButtton>
        </InteractBox>
      </FeedContainer>
      <RightContainer>

      </RightContainer>
    </Container>
    </>
  );
}
