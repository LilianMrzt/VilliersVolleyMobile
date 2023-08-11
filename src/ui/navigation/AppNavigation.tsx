import DrawerNavigation from '@navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@ui/views/SplashScreen';
import RouteConstants from '@utils/RouteConstants';
import React from 'react';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={RouteConstants.SPLASHSCREEN}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={RouteConstants.SPLASHSCREEN}
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
