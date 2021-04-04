import styled, { css } from 'styled-components';

export const Container = styled.div`
	margin-top: 6.4rem;

	table {
		width: 100%;
		border-spacing: 0 1.6rem;

		tbody tr {
			transition: filter 0.2s;

			&:hover {
					filter: brightness(1.5)
			}
		}

		td {
				padding: 2.4rem 3.2rem;
				border: 0;
				background: rgba(46, 53, 88, 0.3);
				color: var(--text-body);
				text-align: center;

				&:first-child {
						text-align: left;
						color: #FFF;
						border-top-left-radius: 0.8rem;
						border-bottom-left-radius: 0.8rem;
				}

				&:last-child {
						border-top-right-radius: 0.8rem;
						border-bottom-right-radius: 0.8rem;
				}


				&.deposit {
						color: var(--green)
				}

				&.withdraw {
						color: var(--red)
				}

				button {
						border: 0;
						color: #fff;
						font-size: 1.6rem;
						padding: 0.8rem 1.6rem;
						border-radius: 0.4rem;
						background: #32395E;

						transition: background-color 0.2s;

						&:hover {
								filter: brightness(0.8)
						}

						& + button {
								margin-left: 0.5rem;
						}


						&.delete:hover {
								background-color: var(--red)
						}

						&.edit:hover {
								background-color: #5FB2FF;
						}

				}
			}
	}
`;

export const Filter = styled.ul`
	color: var(--text-body);
  
	display: flex;
	justify-content: flex-end;
`;

interface FilterItemProps {
	isActive: boolean
}

export const FilterItem = styled.li<FilterItemProps>`
	cursor: pointer;
	padding: 0 0.8rem;
	font-size: 1.6rem;
	font-weight: 600;

	transition: background-color 0.2s;

	& + li {
		margin-left:  2.4rem;
	}

	&:hover {
		background-color: #32395E;
		padding: 0 0.8rem;
		border-top-left-radius: 0.8rem;
		border-top-right-radius: 0.8rem;
	}

	${(props) => props.isActive && css`
		color: #fff;
		background-color: #32395E;
		padding: 0 0.8rem;
		border-top-left-radius: 0.8rem;
		border-top-right-radius: 0.8rem;
		border-bottom: 2px  #1288E8 solid;
	`}
	
`;

