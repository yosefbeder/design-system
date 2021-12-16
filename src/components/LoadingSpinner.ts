import styled, { keyframes } from 'styled-components';
import { defaultTheme } from '../constants';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
	width: 1.25rem;
	height: 1.25rem;

	border-radius: var(--rounded-full);
	animation: ${spin} 1s linear infinite;
`;

LoadingSpinner.defaultProps = {
	theme: defaultTheme,
};

export default LoadingSpinner;
