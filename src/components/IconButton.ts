import styled, { css } from 'styled-components';
import { defaultTheme } from '../constants';

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
		background-color: var(--color-${props => props.theme.color.neutral}-200);
	}

	${props =>
		!props.loading &&
		!props.disabled &&
		css`
			&:focus {
				background-color: var(
					--color-${props => props.theme.color.neutral}-200
				);
			}

			&:active {
				background-color: var(
					--color-${props => props.theme.color.neutral}-300
				);
			}
		`}

	&:disabled {
		background-color: var(--color-${props => props.theme.color.neutral}-100);
		color: var(--color-${props => props.theme.color.neutral}-400);
		cursor: not-allowed;
	}

	&:hover:disabled {
		background-color: var(--color-${props => props.theme.color.neutral}-200);
	}

	transition: background-color 100ms;
`;

IconButton.defaultProps = { theme: defaultTheme };

export default IconButton;
