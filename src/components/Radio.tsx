import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { P1 } from '../typography';
import { v4 } from 'uuid';
import { defaultTheme } from '../constants';

const Icon = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: calc(var(--size) - var(--padding) * 2);
	height: calc(var(--size) - var(--padding) * 2);
	background-color: var(--color-white);
	border-radius: var(--rounded-full);

	pointer-events: none;
`;

const Input = styled.input.attrs(() => ({ type: 'radio' }))`
	display: block;
	width: var(--size);
	height: var(--size);
	border-radius: var(--rounded-full);
	border: 1px solid var(--color-${props => props.theme.color.neutral}-200);
	background-color: var(--color-white);

	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&:hover {
		border-color: var(--color-${props => props.theme.color.neutral}-400);
	}

	&:checked {
		background-color: var(--color-${props => props.theme.color.accent}-400);
		border-color: var(--color-${props => props.theme.color.accent}-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-${props => props.theme.color.accent}-400);
		box-shadow: 0 0 0 2px var(--color-${props => props.theme.color.accent}-200);
	}

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-${props => props.theme.color.neutral}-100);
	}

	&:disabled + ${Icon} {
		background-color: var(--color-${props => props.theme.color.neutral}-100);
	}

	&:disabled:checked {
		background-color: var(--color-${props => props.theme.color.neutral}-400);
		border-color: var(--color-${props => props.theme.color.neutral}-400);
	}
`;

Input.defaultProps = {
	theme: defaultTheme,
};

export const InputContainer = styled.div`
	--padding: var(--space-1);
	--size: 1.125rem;

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

const Radio = React.forwardRef<
	HTMLInputElement,
	StyledComponentProps<
		'input',
		any,
		{
			type: 'radio';
		},
		'type'
	> & { label: string }
>(({ children, label, className, id, ...props }, ref) => {
	const randomId = v4();

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

export default Radio;
