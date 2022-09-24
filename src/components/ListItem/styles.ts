import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
`
  display: flex;
  background-color: #20212C;
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
  }
`
))

export const Button = styled.button`
    display: flex;
    padding: 5px;
    border: none;
    background-color: transparent;
    color: #b00;
    font-size: 16px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
    }
`