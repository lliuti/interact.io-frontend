import styled from 'styled-components';
import holdingPhone from '../../../assets/holding-phone.png';

const mainPurple = '#B371FF';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex 1;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex 1;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex 1;
  justify-content: center;
  align-items: flex-start;
  background-color: ${mainPurple};
  background-image: url(${holdingPhone});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 50%;
  color: #fff;
`;

export const TextContainer = styled.div`
  max-width: 50%;
  padding: 0 50px;
`;

export const Title = styled.h1``;

export const TitleItem = styled.h1`
  color: #FFEB7D;
  text-shadow: 6px 4px 15px #333;
  font-size: 64px;
`;

export const And = styled.span`
  font-size: 36px;
  color: #fff;
`;

export const Hype = styled.span`
  color: #FFEB7D;
  text-shadow: 6px 4px 20px #000;
  font-size: 72px;
`;

export const SignInButton = styled.button`
  background-color: ${mainPurple};
  border: none;
  border-radius: 25px 10px 25px 10px;
  padding: 15px 30px;
  font-size: 26px;
  margin-top: 20px;
  color: #fff;
  transition: 300ms ease-out;

  &:hover {
    box-shadow: 0px 6px 20px #B371FF;
    cursor: pointer;
  }
`;

export const RegisterButton = styled.button`
  background-color: #fff;
  color: ${mainPurple};
  border: none;
  border-radius: 25px 10px 25px 10px;
  padding: 15px 30px;
  font-size: 26px;
  margin-top: 20px;
  transition: 300ms ease-out;

  &:hover {
    box-shadow: 0px 6px 20px #B371FF;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 15px 30px;
  border: none;
  border-bottom: 1px solid #333;
  margin-top: 20px;
  width: 70%;
  min-width: 300px;
  background-color: rgba(255, 255, 255, .3);
  &:hover {
    background-color: rgba(255, 255, 255, .5);
    cursor: default;
  }
  &:focus {
    background-color: rgba(255, 255, 255, .8);
  }
`;
