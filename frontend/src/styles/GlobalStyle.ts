import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #0d1b31;
        --green: #33CC95;

        --blue-light: #2f4568;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    ul {
        list-style: none;
    }

    html {
        /* a cada 1rem será considera 10px */
        font-size: 62.5%;

        @media (max-width: 1080px) {
            font-size: 40%;
        }

        @media (max-width: 720PX) {
            font-size: 30%;
        }

    }

    body {
        background: radial-gradient(46.41% 73.99% at 46.63% 48.05%, #20135C 0%, #140739 92.82%);
        font-size: 1.6rem
    }

    body, button, input, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }


    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba( 0,0,0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items:  center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 4.8rem;
        border-radius: 0.4rem;
        
        position: relative;
    }

    .react-modal-close {
        position: absolute;
        right: 2.4rem;
        top: 2.4rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover  {
            filter: brightness(0.8);
        }
    }
`;
