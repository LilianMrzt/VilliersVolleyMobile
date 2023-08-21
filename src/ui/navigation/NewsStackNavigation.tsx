import RouteConstants from '@constants/routes/RouteConstants';
import { useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsArticleScreen from '@ui/views/NewsArticleScreen';
import NewsScreen from '@ui/views/NewsScreen';
import I18n from '@utils/I18n';
import React, { useEffect } from 'react';

const Stack = createStackNavigator();

const NewsStackNavigation = ({ route, navigation }) => {
    const { colors } = useTheme();

    useEffect(() => {
        if (route && route.params && route.params.fromHomeScreen) {
            navigation.navigate(
                RouteConstants.NEWS_ARTICLE_SCREEN as never,
                {
                    title: route.params.title,
                    content: route.params.content
                } as never
            );
        }
    }, [route && route.params && route.params.title, route && route.params && route.params.fromHomeScreen]);

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
