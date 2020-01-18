import React, { useState, useEffect } from 'react';

import Posts from '../../Components/Post/index';
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    async function loadPosts() {
      const response = await Api.get('/posts', {});
      const posts = response.data;
      setPosts(posts);
    };
    loadPosts();
  }, []);

  async function createPost() {
    const response = await Api.post('/posts', { 
      title, 
      content,
    });

    setTitle('');
    setContent('');
  };

  return (
    <>
    <Header/>
    <Container>
      <LeftContainer>
        Nothing here
      </LeftContainer>
      
      <FeedContainer>
        <InteractBox>
          <PostTitle value={title} onChange={(event) => setTitle(event.target.value)} placeholder='What you want to talk about?'/>
          <PostContent value={content} onChange={(event) => setContent(event.target.value)} placeholder='Tell us more...'/>
          <InteractButtton onClick={createPost}>Interact!</InteractButtton>
        </InteractBox>
        {posts.map(post => (
          <Posts key={post.id} post={post}/>
        ))}
      </FeedContainer>

      <RightContainer>
        Nothing there
      </RightContainer>
    </Container>
    </>
  );
}
