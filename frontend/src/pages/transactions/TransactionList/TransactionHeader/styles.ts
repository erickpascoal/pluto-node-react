import styled from "styled-components";

export const Container = styled.div`
	margin: 3.2rem 0;

	display: flex;
	justify-content: space-between;
	align-items: center;

	span {
		font-size: 1.8rem;
		color: var(--text-title);
		font-weight: 600;
	}

	> button {
		padding: 0 2.4rem;
		height: 3.2rem;
		border-radius: 1.6rem;
		color: #fff;
		font-size: 1.6rem;
		font-weight: 600;
		background-color: var(--blue-light) ;
		border: 0;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9)
		}
	}

`;

export const Calendar = styled.div`
	background-color: var(--gray-dark);
	border-radius: 0.8rem;

	button {
		padding: 0 1.6rem; 
		background-color: var(--gray-dark);
		color: #fff;
		border: 0;
		font-size: 1.6rem;
		font-weight: 600;
	}

	input {
		padding: 0.8rem;
		color: #fff;
		background-color: var(--gray-dark);
		border: 0;
		font-size: 1.6rem;
		text-align: center;
	}

`;