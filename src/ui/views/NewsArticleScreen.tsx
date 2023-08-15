import RouteConstants from '@constants/RouteConstants';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';

const NewsArticleScreen = ({ route, navigation }) => {
    const { colors } = useTheme();
    const { title, content } = route.params;

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Button
                title={'aa'}
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: RouteConstants.NEWS_STACK_NAVIGATION }]
                    })
                }
            />
            <Text style={{ color: colors.onBackground }}>{title}</Text>
            <Text style={{ color: colors.onBackground }}>{content}</Text>
        </View>
    );
};

export default NewsArticleScreen;
