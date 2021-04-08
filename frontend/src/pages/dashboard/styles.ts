import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	max-width: 1120px;
	margin: 0 auto;
	padding: 1.6rem 0;

	display: flex;
	flex-direction: column;

	header {
		color: #fff;
		margin-bottom: 1.6rem;

		h2 {
			font-size: 2.4rem;
		}
	}
`;



export const FirstContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.6rem;
	margin-bottom: 1.6rem;

	> div {
		display: flex;
	}
`;

export const SecondContent = styled.div`
	display: flex;
`;

