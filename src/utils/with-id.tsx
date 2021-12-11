import React, { useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Link as LinkIcon } from '../icons';

export const convertToSlug = (text: string) =>
	String(text)
		.toLowerCase()
		.replace(/ /g, '-')
		.replace(/[^\w-]+/g, '');

const HLink = styled.a<{ isShown: boolean }>`
	position: absolute;

	width: calc(100% + 0.75em);
	margin-left: -0.75em;

	opacity: ${props => (props.isShown ? '1' : '0')};
	cursor: pointer;

	transition: opacity 100ms;

	& > svg {
		color: var(--color-gray-700);
	}
`;

const withId = (H: StyledComponent<any, any, {}, never>) => {
	const RelativeH = styled(H)`
		position: relative;
	`;

	const HWithId: React.FC<{ children: string; resetMargin?: boolean }> = ({
		children,
		resetMargin,
	}) => {
		const slug = convertToSlug(children);
		const [isMouseIn, setIsMouseIn] = useState(false);
		const [isFocused, setIsFocused] = useState(false);

		return (
			<RelativeH
				id={slug}
				resetMargin={resetMargin}
				onMouseEnter={() => setIsMouseIn(true)}
				onMouseLeave={() => setIsMouseIn(false)}
			>
				<HLink
					isShown={isMouseIn || isFocused}
					href={`#${slug}`}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				>
					<LinkIcon size=".65em" />
				</HLink>
				{children}
			</RelativeH>
		);
	};

	return HWithId;
};

export default withId;
