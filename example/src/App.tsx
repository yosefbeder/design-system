import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import '../../src/index.css';
import {
	H1,
	H2,
	H3,
	P1,
	P2,
	Ul,
	Ol,
	Strong,
	Italic,
	InlineCode,
	Link,
	Blockquote,
} from '../../src/typography';
import { withId } from '../../src/utils';
import {
	Button,
	NavLink,
	Tooltip,
	IconButton,
	Switch,
	Input,
	Checkbox,
	Radio,
} from '../../src/components';
import {
	PrimaryLoadingSpinner,
	SecondaryLoadingSpinner,
	TertiaryLoadingSpinner,
} from '../../src/components/Button';
import {
	HiArrowDown as ArrowDown,
	HiArrowUp as ArrowUp,
	HiArrowLeft as ArrowLeft,
	HiArrowRight as ArrowRight,
} from 'react-icons/hi';
import { HiCreditCard } from 'react-icons/hi';

const H2WithId = withId(H2);
const H3WithId = withId(H3);

const Article = styled.article`
	width: 100%;
	max-width: 45rem;
	min-height: 100vh;
	margin: 0 auto;
	padding: 0.05px;
	padding-bottom: var(--space-3xl);
`;

const ButtonsGroup = styled.div`
	display: flex;
	gap: var(--space-sm);
	margin: var(--space-md) 0;
`;

const InputsGroup = styled.div`
	display: flex;
	gap: var(--space-sm);
	max-width: calc(30rem + var(--space-sm));
	margin: var(--space-md) 0;
`;

const SwitchGroup = styled.div`
	display: flex;
	align-items: center;
	gap: var(--space-md);
	margin: var(--space-sm) 0;

	& > ${P1} {
		margin: 0;
		user-select: none;
	}
`;

const CheckboxGroup = styled(SwitchGroup)``;

const RadioGroup = styled(SwitchGroup)``;

const pages = [
	{ path: '/', name: 'Home' },
	{ path: '/work', name: 'Work' },
	{ path: '/blog', name: 'Blog' },
	{ path: '/about', name: 'About' },
];

