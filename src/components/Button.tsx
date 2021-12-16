import React from 'react';
import styled, { css, StyledComponentProps } from 'styled-components';
import { defaultTheme } from '../constants';
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

	${({ loading, disabled, theme }) => {
		const state = getState(loading, disabled);
		let color, hoverColor, activeColor;

		switch (state) {
			case 'normal':
				color = `var(--color-${theme.color.accent}-400)`;
				hoverColor = `var(--color-${theme.color.accent}-500)`;
				activeColor = `var(--color-${theme.color.accent}-600)`;
				break;
			default:
				color = `var(--color-${theme.color.accent}-300)`;
				hoverColor = `var(--color-${theme.color.accent}-400)`;
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

StyledButtonPrimary.defaultProps = {
	theme: defaultTheme,
};

export const StyledButtonSecondary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	background-color: var(--color-white);

	${({ loading, disabled, theme }) => {
		const state = getState(loading, disabled);

		let color, activeColor;

		switch (state) {
			case 'normal':
				color = `var(--color-${theme.color.accent}-400)`;
				activeColor = `var(--color-${theme.color.accent}-500)`;
				break;
			default:
				color = `var(--color-${theme.color.accent}-300)`;
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

StyledButtonSecondary.defaultProps = {
	theme: defaultTheme,
};

export const StyledButtonTertiary = styled.button.attrs<StyledButtonProps>(
	props => ({
		disabled: props.loading || props.disabled,
	}),
)<StyledButtonProps>`
	${ButtonSharedStyles}

	border: 2px solid transparent;

	${({ loading, disabled, theme }) => {
		const state = getState(loading, disabled);
		let color, hoverColor, activeColor;

		switch (state) {
			case 'normal':
				hoverColor = `var(--color-${theme.color.neutral}-200)`;
				activeColor = `var(--color-${theme.color.neutral}-300)`;
				break;
			default:
				color = `var(--color-${theme.color.neutral}-100)`;
				hoverColor = `var(--color-${theme.color.neutral}-200)`;
		}

		return css`
			color: var(--color-${props => props.theme.color.neutral}-700);

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

StyledButtonTertiary.defaultProps = {
	theme: defaultTheme,
};

export const PrimaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-${props => props.theme.color.accent}-200);
	border-left: 2px solid var(--color-white);
`;

export const SecondaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-${props => props.theme.color.accent}-200);
	border-left: 2px solid var(--color-${props => props.theme.color.accent}-400);
`;

export const TertiaryLoadingSpinner = styled(LoadingSpinner)`
	border: 2px solid var(--color-white);
	border-left: 2px solid var(--color-${props => props.theme.color.neutral}-400);
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
