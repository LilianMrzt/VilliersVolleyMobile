import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
import { useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NewsCard = ({ important = false, title, publishedDate }) => {
    const { colors } = useTheme();
    const styles = newsCardStyle(colors);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.newsCard}>
                <Row alignItems={'flex-start'}>
                    {important && (
                        <ImageIcon
                            source={ImageConstants.news}
                            size={80}
                            color={colors.onPrimary}
                        />
                    )}
                    <View style={styles.textBox}>
                        <Text
                            numberOfLines={1}
                            style={styles.titleText}
                        >
                            {title}
                        </Text>
                        {important && (
                            <View>
                                <Text style={styles.previewText}>Test</Text>
                                <Text style={styles.previewText}>Test</Text>
                            </View>
                        )}
                        <Text style={styles.publishedDate}>{publishedDate}</Text>
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
            backgroundColor: colors.primary,
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
            color: colors.onPrimary,
            fontWeight: 'bold',
            fontSize: 20
        },
        previewText: {
            color: colors.onPrimary,
            fontSize: 14
        },
        publishedDate: {
            color: colors.onPrimary,
            fontSize: 12,
            alignSelf: 'flex-end'
        },
        textBox: {
            marginLeft: 10,
            flex: 1
        }
    });

export default NewsCard;
