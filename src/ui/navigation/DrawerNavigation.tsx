import React from 'react';
import HomeScreen from '@ui/views/homeScreen/HomeScreen';
import Icons from '@assets/Icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const { colors } = useTheme();
    return (
        <Drawer.Navigator
            initialRouteName={'Home'}
            screenOptions={{
                drawerActiveTintColor: colors.primary,
                drawerInactiveTintColor: colors.secondary,
                headerTintColor: colors.onBackground,
                drawerStyle: {
                    backgroundColor: colors.background // Set the desired background color here
                }
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons
                            name={Icons.home}
                            color={color}
                            size={size}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: colors.background,
                        elevation: 0
                    },
                    title: I18n.t('HomeScreen')
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
