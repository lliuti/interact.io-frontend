import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../Components/Header/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { 
  Container, 
  FeedContainer,
  LeftContainer,
  RightContainer,
  InteractBox,
  PostTitleInput,
  PostContentInput,
  InteractButtton,
  //
  PostContainer,
  PostTitleBox,
  PostContentBox,
  PostTitle,
  PostDeleteButton,
  PostContent
} from './styles';

export default function Feed() {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(0);

  useEffect(() => {

    const data = JSON.parse(sessionStorage.getItem('user'));
    setUserId(data.id);

    
    loadPosts();
  }, []);

  async function loadPosts() {
    const response = await api.get('/posts', {});
    const posts = response.data;
    setPosts(posts);
  };

  async function createPost() {
    await api.post('/posts', { 
      title, 
      content,
    });

    const newPost = {
      id: 'mocked_id',
      title,
      content,
      user_id: userId,
    };

    setTitle('');
    setContent('');
    setPosts([...posts, newPost]);
  };

  async function deletePost(postId) {
    await api.delete(`/posts/${postId}`);
    loadPosts();
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
          <PostTitleInput value={title} onChange={(event) => setTitle(event.target.value)} placeholder='What you want to talk about?'/>
          <PostContentInput value={content} onChange={(event) => setContent(event.target.value)} placeholder='Tell us more...'/>
          <InteractButtton onClick={createPost}>Interact!</InteractButtton>
        </InteractBox>
        {posts.map(post => (
          // <Posts key={post.id} post={post}/>
          <PostContainer key={post.id}>
            <PostTitleBox>
              <PostTitle>{post.title}</PostTitle>
              {post.user_id === userId ? 
              <PostDeleteButton onClick={() => deletePost(post.id)}>
                <FontAwesomeIcon icon={faTrash}/>
              </PostDeleteButton> : null}
            </PostTitleBox>
            <PostContentBox>
              <PostContent>{post.content}</PostContent>
            </PostContentBox>
          </PostContainer>
        ))}
      </FeedContainer>

      <RightContainer>
        Nothing there
      </RightContainer>
    </Container>
    </>
  );
}
