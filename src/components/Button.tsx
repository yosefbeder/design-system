import React from 'react';
import styled, { css, StyledComponentProps } from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

interface StyledButtonProps {
	loading?: boolean;
}

const getState = (loading?: boolean, disabled?: boolean) =>
	loading ? 'loading' : disabled ? 'disabled' : 'normal';

const ButtonSharedStyles = css`
	display: flex;
	padding: var(--space-1) var(--space-2);
	border-radius: var(--rounded);
	user-select: none;

	transition: border-color 100ms, background-color 100ms, color 100ms;
`;

export const StyledButtonPrimary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	color: var(--color-white);

	${({ loading, disabled }) => {
		const state = getState(loading, disabled);
		let color, hoverColor, activeColor;

		switch (state) {
			case 'loading':
				color = 'var(--color-blue-300)';
				hoverColor = 'var(--color-blue-400)';
				break;
			case 'disabled':
				color = 'var(--color-gray-400)';
				hoverColor = 'var(--color-gray-500)';
				break;

			default:
				color = 'var(--color-blue-400)';
				hoverColor = 'var(--color-blue-500)';
				activeColor = 'var(--color-blue-600)';
		}

		return css`
			background-color: ${color};
			border: 2px solid ${color};

			&:hover {
				background-color: ${hoverColor};
				border: 2px solid ${hoverColor};
			}

			${state === 'normal'
				? css`
						&:focus {
							background-color: ${hoverColor};
							border: 2px solid ${hoverColor};
						}

						&:active {
							background-color: ${activeColor};
							border: 2px solid ${activeColor};
						}
				  `
				: 'cursor: not-allowed;'}
		`;
	}}
`;

export const StyledButtonSecondary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	background-color: var(--color-white);

	${({ loading, disabled }) => {
		const state = getState(loading, disabled);

		let color, activeColor;

		switch (state) {
			case 'loading':
				color = 'var(--color-blue-300)';
				break;
			case 'disabled':
				color = 'var(--color-gray-400)';
				break;
			default:
				color = 'var(--color-blue-400)';
				activeColor = 'var(--color-blue-500)';
		}

		return css`
			color: ${color};
			border: 2px solid ${color};

			&:hover {
				background-color: ${color};
				color: var(--color-white);
			}

			${state === 'normal'
				? css`
						&:focus {
							background-color: ${color};
							color: var(--color-white);
						}

						&:active {
							background-color: ${activeColor};
							border-color: ${activeColor};
						}
				  `
				: 'cursor: not-allowed;'}
		`;
	}}
`;

export const StyledButtonTertiary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	border: 2px solid transparent;

	${({ loading, disabled }) => {
		const state = getState(loading, disabled);
		let color, hoverColor, activeColor;

		switch (state) {
			case 'loading':
				color = 'var(--color-gray-100)';
				hoverColor = 'var(--color-gray-200)';
				break;
			case 'disabled':
				color = 'var(--color-gray-100)';
				hoverColor = 'var(--color-gray-200)';
				break;
			default:
				hoverColor = 'var(--color-gray-200)';
				activeColor = 'var(--color-gray-300)';
		}

		return css`
			&:hover {
				background-color: ${hoverColor};
				border-color: ${hoverColor};
			}

			${state === 'normal'
				? css`
						&:focus {
							background-color: ${hoverColor};
							border-color: ${hoverColor};
						}

						&:active {
							background-color: ${activeColor};
							border-color: ${activeColor};
						}
				  `
				: css`
						background-color: ${color};
						border-color: ${color};
						cursor: not-allowed;
				  `}
		`;
	}}
`;

export const PrimaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-white);
`;

export const SecondaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-blue-200);
	border-left: 2px solid var(--color-blue-400);
`;

export const TertiaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-gray-400);
`;

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
	variant?: ButtonVariant;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

interface TextContainerProps {
	leftSpacing?: boolean;
	rightSpacing?: boolean;
}

const TextContainer = styled.span<TextContainerProps>`
	margin-left: ${props => (props.leftSpacing ? 'var(--space-2)' : '0')};
	margin-right: ${props => (props.rightSpacing ? 'var(--space-2)' : '0')};
`;

const Button: React.FC<
	ButtonProps & StyledComponentProps<'button', any, StyledButtonProps, never>
> = ({
	variant = 'primary',
	children,
	leftIcon,
	rightIcon,
	loading,
	...restProps
}) => {
	const StyledButton =
		variant === 'primary'
			? StyledButtonPrimary
			: variant === 'secondary'
			? StyledButtonSecondary
			: StyledButtonTertiary;

	if (loading) {
		const LoadingSpinner =
			variant === 'primary'
				? PrimaryLoadingSpinner
				: variant === 'secondary'
				? SecondaryLoadingSpinner
				: TertiaryLoadingSpinner;

		return (
			<StyledButton loading {...restProps}>
				<LoadingSpinner />
				<TextContainer leftSpacing={true} rightSpacing={!!rightIcon}>
					{children}
				</TextContainer>
				{rightIcon && rightIcon}
			</StyledButton>
		);
	}

	return (
		<StyledButton {...restProps}>
			{leftIcon && leftIcon}
			<TextContainer leftSpacing={!!leftIcon} rightSpacing={!!rightIcon}>
				{children}
			</TextContainer>
			{rightIcon && rightIcon}
		</StyledButton>
	);
};

export default Button;
