import styled from 'styled-components';

export const Container = styled.section`
      background-color: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 3.2rem 1.6rem 20.0rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1.6rem;
        font-weight: 600;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        border-radius: 0.4rem;
        padding: 0 3.2rem;
        height: 4.8rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;

