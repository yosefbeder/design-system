import styled, { css } from 'styled-components';

interface StyledInputProps {}

const StyledInput = styled.input<StyledInputProps>`
	width: 100%;
	min-width: 10rem;
	padding: var(--space-sm) var(--space-md);
	border: 1px solid var(--color-gray-200);
	border-radius: var(--rounded-sm);
	background-color: var(--color-white);

	font-size: var(--font-sm);

	transition: border-color 100ms;

	&:disabled {
		background-color: var(--color-gray-200);
		cursor: not-allowed;
	}

	&:disabled:hover,
	&:disabled:active,
	&:disabled:focus {
		border-color: var(--color-gray-400);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:active,
	&:focus {
		border-color: var(--color-blue-400);
	}
`;

export default StyledInput;
