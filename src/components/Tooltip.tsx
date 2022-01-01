import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { P2 } from '../typography';

const Container = styled.div`
	position: relative;
	display: inline-block;
`;

type Position = 'top' | 'bottom' | 'left' | 'right';

interface ComponentProps {
	position: Position;
	isShown: boolean;
}

const Component = styled(P2)<ComponentProps>`
	position: absolute;
	z-index: 10;
	${({ position }) => {
		if (position === 'top')
			return css`
				bottom: calc(100% + var(--space-1));
				left: 50%;
				transform: translateX(-50%);
			`;

		if (position === 'left')
			return css`
				top: 50%;
				transform: translateY(-50%);
				right: calc(100% + var(--space-1));
			`;

		if (position === 'right')
			return css`
				top: 50%;
				transform: translateY(-50%);
				left: calc(100% + var(--space-1));
			`;

		return css`
			top: calc(100% + var(--space-1));
			left: 50%;
			transform: translateX(-50%);
		`;
	}}
	margin: 0;
	padding: var(--space-1) var(--space-2);
	border-radius: var(--rounded);
	background-color: var(--color-gray-600);

	pointer-events: none;

	white-space: nowrap;
	line-height: 1;
	color: var(--color-gray-100);

	opacity: ${props => (props.isShown ? '1' : '0')};
	transition: 100ms opacity;
`;

interface TooltipProps {
	content: string;
	position?: Position;
}

const Tooltip: React.FC<TooltipProps> = ({
	children,
	content,
	position = 'bottom',
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMouseIn, setIsMouseIn] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	return (
		<Container
			ref={containerRef}
			onPointerEnter={() => {
				setIsMouseIn(true);
			}}
			onPointerLeave={() => {
				setIsMouseIn(false);
			}}
			onFocusCapture={() => {
				setIsFocused(true);
			}}
			onBlurCapture={() => {
				setIsFocused(false);
			}}
		>
			{children}
			<Component position={position} isShown={isMouseIn || isFocused}>
				{content}
			</Component>
		</Container>
	);
};

export default Tooltip;
