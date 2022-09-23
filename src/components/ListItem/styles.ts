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
    margin-right: 20px;
  }
  label {
    font-size: 24px;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }
`
))