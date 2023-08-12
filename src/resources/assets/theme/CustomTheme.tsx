import { Theme } from '@react-navigation/native';

export interface CustomTheme extends Theme {
    dark: boolean;
    colors: Theme['colors'] & {
        primary: string;
        onPrimary: string;
        secondary: string;
        onSecondary: string;
        tertiary: string;
        onTertiary: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
    };
}
declare module '@react-navigation/native' {
    export function useTheme(): CustomTheme;
}
