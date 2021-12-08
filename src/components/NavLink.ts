import styled, { css } from 'styled-components';

interface NavLinkProps {
	navigatedTo?: boolean;
}

const NavLink = styled.a<NavLinkProps>`
	display: inline-block;
	padding: var(--space-sm) var(--space-md);
	border: 2px solid transparent;
	border-radius: var(--rounded-sm);

	user-select: none;
	transition: border-color 100ms, background-color 100ms, color 100ms;

	${props =>
		props.navigatedTo
			? css`
					font-weight: 600;
					color: var(--color-gray-800);
			  `
			: ''}

	&:hover,
	&:focus {
		background-color: var(--color-gray-200);
		border-color: var(--color-gray-200);
	}

	&:active {
		background-color: var(--color-gray-300);
		border-color: var(--color-gray-300);
	}
`;

export default NavLink;
