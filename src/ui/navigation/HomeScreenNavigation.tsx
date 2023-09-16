import RouteConstants from '@constants/routes/RouteConstants';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@ui/views/HomeScreen';
import NewsArticleScreen from '@ui/views/NewsArticleScreen';
import I18n from '@utils/I18n';
import React from 'react';

const Stack = createStackNavigator();

const HomeScreenNavigation = () => {
    const { colors } = useTheme();

    return (
        <Stack.Navigator
            initialRouteName={RouteConstants.HOME_SCREEN}
            screenOptions={{
                headerShown: false,
                headerTintColor: colors.onBackground,
                headerStyle: {
                    backgroundColor: colors.background,
                    elevation: 0
                }
            }}
        >
            <Stack.Screen
                name={RouteConstants.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    title: I18n.t('HomeScreen')
                }}
            />
            <Stack.Screen
                name={RouteConstants.NEWS_ARTICLE_SCREEN}
                component={NewsArticleScreen}
                options={{
                    title: I18n.t('NewsScreen')
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeScreenNavigation;
