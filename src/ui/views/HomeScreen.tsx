import Api from '@api/Api';
import GeneralInformationsCard from '@components/cards/GeneralInformationsCard';
import NewsCard from '@components/cards/NewsCard';
import CustomButton from '@components/common/CustomButton';
import ImageIcon from '@components/common/ImageIcon';
import SectionSeparator from '@components/common/SectionSeparator';
import RouteConstants from '@constants/RouteConstants';
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

    //console.log(navigation)

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

            const otherArticles = articles.filter((article) => article.id !== importantArticle[0].id).slice(0, 1);

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

            <View>
                <Text style={styles.homeText}>{I18n.t('Welcome')}</Text>
                <SectionSeparator label={I18n.t('Informations')} />
                <GeneralInformationsCard
                    title={generalInformations?.title}
                    content={generalInformations?.content}
                />
                {homeScreenArticles.map((article, index) => (
                    <NewsCard
                        key={index}
                        title={article.attributes.title}
                        publishedDate={dateUtils.formatDate(article.attributes.publishedAt)}
                        important={article.attributes.important}
                        content={article.attributes.content}
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
                    style={{ paddingRight: 10, paddingTop: 0, alignSelf: 'flex-end', paddingBottom: 20 }}
                />
            </View>

            <View>
                <SectionSeparator label={I18n.t('QuickAccess')} />
                <CustomButton
                    label={I18n.t('CalendarScreen')}
                    onPress={() => navigation.navigate(RouteConstants.CALENDAR_SCREEN)}
                    backgroundColor={'secondary'}
                />
                <CustomButton
                    label={I18n.t('NewsScreen')}
                    onPress={() =>
                        navigation.navigate(RouteConstants.NEWS_STACK_NAVIGATION as never, { screen: RouteConstants.NEWS_SCREEN } as never)
                    }
                    backgroundColor={'secondary'}
                />
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
        homeText: {
            fontSize: 36,
            color: colors.onBackground,
            fontWeight: 'bold',
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20
        }
    });

export default HomeScreen;
