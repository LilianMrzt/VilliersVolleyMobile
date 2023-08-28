import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DarkTheme from '@theme/DarkTheme';
import LightTheme from '@theme/LightTheme';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import AppNavigation from '@navigation/AppNavigation';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    useEffect(() => {
        changeNavigationBarColor('transparent');
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={
                    isDarkMode
                        ? DarkTheme.colors.background
                        : LightTheme.colors.background
                }
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                translucent={true}
            />
            <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
                <AppNavigation />
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default App;
