import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished'

export const Form = styled.form`

  h2 {
    color: var(--text-title);
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  
 > button {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    background: var(--green);
    color: #ffffff;
    border-radius: 0.4rem;
    border: 0;
    font-size: 1.6rem;
    margin-top: 2.4rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
  }
`;


export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 6.4rem;
    border: 1px solid var(--gray-dark) ;
    border-radius: 0.4rem;
    background: var(--blue-medium);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.2s;

    i {
        font-size: 2.4rem;
        color: #fff;
    }

    &.deposit {
      i {
        color: var(--green)
      }
     }

     &.withdraw {
      i {
        color: var(--red)
      }
     }


    ${(props) => props.isActive
    && css`
     &.deposit {
      background: var(--green);

      i {
        color: #fff;
      }
     }

     &.withdraw {
      background: var(--red);

      i {
        color: #fff;
      }
     }
    `}

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')}
    }

    span {
        display: inline-block;
        margin-left: 1.6rem;
        font-size: 1.6rem;
        color: var(--text-title)
    }
`;