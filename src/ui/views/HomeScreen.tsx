import Api from '@api/Api';
import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import GeneralInformationsCard from '@components/cards/GeneralInformationsCard';
import NewsCard from '@components/cards/NewsCard';
import ShortcutCard from '@components/cards/ShortcutCard';
import CustomButton from '@components/common/CustomButton';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import RouteConstants from '@constants/routes/RouteConstants';
import { GeneralInformationsInterfaces } from '@interfaces/GeneralInformationsInterfaces';
import { useTheme } from '@react-navigation/native';
import { dateUtils } from '@utils/DateUtils';
import I18n from '@utils/I18n';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageConstants from '../../constants/ImageConstants';

const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = homeScreenStyle(colors);

    const [homeScreenArticles, setHomeScreenArticles] = useState([]);
    const [generalInformations, setGeneralInformations] = useState<GeneralInformationsInterfaces>();

    useEffect(() => {
        fetchHomeScreenArticles();
        setGeneralInformations(Api.getGeneralInformations());
    }, []);

    const fetchHomeScreenArticles = () => {
        const articles = Api.getArticles();
        const importantArticles = articles.filter((article) => article.attributes.important === true);

        if (importantArticles.length > 0) {
            importantArticles.sort((a, b) => {
                return (
                    dateUtils.extractConcatenatedDates(b.attributes.publishedAt) -
                    dateUtils.extractConcatenatedDates(a.attributes.publishedAt)
                );
            });

            const importantArticle = importantArticles.slice(0, 1);

            const otherArticles = articles.filter((article) => article.id !== importantArticle[0].id).slice(0, 2);

            setHomeScreenArticles([...importantArticle, ...otherArticles]);
        } else {
            setHomeScreenArticles(articles.slice(0, 3));
        }
    };

    const insets = useSafeAreaInsets();

    return (
        <View
            style={[
                styles.container,
                {
                    paddingBottom: insets.bottom,
                    paddingLeft: insets.left,
                    paddingRight: insets.right
                }
            ]}
        >
            <ImageIcon
                source={ImageConstants.volleyballBall2}
                size={400}
                color={colors.borderOutline}
                style={styles.backgroundImage}
            />

            <CustomHeaderCard label={I18n.t('ClubName')} />
            <View>
                <Text style={styles.titleText}>{I18n.t('Informations')}</Text>
                <GeneralInformationsCard
                    title={generalInformations?.title}
                    content={generalInformations?.content}
                />

                <Text style={styles.titleText}>{I18n.t('News')}</Text>
                {homeScreenArticles.map((article, index) => (
                    <NewsCard
                        key={index}
                        article={article}
                        index={index}
                        fromHomeScreen={true}
                    />
                ))}
                <CustomButton
                    label={I18n.t('SeeMoreNews')}
                    onPress={() =>
                        navigation.navigate(RouteConstants.NEWS_STACK_NAVIGATION as never, { screen: RouteConstants.NEWS_SCREEN } as never)
                    }
                    backgroundColor={'transparent'}
                    isScreenFullWidth={false}
                    fontSize={14}
                    textColor={'onBackground'}
                    style={{ paddingRight: 10, paddingTop: 0, alignSelf: 'flex-end', paddingBottom: 20 }}
                />
            </View>

            <View>
                <Text style={styles.titleText}>{I18n.t('QuickAccess')}</Text>
                <Row style={{ paddingTop: 5 }}>
                    <ShortcutCard
                        paddingRight={10}
                        onPress={() => navigation.navigate(RouteConstants.CALENDAR_SCREEN)}
                        label={I18n.t('CalendarScreen')}
                        icon={ImageConstants.calendar}
                    />
                    <ShortcutCard
                        paddingLeft={10}
                        onPress={() =>
                            navigation.navigate(
                                RouteConstants.NEWS_STACK_NAVIGATION as never,
                                { screen: RouteConstants.NEWS_SCREEN } as never
                            )
                        }
                        label={I18n.t('NewsScreen')}
                        icon={ImageConstants.news}
                    />
                </Row>
            </View>

            <View />
        </View>
    );
};

const homeScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'flex-start'
        },
        backgroundImage: {
            position: 'absolute',
            bottom: -90,
            right: -90,
            opacity: 0.4
        },
        titleText: {
            color: colors.onBackground,
            marginLeft: 20,
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 0
        }
    });

export default HomeScreen;
