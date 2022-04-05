import styled from 'styled-components';

export const Container = styled.div`
    background-color: #EFEFEF;
    overflow: hidden;
    height: 70px;
    bottom: 0px;
    padding-top: 10px;
`;

export const Menu = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #333333;
  border-style: none;
  margin: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 400px; 
`;

export const Search = styled.button`
  background-color: #EFEFEF;
  margin-top: 2px;
  padding: 10px;
  width: 100%;
  bottom: 0px;
  border-style:none;
`;
