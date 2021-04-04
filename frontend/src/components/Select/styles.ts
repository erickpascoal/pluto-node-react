import styled, { css } from 'styled-components';

interface ContainerProps {
  isErro: boolean;
}

export const Container = styled.div<ContainerProps>`  
  margin-bottom: 0.8rem;
  width: 100%;    
 
  label {
    color: #ffffff;
    margin-bottom: 2px;
    font-weight: 500;
    ${props => props.isErro && css`color: var(--red) `}
  }

  select {
    width: 100%;    
    border-radius: 0.4rem;
    padding: 0 2.4rem;
    height: 6.4rem;
    color: #ffffff;
    background-color: rgb(30, 25, 74);
    border: 1px solid var(--gray-dark);
    font-size: 1.6rem;

    &:focus {
      border: solid 1px #8257e5;
      ${props => props.isErro && css`border-color: var(--red); `}
    }
    
    ${props => props.isErro && css`border-color: var(--red) `}
  }
`;

export const TextErro = styled.p`
  color: var(--red);
  font-size: 12px;
  margin-top: 3px;
`;