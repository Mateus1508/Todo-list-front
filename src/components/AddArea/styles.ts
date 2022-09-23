import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid #555;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  
  button {
    margin-right: 10px;
    color: #fff;
    background-color: transparent;
    border: none;
    font-size: 32px;
    cursor: pointer;
  }
  input {
    border-radius: 5px;
    border: 1px solid #555;
    outline: 0;
    padding: 5px;
    background: #333;
    font-size: 24px;
    color: #ddd;
    flex: 1;
  }
`