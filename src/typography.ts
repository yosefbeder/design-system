import styled, { css } from 'styled-components';
import { defaultTheme } from './constants';

interface MarginProps {
	size?: string;
	resetMargin?: boolean;
}

const margin = (size: string = '2') => css<MarginProps>`
	margin: ${({ resetMargin }) =>
		`${resetMargin ? '0' : `var(--space-${size}) 0`}`};
`;

const HSharedStyles = css`
	font-family: var(--font-sans);
	line-height: 1.25;
	font-weight: 900;
	color: var(--color-${props => props.theme.color.neutral}-900);
`;

export const H1 = styled.h1`
	${HSharedStyles}
	${margin('4')}
	font-size: var(--font-4xl);
`;

H1.defaultProps = { theme: defaultTheme };

export const H2 = styled.h2`
	${HSharedStyles}
	${margin('4')}
	font-size: var(--font-3xl);
`;

H2.defaultProps = { theme: defaultTheme };

export const H3 = styled.h3`
	${HSharedStyles}
	${margin()}
	font-size: var(--font-2xl);
`;

H3.defaultProps = { theme: defaultTheme };

export const H4 = styled.h4`
	${HSharedStyles}
	${margin()}
	font-size: var(--font-xl);
`;

H4.defaultProps = { theme: defaultTheme };

export const H5 = styled.h5`
	${HSharedStyles}
	${margin()}
	font-size: var(--font-lg);
`;

H5.defaultProps = { theme: defaultTheme };

export const H6 = styled.h6`
	${HSharedStyles}
	${margin()}
	font-size: var(--font-md);
`;

H6.defaultProps = { theme: defaultTheme };

const PSharedStyles = css`
	${margin()}
	line-height: 1.5;
	max-width: 60ch;
`;

export const P1 = styled.p`
	${PSharedStyles}
`;

export const P2 = styled.p`
	${PSharedStyles}
	font-size: var(--font-sm);
	color: var(--color-${props => props.theme.color.neutral}-600);
`;

P2.defaultProps = { theme: defaultTheme };

const LSharedStyles = css`
	${margin()};
	margin-left: var(--space-8);
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
	color: var(--color-${props => props.theme.color.accent}-400);
	text-decoration: underline;
	transition: color 100ms;

	&:hover,
	&:focus {
		color: var(--color-${props => props.theme.color.accent}-500);
	}

	&:active {
		color: var(--color-${props => props.theme.color.accent}-600);
	}
`;

Link.defaultProps = { theme: defaultTheme };

export const Strong = styled.strong`
	font-weight: 600;
	color: var(--color-${props => props.theme.color.neutral}-800);
`;

Strong.defaultProps = { theme: defaultTheme };

export const Italic = styled.em`
	font-style: italic;
	font-weight: 200;
`;

export const InlineCode = styled.code`
	background-color: var(--color-${props => props.theme.color.accent}-200);
	font-family: var(--font-mono);

	&::before,
	&::after {
		content: '\`';
	}
`;

InlineCode.defaultProps = {
	theme: defaultTheme,
};

export const Blockquote = styled.blockquote`
	position: relative;

	display: flex;
	background-color: var(--color-${props => props.theme.color.accent}-100);
	${margin()}
	padding: var(--space-3-5) var(--space-10);
	border-radius: var(--rounded);
	quotes: '“' '”';

	color: var(--color-${props => props.theme.color.neutral}-800);

	overflow: hidden;

	& > ${P1}, & > ${P2} {
		margin: 0;
		max-width: 100%;
	}

	&::before {
		content: open-quote;
		color: var(--color-${props => props.theme.color.accent}-200);
		position: absolute;
		top: calc(var(--space-5) * -1);
		left: calc(var(--space-2-5) * -1);
		font-family: var(--font-mono);
		font-size: var(--font-8xl);
		pointer-events: none;
	}
`;

Blockquote.defaultProps = {
	theme: defaultTheme,
};
