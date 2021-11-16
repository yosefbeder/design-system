import { useState } from 'react';
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
} from '../../src/components';
import {
	PrimaryLoadingSpinner,
	SecondaryLoadingSpinner,
	TertiaryLoadingSpinner,
} from '../../src/components/Button';
import Input from '../../src/components/Input';
import {
	HiArrowDown as ArrowDown,
	HiArrowUp as ArrowUp,
	HiArrowLeft as ArrowLeft,
	HiArrowRight as ArrowRight,
} from 'react-icons/hi';

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

	& > ${P1} {
		margin: 0;
		user-select: none;
	}
`;

const pages = ['Home', 'Work', 'Blog', 'About'];

function App() {
	const [navigated, setNavigated] = useState('Home');

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
				<P1 as="li">
					<InlineCode>let</InlineCode>: a variable that can be changed later and{' '}
					<Strong>block-scoped</Strong>.
				</P1>
				<P1 as="li">
					<InlineCode>const</InlineCode>: a constant that can't be changed later
					and <Strong>block-scoped</Strong>.
				</P1>
				<P1 as="li">
					<InlineCode>var</InlineCode>: a variable that can't be changed later
					and <Strong>function-scoped</Strong>.
				</P1>
			</Ul>
			<P1>
				Steps to declare <Italic>them</Italic>:
			</P1>
			<Ol>
				<P1 as="li">Think of the the name of it.</P1>
				<P1 as="li">Think whether it will change or not.</P1>
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
				<Button>Normal</Button>
				<Button state="loading" leftIcon={<PrimaryLoadingSpinner />}>
					Loading
				</Button>
				<Button state="disabled">Disabled</Button>
			</ButtonsGroup>
			<H3WithId>Secondary Button</H3WithId>
			<ButtonsGroup>
				<Button variant="secondary">Normal</Button>
				<Button
					variant="secondary"
					state="loading"
					leftIcon={<SecondaryLoadingSpinner />}
				>
					Loading
				</Button>
				<Button variant="secondary" state="disabled">
					Disabled
				</Button>
			</ButtonsGroup>
			<H3WithId>Tertiary Button</H3WithId>
			<ButtonsGroup>
				<Button variant="tertiary">Normal</Button>
				<Button
					variant="tertiary"
					state="loading"
					leftIcon={<TertiaryLoadingSpinner />}
				>
					Loading
				</Button>
				<Button variant="tertiary" state="disabled">
					Disabled
				</Button>
			</ButtonsGroup>
			<H2WithId>Nav Link</H2WithId>
			<ButtonsGroup>
				{pages.map((page, index) => (
					<NavLink
						key={index}
						isNavigatedTo={page === navigated}
						onNavigate={() => setNavigated(page)}
					>
						{page}
					</NavLink>
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
				<Tooltip content="Disabled" position="left">
					<Switch id="switch-2" checked disabled />
				</Tooltip>
				<P1 as="label" htmlFor="switch-2">
					I agree to sell my privacy
				</P1>
			</SwitchGroup>
		</Article>
	);
}

export default App;
