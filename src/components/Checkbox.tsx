import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { HiCheck as Check } from 'react-icons/hi';
import { P1 } from '../typography';

export const Icon = styled(Check)`
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
	border-radius: var(--rounded-sm);
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

	margin: var(--space-md) 0;

	& > ${InputContainer} {
		margin-right: var(--space-md);
	}

	& > ${P1} {
		margin: 0;
	}
`;

const Checkbox: React.FC<
	StyledComponentProps<
		'input',
		any,
		{
			type: 'checkbox';
		},
		'type'
	> & { label: string }
> = ({ children, label, className, ...props }) => {
	return (
		<Container className={className}>
			<InputContainer>
				<Input {...props} />
				<Icon />
			</InputContainer>
			<P1>{label}</P1>
		</Container>
	);
};

export default Checkbox;
