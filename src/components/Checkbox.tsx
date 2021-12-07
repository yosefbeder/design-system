import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';
import { HiCheck as Check } from 'react-icons/hi';

const Icon = styled(Check)`
	position: absolute;
	display: block;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: var(--color-white);
	pointer-events: none;
`;

const Input = styled.input.attrs(() => ({ type: 'checkbox' }))`
	display: block;

	width: 1.125rem;
	height: 1.125rem;
	background-color: var(--color-white);
	border-radius: var(--rounded-sm);
	border: 1px solid var(--color-gray-200);
	transition: border-color 100ms, background-color 100ms;
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

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:disabled:checked {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}
`;

const Container = styled.div`
	position: relative;
`;

const Checkbox: React.FC<StyledComponentProps<
	'input',
	any,
	{
		type: 'checkbox';
	},
	'type'
>> = ({ children, ...props }) => {
	return (
		<Container>
			<Input {...props} />
			<Icon />
		</Container>
	);
};

export default Checkbox;
