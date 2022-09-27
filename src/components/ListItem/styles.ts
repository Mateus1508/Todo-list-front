import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
`
  display: flex;
  background-color: ${done ? '#034078' : '#274c77'};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  
  input{ 
    width: 30px;
    height: 30px;
    margin-right: 30px;
  }
  label {
    font-size: 24px;
    text-decoration: ${done ? 'line-through' : 'initial'};
    flex: 1;
    overflow: hidden !important;
    text-overflow: ellipsis;
    display: flex;
    flex-wrap: wrap;
  }
`
))

export const Button = styled.button`
    display: flex;
    padding: 5px;
    border: none;
    margin: 0 10px;
    font-weight: bold;
    background-color: transparent;
    color: #b00;
    font-size: 16px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      animation: shake .7s ease-in 1 alternate;
    }
    @keyframes shake {
      10% {
        transform: rotate(30deg);  
      }
      50% {
        transform: rotate(-30deg) scale(1.1);  
      }
      70% {
        transform: rotate(40deg) scale(1.2);  
      }
      90% {
        transform: rotate(-40deg) scale(1.1);  
      }
      100% {
        transform: rotate(0deg);  
      }
    }
`