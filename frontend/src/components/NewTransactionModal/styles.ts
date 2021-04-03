import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Form = styled.form`

  h2 {
    color: var(--text-title);
    font-size: 2.4rem;
    margin-bottom: 3.2rem;
  }

  input {
    width: 100%;
    padding: 0 2.4rem;
    height: 6.4rem;
    border-radius: 0.4rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1.6rem;

    &::placeholder {
        color: var(--text-body);
    }

    & + input {
        margin-top: 1.6rem;
    }
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

const colors = {
  green: '#33CC95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 6.4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.4rem;

    background: ${(props) => props.isActive
    ? transparentize(0.8, colors[props.activeColor]) :
    'transparent'};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')}
    }

    img {
        height: 20px;
        width: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1.6rem;
        font-size: 1.6rem;
        color: var(--text-title)
    }
`;