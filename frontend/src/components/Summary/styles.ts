import styled, { css } from 'styled-components';


export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 3.2rem;
	margin-top: -13.0rem;

`;

interface CountProps {
	isPostive?: boolean;
}

export const Count = styled.div<CountProps>`
	background: var(--shape);
	padding: 2.4rem 3.2rem;
	border-radius: 0.4rem;
	color: var(--text-tilte);
	font-size: 1.6rem;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	strong {
		display: block;
		margin-top: 1.6rem;
		font-size: 3.2rem;
		font-weight: 500;
		line-height: 4.8rem;
	}

	${(props) => props.isPostive == true && css`
		background-color: var(--green);
		color: #ffffff
	`};

	${(props) => props.isPostive == false && css`
		background-color: var(--red);
		color: #ffffff
	`};
`;