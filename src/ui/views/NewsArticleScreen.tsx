import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import CustomHtml from '@components/common/CustomHtml';
import ImageConstants from '@constants/ImageConstants';
import RouteConstants from '@constants/routes/RouteConstants';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NewsArticleScreen = ({ route, navigation }) => {
    const { colors } = useTheme();
    const { article } = route.params;
    const styles = newsArticleScreenStyle(colors);
    const insets = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <CustomHeaderCard
                label={article?.attributes?.title}
                icon={ImageConstants.backArrow}
                onPress={() => navigation.navigate(RouteConstants.NEWS_SCREEN)}
                height={60}
                borderRadius={1}
                marginBottom={0}
            />
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
                showsVerticalScrollIndicator={false}
            >
                {article?.attributes?.mainImage?.data && (
                    <Image
                        source={{ uri: article?.attributes?.mainImage?.data?.attributes?.url }}
                        height={200}
                        style={styles.image}
                        resizeMode="cover"
                    />
                )}

                <Text style={styles.title}>{article.attributes.title}</Text>

                <CustomHtml html={article?.attributes?.content} />
            </ScrollView>
        </View>
    );
};

const newsArticleScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        },
        contentContainer: {
            paddingBottom: 20
        },
        image: {
            marginBottom: 20
        },
        title: {
            color: colors.onBackground,
            fontSize: 30,
            paddingLeft: 20,
            paddingRight: 20,
            fontWeight: 'bold'
        }
    });

export default NewsArticleScreen;
