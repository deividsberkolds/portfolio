import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  50% {
    font-size: 3rem
  }
`


export const Header = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  &:hover {
    animation: ${zoomIn} 0.5s linear;
  }
`;
