import styled, { css } from 'styled-components';
import { defaultTheme } from '../constants';

interface NavLinkProps {
	navigatedTo?: boolean;
}

const NavLink = styled.a<NavLinkProps>`
	display: inline-block;
	padding: var(--space-1) var(--space-2);
	border: 2px solid transparent;
	border-radius: var(--rounded);

	user-select: none;
	transition: border-color 100ms, background-color 100ms, color 100ms;

	${props =>
		props.navigatedTo
			? css`
					font-weight: 600;
					color: var(--color-${props => props.theme.color.neutral}-800);
			  `
			: ''}

	&:hover,
	&:focus {
		background-color: var(--color-${props => props.theme.color.neutral}-200);
		border-color: var(--color-${props => props.theme.color.neutral}-200);
	}

	&:active {
		background-color: var(--color-${props => props.theme.color.neutral}-300);
		border-color: var(--color-${props => props.theme.color.neutral}-300);
	}
`;

NavLink.defaultProps = { theme: defaultTheme };

export default NavLink;
