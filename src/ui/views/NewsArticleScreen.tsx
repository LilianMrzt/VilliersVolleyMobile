import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import ImageConstants from '@constants/ImageConstants';
import RouteConstants from '@constants/routes/RouteConstants';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

const NewsArticleScreen = ({ route, navigation }) => {
    const { colors } = useTheme();
    const { title, content } = route.params;

    return (
        <View style={{ flex: 1 }}>
            <CustomHeaderCard
                label={title}
                icon={ImageConstants.backArrow}
                onPress={() => navigation.navigate(RouteConstants.NEWS_SCREEN)}
            />
            <Text style={{ color: colors.onBackground }}>{content}</Text>
        </View>
    );
};

export default NewsArticleScreen;
