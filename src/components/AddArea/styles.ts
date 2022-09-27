import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  background-color: #333;
  
  button {
    display: flex;
    padding: 5px;
    border: none;
    background: transparent;
    color: #ffff;
    font-size: 32px;
    cursor: pointer;
    transition: all 0.6s;
    &:hover {
      transform: scale(1.2);
    }
  }
  input {
    border: none;
    margin-left: 5px;
    border-left: 1px solid #6666;
    outline: 0;
    padding: 5px 10px;
    background: transparent;
    font-size: 24px;
    color: #DDDD;
    flex: 1;
    @media (max-width: 400px) {
      max-width: 80%;
    }
  }
`