import styled from 'styled-components';
import { defaultTheme } from '../constants';

const Input = styled.input`
	width: 100%;
	min-width: 10rem;
	padding: var(--space-1) var(--space-2);
	border: 1px solid var(--color-${props => props.theme.color.neutral}-200);
	color: var(--color-${props => props.theme.color.neutral}-700);
	border-radius: var(--rounded);
	background-color: var(--color-white);

	transition: border-color 100ms, box-shadow 100ms;

	&:disabled {
		background-color: var(--color-${props => props.theme.color.neutral}-100);
		cursor: not-allowed;
	}

	&:disabled:active {
		box-shadow: 0 0 0 2px var(--color-${props => props.theme.color.neutral}-200);
	}

	&:hover {
		border-color: var(--color-${props => props.theme.color.neutral}-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-${props => props.theme.color.accent}-400);
		box-shadow: 0 0 0 2px var(--color-${props => props.theme.color.accent}-200);
	}
`;

Input.defaultProps = {
	theme: defaultTheme,
};

export default Input;
