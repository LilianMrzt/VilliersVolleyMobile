import RouteConstants from '@constants/routes/RouteConstants';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsArticleScreen from '@ui/views/NewsArticleScreen';
import NewsScreen from '@ui/views/NewsScreen';
import I18n from '@utils/I18n';
import React from 'react';

const Stack = createStackNavigator();

const NewsStackNavigation = () => {
    const { colors } = useTheme();

    return (
        <Stack.Navigator
            initialRouteName={RouteConstants.NEWS_SCREEN}
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
                name={RouteConstants.NEWS_SCREEN}
                component={NewsScreen}
                options={{
                    title: I18n.t('NewsScreen')
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

export default NewsStackNavigation;