function App() {
	const location = useLocation();

	return (
		<Article>
			<H1>Components</H1>
			<H2WithId>Typography</H2WithId>
			<H3WithId>Paragraphs</H3WithId>
			<P1>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente
				ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam
				voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea.
			</P1>
			<P2>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sapiente
				ut nobis vel ad est consequatur repellendus ipsum tenetur laboriosam
				voluptatem eveniet vitae, rerum in cum nulla nesciunt explicabo ea.
			</P2>
			<H3WithId>Lists</H3WithId>
			<P1>
				Ways to declare{' '}
				<Link
					href="https://en.wikipedia.org/wiki/Variable_(mathematics)"
					target="_blank"
				>
					variables
				</Link>{' '}
				<Italic>constants</Italic> in javascript:
			</P1>
			<Ul>
				<li>
					<InlineCode>let</InlineCode>: a variable that can be changed later and{' '}
					<Strong>function-scoped</Strong>.
				</li>
				<li>
					<InlineCode>const</InlineCode>: a constant that can't be changed later
					and <Strong>function-scoped</Strong>.
				</li>
				<li>
					<P1>
						<InlineCode>var</InlineCode>: a variable that can't be changed later
						and <Strong>block-scoped</Strong>.
					</P1>
					<Ul>
						<li>
							<P1>Why shouldn't you use it?</P1>
							<Ol>
								<li>
									You'll face some strange behavior due to being{' '}
									<Strong>block-scoped</Strong>
								</li>
								<li>It's awful.</li>
								<li>It's the worst.</li>
							</Ol>
						</li>
					</Ul>
					<Ul>
						<li>
							<P1>What should you use instead?</P1>
							<Ul>
								<li>
									<InlineCode>var</InlineCode> for variables (
									<Link href="https://www.merriam-webster.com/dictionary/mutable">
										mutable
									</Link>
									).
								</li>
								<li>
									<InlineCode>const</InlineCode> for constants (
									<Link href="https://www.merriam-webster.com/dictionary/immutable">
										immutable
									</Link>
									).
								</li>
							</Ul>
						</li>
					</Ul>
				</li>
			</Ul>
			<P1>
				Steps to declare <Italic>them</Italic>:
			</P1>
			<Ol>
				<li>Think of the the name of it.</li>
				<li>Think whether it will change or not.</li>
			</Ol>
			<H3WithId>Blockquote</H3WithId>
			<Blockquote>
				<P1>
					Failure is better than doing nothing, because doing nothing is the
					ultimate failure.
				</P1>
			</Blockquote>
			<H2WithId>Buttons</H2WithId>
			<H3WithId>Primary Button</H3WithId>
			<ButtonsGroup>
				<Button leftIcon={<HiCreditCard size={20} />}>Normal</Button>
				<Button leftIcon={<HiCreditCard size={20} />} loading>
					Loading
				</Button>
				<Button leftIcon={<HiCreditCard size={20} />} disabled>
					Disabled
				</Button>
			</ButtonsGroup>
			<H3WithId>Secondary Button</H3WithId>
			<ButtonsGroup>
				<Button leftIcon={<HiCreditCard size={20} />} variant="secondary">
					Normal
				</Button>
				<Button
					leftIcon={<HiCreditCard size={20} />}
					variant="secondary"
					loading
				>
					Loading
				</Button>
				<Button
					leftIcon={<HiCreditCard size={20} />}
					variant="secondary"
					disabled
				>
					Disabled
				</Button>
			</ButtonsGroup>
			<H3WithId>Tertiary Button</H3WithId>
			<ButtonsGroup>
				<Button leftIcon={<HiCreditCard size={20} />} variant="tertiary">
					Normal
				</Button>
				<Button
					leftIcon={<HiCreditCard size={20} />}
					variant="tertiary"
					loading
				>
					Loading
				</Button>
				<Button
					leftIcon={<HiCreditCard size={20} />}
					variant="tertiary"
					disabled
				>
					Disabled
				</Button>
			</ButtonsGroup>
			<H2WithId>Nav Link</H2WithId>
			<ButtonsGroup>
				{pages.map(page => (
					<RouterLink key={page.path} to={page.path}>
						<NavLink isNavigatedTo={location.pathname === page.path}>
							{page.name}
						</NavLink>
					</RouterLink>
				))}
			</ButtonsGroup>
			<H2WithId>Icon Button</H2WithId>
			<ButtonsGroup>
				<Tooltip content="Bottom">
					<IconButton>
						<ArrowDown size={20} />
					</IconButton>
				</Tooltip>
				<Tooltip content="Top" position="top">
					<IconButton>
						<ArrowUp size={20} />
					</IconButton>
				</Tooltip>
				<Tooltip content="Right" position="right">
					<IconButton>
						<ArrowRight size={20} />
					</IconButton>
				</Tooltip>
				<Tooltip content="Left" position="left">
					<IconButton>
						<ArrowLeft size={20} />
					</IconButton>
				</Tooltip>
			</ButtonsGroup>
			<ButtonsGroup>
				<Tooltip content="Bottom">
					<IconButton disabled>
						<ArrowDown size={20} />
					</IconButton>
				</Tooltip>
				<Tooltip content="Top" position="top">
					<IconButton disabled>
						<ArrowUp size={20} />
					</IconButton>
				</Tooltip>
				<Tooltip content="Right" position="right">
					<IconButton disabled>
						<ArrowRight size={20} />
					</IconButton>
				</Tooltip>
				<Tooltip content="Left" position="left">
					<IconButton disabled>
						<ArrowLeft size={20} />
					</IconButton>
				</Tooltip>
			</ButtonsGroup>
			<H2WithId>Form Fields</H2WithId>
			<H3WithId>Inputs</H3WithId>
			<InputsGroup>
				<Input placeholder="First Name" />
				<Input placeholder="Last Name" disabled />
			</InputsGroup>
			<InputsGroup>
				<Input type="number" placeholder="Age" min={3} max={100} />
				<Input placeholder="Phone number" />
			</InputsGroup>
			<InputsGroup>
				<Input type="email" placeholder="Email" />
			</InputsGroup>
			<H3WithId>Switch</H3WithId>
			<SwitchGroup>
				<Switch id="switch-1" />
				<P1 as="label" htmlFor="switch-1">
					I agree to sell my privacy
				</P1>
			</SwitchGroup>
			<SwitchGroup>
				<Tooltip content="It's not your choice, it's ours" position="left">
					<Switch id="switch-2" disabled />
				</Tooltip>
				<P1 as="label" htmlFor="switch-2">
					I agree to sell my privacy
				</P1>
			</SwitchGroup>
			<SwitchGroup>
				<Tooltip content="It's not your choice, it's ours" position="left">
					<Switch id="switch-3" checked disabled />
				</Tooltip>
				<P1 as="label" htmlFor="switch-3">
					I agree to sell my privacy
				</P1>
			</SwitchGroup>
			<H3WithId>Checkbox</H3WithId>
			<CheckboxGroup>
				<Checkbox id="checkbox-1" />
				<P1 as="label" htmlFor="checkbox-1">
					I agree to sell my privacy
				</P1>
			</CheckboxGroup>
			<CheckboxGroup>
				<Tooltip content="It's not your choice, it's ours" position="left">
					<Checkbox id="checkbox-2" disabled />
				</Tooltip>
				<P1 as="label" htmlFor="checkbox-2">
					I agree to sell my privacy
				</P1>
			</CheckboxGroup>
			<CheckboxGroup>
				<Tooltip content="It's not your choice, it's ours" position="left">
					<Checkbox id="checkbox-2" checked disabled />
				</Tooltip>
				<P1 as="label" htmlFor="checkbox-2">
					I agree to sell my privacy
				</P1>
			</CheckboxGroup>
			<H3WithId>Radio</H3WithId>
			<P1>What's your favorite javascript framework?</P1>
			<RadioGroup>
				<Radio name="favorite-framework" value="react" id="react" />
				<P1 as="label" htmlFor="react">
					React
				</P1>
			</RadioGroup>
			<RadioGroup>
				<Radio name="favorite-framework" value="vue" id="vue" />
				<P1 as="label" htmlFor="vue">
					Vue
				</P1>
			</RadioGroup>
			<RadioGroup>
				<Radio name="favorite-framework" value="angular" id="angular" />
				<P1 as="label" htmlFor="angular">
					Angular
				</P1>
			</RadioGroup>
			<RadioGroup>
				<Radio name="favorite-framework" value="svelte" id="svelte" />
				<P1 as="label" htmlFor="svelte">
					Svelte
				</P1>
			</RadioGroup>
			<RadioGroup>
				<Tooltip
					content="Is Next.js even a standalone framework?"
					position="left"
				>
					<Radio name="favorite-framework" value="next" id="next" disabled />
				</Tooltip>
				<P1 as="label" htmlFor="next">
					Next.js
				</P1>
			</RadioGroup>
			<RadioGroup>
				<Radio name="favorite-framework" value="blitz" id="blitz" />
				<P1 as="label" htmlFor="blitz">
					Blitz.js
				</P1>
			</RadioGroup>
		</Article>
	);
}

export default App;
