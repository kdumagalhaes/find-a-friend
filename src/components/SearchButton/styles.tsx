import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  height: 4.5rem;
  width: 4.5rem;
  background-color: #f4d35e;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s;

  &:hover {
    background-color: #d7ba52;
  }
`
