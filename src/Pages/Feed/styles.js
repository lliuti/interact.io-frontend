import styled from 'styled-components';

const mainPurple = '#B371FF';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 100%;
  height: calc(100vh - 70px);
  padding: 50px 100px;
`;

export const FeedContainer = styled.div`
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const InteractBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const PostTitle = styled.input`
  margin-bottom: 2.5px;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 8px 20px;
  min-width: 300px;
  font-size: 18px;
  background-color: rgba(255, 255, 255, .3);
  &:hover {
    background-color: rgba(255, 255, 255, .5);
  }
  &:focus {
    background-color: rgba(255, 255, 255, .8);
  }
`;

export const PostContent = styled.input`
  margin-bottom: 5px;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 8px 20px;
  min-width: 300px;
  font-size: 18px;
  background-color: rgba(255, 255, 255, .3);
  &:hover {
    background-color: rgba(255, 255, 255, .5);
  }
  &:focus {
    background-color: rgba(255, 255, 255, .8);
  }
`;

export const InteractButtton = styled.button`
  padding: 8px 20px;
  font-size: 18px;
  border: none;
  border-radius: 20px;
  background-color: ${mainPurple};
  color: #fff;
  transition: 300ms all;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 6px 20px #B371FF;
  };
`;