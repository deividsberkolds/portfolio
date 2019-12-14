import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
`

export const MainImage = styled.img`
  height: 40vmin;
  &:hover {
    animation: ${shake} infinite .25s linear;
  }
`;
