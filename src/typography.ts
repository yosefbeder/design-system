import styled, { css } from 'styled-components';

const HSharedStyles = css`
	font-family: var(--font-sans-serif);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-gray-900);
`;

export const H1 = styled.h1`
	${HSharedStyles}
	margin: var(--space-lg) 0;
	font-size: var(--font-2xl);
`;

export const H2 = styled.h2`
	${HSharedStyles}
	margin: var(--space-lg) 0;
	font-size: var(--font-xl);
`;

export const H3 = styled.h3`
	${HSharedStyles}
	margin: var(--space-md) 0;
	font-size: var(--font-lg);
`;

export const H4 = styled.h4`
	${HSharedStyles}
	margin: var(--space-md) 0;
	font-size: var(--font-md);
`;

export const H5 = styled.h5`
	${HSharedStyles}
	margin: var(--space-md) 0;
	font-size: var(--font-base);
`;

export const H6 = styled.h6`
	${HSharedStyles}
	margin: var(--space-md) 0;
	font-size: var(--font-sm);
`;

const PSharedStyles = css`
	margin: var(--space-md) 0;
	line-height: 1.35;
	max-width: 60ch;
`;

export const P1 = styled.p`
	${PSharedStyles}
	font-size: var(--font-base);
`;

export const P2 = styled.p`
	${PSharedStyles}
	font-size: var(--font-sm);
	color: var(--color-gray-600);
`;

const LSharedStyles = css`
	margin: var(--space-md) 0 var(--space-md) var(--space-xl);
	line-height: 1.5;

	& ${P1}, & ${P2} {
		margin: 0;
	}
`;

export const Ul = styled.ul`
	${LSharedStyles}
`;

export const Ol = styled.ol`
	${LSharedStyles}
`;

export const Link = styled.a`
	color: var(--color-blue-400);
	text-decoration: underline;
	transition: color 100ms;

	&:hover {
		color: var(--color-blue-500);
	}

	&:active {
		color: var(--color-blue-600);
	}
`;

export const Strong = styled.strong`
	font-weight: 600;
	color: var(--color-gray-800);
`;

export const Italic = styled.em`
	font-style: italic;
	font-weight: 200;
`;

export const InlineCode = styled.code`
	background-color: var(--color-blue-200);
	font-family: var(--font-monospace);

	&::before,
	&::after {
		content: '\`';
	}
`;

export const Blockquote = styled.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-blue-100);
	padding: var(--space-lg) var(--space-3xl);
	border-radius: var(--rounded-sm);
	quotes: '“' '”';

	color: var(--color-gray-800);

	overflow: hidden;

	& > ${P1}, & > ${P2} {
		margin: 0;
		max-width: 100%;
	}

	::before {
		content: open-quote;
		color: var(--color-blue-200);
		position: absolute;
		top: -1.15rem;
		left: -0.75rem;
		font-family: var(--font-monospace);
		font-size: var(--font-4xl);
		pointer-events: none;
	}
`;
