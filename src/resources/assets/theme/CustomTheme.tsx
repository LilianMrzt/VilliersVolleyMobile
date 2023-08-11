import { Theme } from '@react-navigation/native';

export interface CustomTheme extends Theme {
    dark: boolean;
    colors: Theme['colors'] & {
        primary: string;
        onPrimary: string;
        primaryContainer: string;
        onPrimaryContainer: string;
        secondary: string;
        onSecondary: string;
        secondaryContainer: string;
        onSecondaryContainer: string;
        tertiary: string;
        onTertiary: string;
        tertiaryContainer: string;
        onTertiaryContainer: string;
        error: string;
        onError: string;
        errorContainer: string;
        onErrorContainer: string;
        background: string;
        onBackground: string;
        surface: string;
        onSurface: string;
        surfaceVariant: string;
        onSurfaceVariant: string;
    };
}
declare module '@react-navigation/native' {
    export function useTheme(): CustomTheme;
}
