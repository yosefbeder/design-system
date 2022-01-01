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
// App.js
import '@yosefbeder/design-system/index.css'; // Imports all custom variables and default colors (blue, and gray) and default styles
import '@yosefbeder/design-system/colors/amber.css'; // you can import any other color that exists in the tailwindcss color palette
import styled from 'styled-components';
import { withId } from '@yosefbeder/design-system/utils';
import { H1, H3, P1 } from '@yosefbeder/design-system/typography';
import { Button } from '@yosefbeder/design-system/components';

const H1WithId = withId(H1); // Adds an automatically generated id

// You can access the variables here (along with the colors you imported manually)
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
	background-color: var(--color-amber-400);
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

The usage of most of the components is straightforward except `RadioGroup`, `Radio`, `Checkbox`, and `Switch`.

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
