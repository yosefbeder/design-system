import styled from 'styled-components';

const Input = styled.input`
	width: 100%;
	min-width: 10rem;
	padding: var(--space-1) var(--space-2);
	border: 1px solid var(--color-gray-200);
	border-radius: var(--rounded);
	background-color: var(--color-white);

	transition: border-color 100ms, box-shadow 100ms;

	&:disabled {
		background-color: var(--color-gray-100);
		cursor: not-allowed;
	}

	&:disabled:active {
		box-shadow: 0 0 0 2px var(--color-gray-200);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-blue-400);
		box-shadow: 0 0 0 2px var(--color-blue-200);
	}
`;

export default Input;
