import RouteConstants from '@constants/routes/RouteConstants';
import DrawerNavigation from '@navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@ui/views/SplashScreen';
import React from 'react';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={RouteConstants.SPLASH_SCREEN}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={RouteConstants.SPLASH_SCREEN}
                component={SplashScreen}
            />
            <Stack.Screen
                name={RouteConstants.DRAWER_NAVIGATION}
                component={DrawerNavigation}
            />
        </Stack.Navigator>
    );
};

export default AppNavigation;
