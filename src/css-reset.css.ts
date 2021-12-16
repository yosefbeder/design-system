import { createGlobalStyle } from 'styled-components';
import { defaultTheme } from './constants';

const GlobalStyles = createGlobalStyle`
*:where(:not(iframe, canvas, img, svg, video, ol, ul):not(svg *)) {
	all: unset;
	display: revert;
}

*,
*::before,
*::after {
	box-sizing: border-box;
}

img {
	max-width: 100%;
}

table {
	border-collapse: collapse;
}

textarea {
	white-space: revert;
}

a,
button {
	cursor: pointer;
}

ol,
ul {
	margin: 0;
	padding: 0;
}

pre {
	white-space: pre;
}

body {
	font-family: var(--font-serif);
	font-size: var(--font-base);
  color: var(--color-${props =>
		props.theme ? props.theme.color.neutral : defaultTheme.color.neutral}-700);
}

::selection {
	color: var(--color-${props =>
		props.theme ? props.theme.color.accent : defaultTheme.color.accent}-50);
	background-color: var(--color-${props =>
		props.theme ? props.theme.color.accent : defaultTheme.color.accent}-400);
}
`;

export default GlobalStyles;
