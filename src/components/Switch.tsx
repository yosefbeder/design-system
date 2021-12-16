import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { uuid } from '../utils';
import { defaultTheme } from '../constants';
import { P1 } from '../typography';

export const Icon = styled.div`
	position: absolute;
	content: '';
	top: 50%;
	left: var(--padding);

	width: calc(var(--height) - var(--padding) * 2);
	height: calc(var(--height) - var(--padding) * 2);
	border-radius: var(--rounded-full);
	background-color: var(--color-white);

	transform: translate(0, -50%);
	pointer-events: none;

	transition: transform 100ms ease-out;
`;

export const Input = styled.input.attrs(() => ({
	type: 'checkbox',
}))`
	display: block;
	width: var(--width);
	height: var(--height);
	border-radius: var(--rounded-full);
	background-color: var(--color-${props => props.theme.color.neutral}-200);
	border: 1px solid var(--color-${props => props.theme.color.neutral}-200);
	transition: background-color 100ms, border-color 100ms;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: var(--color-${props => props.theme.color.neutral}-300);
		border-color: var(--color-${props => props.theme.color.neutral}-300);
	}

	&:checked {
		background-color: var(--color-${props => props.theme.color.accent}-400);
		border-color: var(--color-${props => props.theme.color.accent}-400);
	}

	&:checked:hover,
	&:checked:focus {
		background-color: var(--color-${props => props.theme.color.accent}-500);
		border-color: var(--color-${props => props.theme.color.accent}-500);
	}

	&:disabled {
		background-color: var(--color-${props => props.theme.color.neutral}-300);
		border-color: var(--color-${props => props.theme.color.neutral}-300);
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: var(--color-${props => props.theme.color.neutral}-400);
		border-color: var(--color-${props => props.theme.color.neutral}-400);
	}

	&:disabled:checked {
		background-color: var(--color-${props => props.theme.color.neutral}-400);
		border-color: var(--color-${props => props.theme.color.neutral}-400);
	}

	&:disabled:checked:hover {
		background-color: var(--color-${props => props.theme.color.neutral}-500);
		border-color: var(--color-${props => props.theme.color.neutral}-500);
	}

	&:checked + ${Icon} {
		transform: translate(calc(var(--width) - 100% - var(--padding) * 2), -50%);
	}

	&:disabled + ${Icon} {
		background-color: var(--color-${props => props.theme.color.neutral}-100);
	}
`;

Input.defaultProps = { theme: defaultTheme };

export const InputContainer = styled.div`
	--size: 1.125rem;
	--padding: var(--space-1);

	--width: calc(var(--size) * 2);
	--height: var(--size);

	position: relative;
`;

const Container = styled.div`
	display: flex;
	align-items: center;

	margin: var(--space-2) 0;

	& > ${InputContainer} {
		margin-right: var(--space-2);
	}

	& > ${P1} {
		margin: 0;
	}
`;

const Switch = React.forwardRef<
	HTMLInputElement,
	StyledComponentProps<
		'input',
		any,
		{
			type: 'checkbox';
		},
		'type'
	> & { label: string }
>(({ children, label, className, id, ...props }, ref) => {
	const randomId = uuid();

	return (
		<Container className={className}>
			<InputContainer>
				<Input ref={ref} id={randomId} {...props} />
				<Icon />
			</InputContainer>
			<P1 as="label" htmlFor={randomId}>
				{label}
			</P1>
		</Container>
	);
});

export default Switch;
