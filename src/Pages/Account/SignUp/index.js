import React, { useState } from 'react';

import Podium from '../../../assets/podium.png'
import Api from '../../../services/api';

import { 
  Container,
  FormContainer,
  DescriptionContainer,
  RegisterButton,
  Title,
  Input,
  PodiumImage,
  TopOne
} from './styles';

export default function SignUp() {

  const [name, setName] = useState([]);
  const [nickname, setNickname] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [age, setAge] = useState([]);
  
  async function createUser() {
    if (!(name.length > 1 && nickname.length > 1 && email.length > 1 && password.length > 1 && age.length > 0)) {
      return false;
    };

    const userData = { name, nickname, email, password, age };
    const apiResponse = await Api.post('/users', userData);
    console.log(apiResponse);
  };

  return (
    <Container>
      <DescriptionContainer>
        <Title>Subscribe and fight for the #1 place</Title>
        <PodiumImage src={Podium}/>
        <TopOne>csBluejay_</TopOne>
      </DescriptionContainer>
      <FormContainer>
        <Title>Just a lil' bit of info</Title>
        <Input onChange={(event) => setName(event.target.value)} placeholder='Full Name'/>
        <Input onChange={(event) => setNickname(event.target.value)} placeholder='Nickname'/>
        <Input onChange={(event) => setEmail(event.target.value)} placeholder='E-mail address'/>
        <Input onChange={(event) => setPassword(event.target.value)} type='password' placeholder='Password'/>
        <Input onChange={(event) => setAge(event.target.value)} placeholder='Age'/>
        <RegisterButton onClick={createUser}>Register!</RegisterButton>
      </FormContainer>
    </Container>
  );
}
