import React, { useState } from 'react';

import Api from '../../services/api';
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
  const [content, setContent] = useState([]);

  async function createPost() {

    const response = await Api.post('/posts', { 
      title, 
      content,
    });
    console.log(response);
  };

  return (
    <>
    <Header/>
    <Container>
      <LeftContainer>

      </LeftContainer>
      <FeedContainer>
        <InteractBox>
          <PostTitle onChange={(event) => setTitle(event.target.value)} placeholder='What you want to talk about?'/>
          <PostContent onChange={(event) => setContent(event.target.value)} placeholder='Tell us more...'/>
          <InteractButtton onClick={createPost}>Interact!</InteractButtton>
        </InteractBox>
      </FeedContainer>
      <RightContainer>

      </RightContainer>
    </Container>
    </>
  );
}
