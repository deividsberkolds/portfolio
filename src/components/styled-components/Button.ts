import styled from 'styled-components';

export const Button = styled.button`
  font-size: .9rem;
  border-radius: 5px;
  padding: 0.25rem 1rem;
  margin: 0 1rem;
  background: transparent;
  color: #09d3ac;
  border: 2px solid #09d3ac;
  transition: box-shadow .3s;
  text-transform: uppercase;
  &:hover {
	  cursor: pointer;
	  box-shadow: 0 0 11px rgba(255,255,255,.5);
  }
`;
