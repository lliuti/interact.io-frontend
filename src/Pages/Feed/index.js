import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../Components/Header/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

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
  InnerPostContainer,
  PostAuthor,
  PostTitleBox,
  PostContentBox,
  PostTitle,
  ManagmentButtons,
  EditPostButton,
  DeletePostButton,
  PostContent,
  //
  EditingPostContainer,
  PostAutorEditInput,
} from './styles';

export default function Feed() {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(0);
  const [editing, setEditing] = useState(false);

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

    setTitle('');
    setContent('');
    loadPosts();
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
          editing == false ? 
          <PostContainer key={post.id}>
            <PostAuthor>
              {post.author.nickname}
            </PostAuthor>
            <InnerPostContainer key={post.id}>
              <PostTitleBox>
                <PostTitle>{post.title}</PostTitle>
                {post.author.id === userId ? 
                <ManagmentButtons>
                  <EditPostButton>
                    <FontAwesomeIcon icon={faPen}/>
                  </EditPostButton>
                  <DeletePostButton onClick={() => deletePost(post.id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                  </DeletePostButton> 
                </ManagmentButtons>
                : null}
              </PostTitleBox>
              <PostContentBox>
                <PostContent>{post.content}</PostContent>
              </PostContentBox>
            </InnerPostContainer>
          </PostContainer>:
          <EditingPostContainer>
            <PostAutorEditInput>
              <InnerPostContainer>
                
              </InnerPostContainer>
            </PostAutorEditInput>
          </EditingPostContainer>
        ))}
      </FeedContainer>

      <RightContainer>
        Nothing there
      </RightContainer>
    </Container>
    </>
  );
}
