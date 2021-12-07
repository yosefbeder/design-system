import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

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
	border: 1px solid var(--color-gray-200);
	background-color: var(--color-white);

	transition: border-color 100ms, background-color 100ms;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
		background-color: var(--color-gray-100);
	}

	&:disabled + ${Icon} {
		background-color: var(--color-gray-100);
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
	--padding: var(--space-vsm);
	--size: 1.125rem;

	position: relative;
`;

const Radio: React.FC<StyledComponentProps<
	'input',
	any,
	{
		type: 'radio';
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

export default Radio;
