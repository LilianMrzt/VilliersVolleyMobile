import ImageConstants from '@assets/images/ImageConstants';
import Row from '@components/common/Row';
import SvgIcon from '@components/common/SvgIcon';
import RouteConstants from '@constants/routes/RouteConstants';
import { useNavigation, useTheme } from '@react-navigation/native';
import { dateUtils } from '@utils/DateUtils';
import Size from '@utils/Size';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NewsCard = ({ article, index }) => {
    const { colors } = useTheme();
    const styles = newsCardStyle(colors);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.newsCard}
                onPress={() => {
                    navigation.navigate(
                        RouteConstants.NEWS_ARTICLE_SCREEN as never,
                        {
                            article: article
                        } as never
                    );
                }}
            >
                <Row alignItems={'flex-start'}>
                    <SvgIcon
                        source={
                            article.attributes.articleType == 'Actualité'
                                ? ImageConstants.News
                                : ImageConstants.Newspaper
                        }
                        size={30}
                        color={colors.tertiary}
                    />

                    <View style={styles.textBox}>
                        <Text
                            numberOfLines={1}
                            style={styles.titleText}
                        >
                            {article.attributes.title}
                        </Text>
                        <Text style={styles.publishedDate}>
                            {dateUtils.formatDate(article.attributes.publishedAt)}
                        </Text>
                    </View>
                </Row>
            </TouchableOpacity>
        </View>
    );
};

const newsCardStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: Size.getScreenWidth(),
            padding: 20,
            paddingTop: 5,
            paddingBottom: 5
        },
        newsCard: {
            backgroundColor: colors.surface,
            padding: 10,
            borderRadius: 10,
            alignItems: 'flex-end',
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowOpacity: 0.16,
            shadowRadius: 1.51,
            elevation: 1
        },
        titleText: {
            color: colors.onSurface,
            fontWeight: 'bold',
            fontSize: 20
        },
        previewText: {
            color: colors.onSurface,
            fontSize: 14
        },
        publishedDate: {
            color: colors.tertiary,
            fontSize: 12,
            alignSelf: 'flex-end',
            marginTop: 5
        },
        textBox: {
            marginLeft: 10,
            flex: 1
        }
    });

export default NewsCard;
