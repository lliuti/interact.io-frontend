import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Api from '../../../services/api';

import { 
  Container,
  FormContainer,
  DescriptionContainer,
  TextContainer,
  Title,
  TitleItem,
  SignInButton,
  Input,
  And,
  Hype,
  RegisterButton
} from './styles';

export default function SignIn() {

  const [nick, setNick] = useState([]);
  const [password, setPassword] = useState([]);

  async function signIn() {
    // 0 = nickname // 1 = e-mail
    var loginType;
    var response;

    nick.indexOf('@') < 0 ? loginType = 0 : loginType = 1;

    if (loginType === 0) {
      response = await Api.post('/auth', { 
        email: '', 
        nickname: nick, 
        password 
      });
    } else {
      response = await Api.post('/auth', { 
        email: nick, 
        nickname: '', 
        password 
      });
    };

    const { id } = response.data.user;
    const { token } = response.data;
    const user = {
      id,
      token
    }

    localStorage.setItem('user', JSON.stringify(user));

    const teste = localStorage.getItem('user');
    console.log(teste);

  }; 

  return (
    <Container>
      <FormContainer>
        <Title>Sign into your account</Title>
        <Input onChange={(event) => setNick(event.target.value)} placeholder='E-mail / Nickname'/>
        <Input onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Password'/>
        <SignInButton onClick={() => signIn()}>Join!</SignInButton>
      </FormContainer>
      <DescriptionContainer>
        <TextContainer>
          <TitleItem>Create</TitleItem>
          <TitleItem>Like</TitleItem>
          <TitleItem>Share <And>&</And></TitleItem>
          <TitleItem>Comment</TitleItem>
          <Title>posts so you increase your <Hype>HYPE</Hype></Title>
          <Link to='/register'>
            <RegisterButton>Register now!</RegisterButton>
          </Link>
        </TextContainer>
      </DescriptionContainer>
    </Container>
  );
}
