import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../../src/index.css';
import '../../src/colors/stone.css';
import '../../src/colors/red.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import CSSReset from '../../src/css-reset.css';

const GlobalStyles = createGlobalStyle`
	body {
		background-color: var(--color-${props => props.theme.color.neutral}-50);
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={{ color: { accent: 'red', neutral: 'stone' } }}>
			<CSSReset />
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
