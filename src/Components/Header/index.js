import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUsers, faComments, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

import { 
  HeaderContainer, 
  InteractionButtons,
  SearchBar,
  LogoContainer,
  Input,
  Icon,
  LogoTitle,
  GrayText
} from './styles';

export default function Header() {
  const [toSignUp, setToSignUp] = useState(null);

  async function logout() {
    sessionStorage.removeItem('user');
    setToSignUp(1);
  };

  return (
    <>
      {toSignUp === 1 ? <Redirect to='/'/> : null}
      <HeaderContainer>
        <InteractionButtons>
          <Icon>
            <FontAwesomeIcon icon={faBell} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faUsers} />  
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faComments} />
          </Icon>
        </InteractionButtons>
        <SearchBar>
          <Input type='search' placeholder='Search for... anything'/>
        </SearchBar>
        <LogoContainer>
          <LogoTitle>
            interact<GrayText>.io</GrayText>
          </LogoTitle>
          <Icon onClick={logout}>
            <FontAwesomeIcon icon={faDoorOpen}/>
          </Icon>
        </LogoContainer>
      </HeaderContainer>
    </>
  );
}
