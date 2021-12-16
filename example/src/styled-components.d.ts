import { ThemeType } from '../../src/types';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
