# @yosefbeder/desgn-system

A component library made with styled-components with tailwindcss design system as custom variables.

It consists of 4 parts

- CSS Reset
- Custom variables
- Typography
- Components

## Quick start

### Installation

```bash
# npm
npm i @yosefbeder/design-system

# yarn
yarn add @yosefbeder/design-system
```

### Simple usage

```jsx
// index.js
import ReactDOM from 'react-dom';
import CSSReset from '@yosefbeder/design-system/css-reset.css';
import App from './App';

ReactDOM.render(
	<>
		<CSSReset />
		<App />
	</>,
	document.getElementById('root'),
);
```

```jsx
// App.js
import '@yosefbeder/index.css'; // Imports all custom variables and default colors (blue, and gray).
import styled from 'styled-components';
import { withId } from '@yosefbeder/design-system/utils';
import { H1, H3, P1 } from '@yosefbeder/design-system/typography';
import { Button } from '@yosefbeder/design-system/components';

const H1WithId = withId(H1); // Adds an automatically generated id

// You can access the variables here
const Article = styled.article`
	width: var(--space-96);
	height: max-content;
	box-shadow: var(--shadow-md);
	border-radius: var(--rounded);
	padding: var(--space-2);

	font-family: var(--font-mono);
	font-size: var(--font-4xl);
	color: var(--color-gray-900);
	background-color: var(--color-blue-400);
`;

function App() {
	return (
		<>
			<H1WithId>My Blog</H1WithId>
			<Article>
				<H3 resetMargin>How to learn Rust?</H3>
				{/* resetMargin removes the default margin */}
				<P1>
					Rust is a language empowering everyone to build reliable and efficient
					software.
				</P1>
				<Button>Read</Button>
			</Article>
		</>
	);
}
```

### Extending components

All of the components are extendable this way.

```jsx
import styled from 'styled-components';
import { H3 } from '@yosefbeder/design-system/typography';

const Title = styled(H3)`
	font-family: var(--font-mono);
`;
```

### Form elements

The usage of most of the components is straightforward except three `RadioGroup`, `Radio`, `Checkbox`, and `Switch`.

```js
// RadioGroup
import { useState } from 'react';
import { RadioGroup } from '@yosefbeder/design-system/components';

function App() {
	const [favoriteMobileBrand, setFavoriteMobileBrand] = useState('');

	return (
		// Note that you can enter name prop to change the name of the radio group, but If you didn't It will be randomly generated
		<RadioGroup
			options={[
				{ label: 'Apple', value: 'apple' },
				{ label: 'Samsung', value: 'samsung' },
				{ label: 'Huawie', value: 'huawie' },
				{ label: 'Xiaomi', value: 'xiaomi' },
			]}
			value={favoriteMobileBrand}
			onChange={value => setFavoriteMobileBrand(value)}
		/>
	);
}
```

```js
// Radio, Checkbox, and Switch
import { useState } from 'react';
import { Radio, Checkbox, Switch } from '@yosefbeder/design-system/components';

function App() {
	const [favoriteMobileBrand, setFavoriteMobileBrand] = useState('');

	return (
		<>
			<Radio label="cool" value="cooler" name="coolest" />
			<Checkbox label="I agree to sell my privacy" />
			<Switch label="I agree to sell my privacy" />
		</>
	);
}
```

Generally, I don't recommend using `Radio`, and Instead using `RadioGroup`.

The reset of the props passed will be passed to the input directly.

## Theming

Theming in this lib is implemented with `ThemeProvider`.

If you don't feel confident with it check the [docs](https://styled-components.com/docs/advanced#theming) for more info.

The colors here are taken from [tailwindcss color palette](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

```ts
interface ThemeType {
	color: {
		accent:
			| 'amber'
			| 'blue'
			| 'cyan'
			| 'emerald'
			| 'fuchsia'
			| 'green'
			| 'indigo'
			| 'lime'
			| 'orange'
			| 'pink'
			| 'purple'
			| 'red'
			| 'rose'
			| 'sky'
			| 'teal'
			| 'violet'
			| 'yellow';
		neutral: 'gray' | 'neutral' | 'slate' | 'stone' | 'zinc';
	};
}
```

Accent colors are the colors of buttons, inputs, and form elements.

Neutral colors are for typogrphay and some other components like icon button and nav links.

```js
const defaultTheme = {
	color: {
		accent: 'blue',
		neutral: 'gray',
	},
};
```

The default theme can be imported from `/constants` this way.

```js
import { defaultTheme } from '@yosefbeder/design-system/constants';
```

### Customizing the theme

```jsx
// index.js
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import '@yosefbeder/design-system/colors/red.css';
import '@yosefbeder/design-system/colors/stone.css';

const theme = {
	color: {
		accent: 'red',
		neutral: 'stone',
	},
};

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.getElementById('root'),
);
```

### Creating themed components

```js
import { defaultTheme } from '@yosefbeder/design-system/constants';

const SomeComponent = styled.div`
	background-color: var(--color-${props => props.theme.color.accent}-50);
	color: var(--color-${props => props.theme.color.neutral}-900);
`;

// You can just skip this, but If you do so you should wrap this component inside ThemeProvider
SomeComponent.defaultProps = {
	theme: defaultTheme,
};

export default SomeComponent;
```
