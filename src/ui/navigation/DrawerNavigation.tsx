import ImageConstants from '@assets/images/ImageConstants';
import SvgIcon from '@components/common/SvgIcon';
import CustomDrawer from '@components/customDrawer/CustomDrawer';
import RouteConstants from '@constants/routes/RouteConstants';
import NewsStackNavigation from '@navigation/NewsStackNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@react-navigation/native';
import CalendarScreen from '@ui/views/CalendarScreen';
import ContactScreen from '@ui/views/ContactScreen';
import HomeScreen from '@ui/views/HomeScreen';
import I18n from '@utils/I18n';
import React from 'react';

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
                },
                headerShown: false
            }}
        >
            <Drawer.Screen
                name={RouteConstants.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <SvgIcon
                            source={ImageConstants.Home}
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
                        <SvgIcon
                            source={ImageConstants.Calendar}
                            size={size}
                            color={color}
                        />
                    ),
                    title: I18n.t('CalendarScreen')
                }}
            />

            <Drawer.Screen
                name={RouteConstants.NEWS_STACK_NAVIGATION}
                component={NewsStackNavigation}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <SvgIcon
                            source={ImageConstants.News}
                            size={size}
                            color={color}
                        />
                    ),
                    title: I18n.t('NewsScreen')
                }}
            />

            <Drawer.Screen
                name={RouteConstants.CONTACT_SCREEN}
                component={ContactScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <SvgIcon
                            source={ImageConstants.Contact}
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
