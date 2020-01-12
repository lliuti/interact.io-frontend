import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';

import { 
  Container,
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
  return (
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
      </LogoContainer>
    </HeaderContainer>
  );
}
