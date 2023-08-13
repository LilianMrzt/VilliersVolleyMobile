import ImageIcon from '@components/common/ImageIcon';
import CustomDrawer from '@components/customDrawer/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import CalendarScreen from '@ui/views/CalendarScreen';
import ContactScreen from '@ui/views/ContactScreen';
import HomeScreen from '@ui/views/HomeScreen';
import SettingsScreen from '@ui/views/SettingsScreen';
import I18n from '@utils/I18n';
import React from 'react';
import ImageConstants from '../../constants/ImageConstants';
import RouteConstants from '../../constants/RouteConstants';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const { colors } = useTheme();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName={RouteConstants.HOME_SCREEN}
            screenOptions={{
                drawerActiveTintColor: colors.tertiary,
                drawerActiveBackgroundColor: `${colors.primary}55`,
                drawerInactiveTintColor: colors.tertiary,
                headerTintColor: colors.onBackground,
                headerStyle: {
                    backgroundColor: colors.background,
                    elevation: 0
                }
            }}
        >
            <Drawer.Screen
                name={RouteConstants.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <ImageIcon
                            source={ImageConstants.homeLogo}
                            size={size}
                            color={color}
                        />
                    ),
                    title: I18n.t('HomeScreen')
                }}
            />

            <Drawer.Screen
                name={RouteConstants.CALENDAR_SCREEN}
                component={CalendarScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <ImageIcon
                            source={ImageConstants.calendar}
                            size={size}
                            color={color}
                        />
                    ),
                    title: I18n.t('CalendarScreen')
                }}
            />

            <Drawer.Screen
                name={RouteConstants.SETTINGS_SCREEN}
                component={SettingsScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <ImageIcon
                            source={ImageConstants.settings}
                            size={size}
                            color={color}
                        />
                    ),
                    title: I18n.t('SettingsScreen')
                }}
            />
            <Drawer.Screen
                name={RouteConstants.CONTACT_SCREEN}
                component={ContactScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <ImageIcon
                            source={ImageConstants.contactEmail}
                            size={size}
                            color={color}
                        />
                    ),
                    title: I18n.t('ContactScreen')
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
