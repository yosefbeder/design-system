import React, { useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { HiLink as LinkIcon } from 'react-icons/hi';

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

	const HWithId: React.FC<{ children: string }> = ({ children }) => {
		const slug = convertToSlug(children);
		const [isMouseIn, setIsMouseIn] = useState(false);

		return (
			<RelativeH
				id={slug}
				onMouseEnter={() => setIsMouseIn(true)}
				onMouseLeave={() => setIsMouseIn(false)}
			>
				<HLink isShown={isMouseIn} href={`#${slug}`}>
					<LinkIcon size=".65em" />
				</HLink>
				{children}
			</RelativeH>
		);
	};

	return HWithId;
};

export default withId;
