import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #fff;
  width: 100%;
  height: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const InteractionButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  margin: 0 10px;
  color: #bbb;
  font-size: 32px;
  transition: 300ms ease-out;
  &:hover {
    color: #aaa;
    cursor: pointer;
  }''
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  font-size: 18px;
  border: 1px solid #333;
  border-radius: 25px;
  padding: 8px 20px;
`;

export const LogoTitle = styled.h1`
  margin-right: 10px;
`;

export const GrayText = styled.span`
  color: #bbb;
`;