import styled from 'styled-components';

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
  align-items: center;
  background-color: ${mainPurple};
  color: #fff;
`;

export const RegisterButton = styled.button`
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

export const Title = styled.h1``;

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

export const PodiumImage = styled.img`
  width: 250px;
  margin: 40px 0 0px;
`;

export const TopOne = styled.h1`
  font-size: 36px;
  color: #FFEB7D;
`;