import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { Check as CheckIcon } from '../icons';
import { P1 } from '../typography';
import { uuid } from '../utils';

export const Icon = styled(CheckIcon)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`;

export const Input = styled.input.attrs(() => ({ type: 'checkbox' }))`
	display: block;

	width: var(--size);
	height: var(--size);
	background-color: var(--color-white);
	border-radius: var(--rounded);
	border: 1px solid var(--color-gray-200);
	transition: border-color 100ms, background-color 100ms, box-shadow 100ms;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled + ${Icon} {
		color: var(--color-gray-100);
	}

	&:hover {
		border-color: var(--color-gray-400);
	}

	&:enabled:active,
	&:focus {
		border-color: var(--color-blue-400);
		box-shadow: 0 0 0 2px var(--color-blue-200);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:disabled:active {
		box-shadow: 0 0 0 2px var(--color-gray-200);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}
`;

export const InputContainer = styled.div`
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

const Checkbox = React.forwardRef<
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
				<Icon size={16} />
			</InputContainer>
			<P1 as="label" htmlFor={randomId}>
				{label}
			</P1>
		</Container>
	);
});

export default Checkbox;
