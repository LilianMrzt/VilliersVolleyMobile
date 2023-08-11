import { StyleSheet } from 'react-native';

const homeScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background
        },
        welcome_text: {
            fontSize: 22,
            color: colors.onBackground
        }
    });

export { homeScreenStyle };
