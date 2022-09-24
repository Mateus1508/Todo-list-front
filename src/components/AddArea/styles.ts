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
    margin-right: 10px;
    color: #fff;
    background-color: transparent;
    border: none;
    font-size: 32px;
    cursor: pointer;
    transition: all 0.6s;
    &:hover {
      transform: scale(1.1);
    }
  }
  input {
    border-radius: 5px;
    border: none;
    outline: 0;
    padding: 5px;
    background: transparent;
    font-size: 24px;
    color: #ddd;
    flex: 1;
  }
`