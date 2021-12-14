import styled, { css } from 'styled-components';

interface IconButtonProps {
	loading?: boolean;
}

const IconButton = styled.button.attrs<IconButtonProps>(props => ({
	disabled: props.loading || props.disabled,
}))<IconButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.25rem;
	height: 2.25rem;
	border: 2px solid transparent;
	border-radius: var(--rounded);

	&:hover {
		background-color: var(--color-gray-200);
	}

	${props =>
		!props.loading &&
		!props.disabled &&
		css`
			&:focus {
				background-color: var(--color-gray-200);
			}

			&:active {
				background-color: var(--color-gray-300);
			}
		`}

	&:disabled {
		background-color: var(--color-gray-100);
		color: var(--color-gray-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-gray-200);
	}

	transition: background-color 100ms;
`;

export default IconButton;
