import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(176.95deg, rgba(27, 18, 78, 0.2) -32.8%, #0F0B38 88.83%);
    box-shadow: 0px 0.4rem 2.5rem rgba(0, 0, 0, 0.25);
    border-radius: 0.4rem;

    width: 40rem;
    margin: 0 auto;
    padding: 1.6rem;
`;

export const Content = styled.div`

    header {

        border-bottom: 1px solid #2D317A;
        padding-bottom: 1.6rem;
        margin-bottom: 1.6rem;

        h2 {
            color: #fff;
            font-size: 1.6rem;
        }
    }

    table {
        width: 100%;
        border-spacing: 0 0.8rem;
        
        tr td {
            padding: 0.8rem;
            font-weight: 600;
            color: #fff;

            &:first-child {
                font-weight: 400;
                color: #666;
            }
        }

        tr {
            transition: filter 0.cubic-bezier(0.215, 0.610, 0.355, 1);                         

            &:hover {
                filter: brightness(0.6)
            }
        }
    }
`;

