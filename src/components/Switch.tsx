import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

const Icon = styled.div`
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

const Input = styled.input.attrs(() => ({
	type: 'checkbox',
}))`
	display: block;
	width: var(--width);
	height: var(--height);
	border-radius: var(--rounded-full);
	background-color: var(--color-gray-200);
	border: 1px solid var(--color-gray-200);
	transition: background-color 100ms, border-color 100ms;
	cursor: pointer;

	&:hover {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:checked {
		background-color: var(--color-blue-400);
		border-color: var(--color-blue-400);
	}

	&:checked:hover {
		background-color: var(--color-blue-500);
		border-color: var(--color-blue-500);
	}

	&:disabled {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
		cursor: not-allowed;
	}

	&:disabled:hover {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:disabled:checked {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}

	&:disabled:checked:hover {
		background-color: var(--color-gray-400);
		border-color: var(--color-gray-400);
	}

	&:checked + ${Icon} {
		transform: translate(calc(var(--width) - 100% - var(--padding) * 2), -50%);
	}

	&:disabled + ${Icon} {
		background-color: var(--color-gray-100);
	}
`;

const Container = styled.div`
	--width: 2.25rem;
	--height: calc(var(--width) / 2);
	--padding: var(--space-vsm);

	position: relative;
`;

const Switch: React.FC<StyledComponentProps<
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

export default Switch;
