import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DarkTheme from '@theme/DarkTheme';
import LightTheme from '@theme/LightTheme';
import DrawerNavigation from '@navigation/DrawerNavigation';

const App = () => {
    const scheme = useColorScheme();
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={isDarkMode ? '#1a1c1e' : '#fcfcff'}
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <NavigationContainer
                theme={scheme === 'dark' ? DarkTheme : LightTheme}
            >
                <DrawerNavigation />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
