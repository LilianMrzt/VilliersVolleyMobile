// @ts-ignore
import Api from '@api/Api';
import ImageConstants from '@assets/images/ImageConstants';
import CustomHeader from '@components/cards/CustomHeader';
import GeneralInformationsCard from '@components/cards/GeneralInformationsCard';
import NewsCard from '@components/cards/NewsCard';
import ShortcutCard from '@components/cards/ShortcutCard';
import CustomButton from '@components/common/CustomButton';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import HomeScreenLoader from '@components/loaders/HomeScreenLoader';
import RouteConstants from '@constants/routes/RouteConstants';
import { GeneralInformationsInterface } from '@interfaces/ApiInterfaces';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = homeScreenStyle(colors);

    const [generalInformations, setGeneralInformations] = useState<GeneralInformationsInterface>();
    const [articles, setArticles] = useState([]);
    const [isGeneralInfoLoading, setIsGeneralInfoLoading] = useState(true);
    const [isArticlesLoading, setIsArticlesLoading] = useState(true);

    useEffect(() => {
        fetchHomeScreenArticles();
        fetchGeneralInformations();
    }, []);

    /**
     * Permet de récupérer les articles affichés sur la page d'accueil
     */
    const fetchHomeScreenArticles = () => {
        Api.getArticles('?sort=publishedAt:desc&pagination[limit]=3&populate=*').then(
            (response) => {
                setArticles(response);
                setIsArticlesLoading(false);
            }
        );
    };

    /**
     * Permet de récupérer les informations générales affichées sur la page d'accueil
     */
    const fetchGeneralInformations = () => {
        Api.getGeneralInformations().then((response) => {
            setGeneralInformations(response);
            setIsGeneralInfoLoading(false);
        });
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
                size={300}
                color={colors.borderOutline}
                style={styles.backgroundImage}
            />

            <CustomHeader
                label={I18n.t('ClubName')}
                isHomeScreen={true}
                elevation={1}
                backgroundColor={colors.surface}
                height={120}
                borderRadius={30}
                hasBorder={true}
            />

            <View style={styles.mainContainer}>
                {isGeneralInfoLoading && isArticlesLoading ? (
                    <HomeScreenLoader />
                ) : (
                    <>
                        <Text style={styles.titleText}>{I18n.t('Informations')}</Text>
                        <GeneralInformationsCard
                            title={generalInformations?.attributes.title}
                            content={generalInformations?.attributes.content}
                        />

                        <Text style={styles.titleText}>{I18n.t('News')}</Text>
                        {articles?.map((article, index) => (
                            <NewsCard
                                key={index}
                                article={article}
                                index={index}
                            />
                        ))}
                        <CustomButton
                            label={I18n.t('SeeMoreNews')}
                            onPress={() =>
                                navigation.navigate(
                                    RouteConstants.NEWS_STACK_NAVIGATION as never,
                                    { screen: RouteConstants.NEWS_SCREEN } as never
                                )
                            }
                            backgroundColor={'transparent'}
                            isScreenFullWidth={false}
                            fontSize={14}
                            textColor={'onBackground'}
                            style={{
                                paddingRight: 10,
                                paddingTop: 0,
                                alignSelf: 'flex-end',
                                paddingBottom: 0
                            }}
                        />
                    </>
                )}
            </View>

            <View>
                <Text style={styles.titleText}>{I18n.t('QuickAccess')}</Text>
                <Row style={{ paddingTop: 5 }}>
                    <ShortcutCard
                        paddingRight={10}
                        onPress={() => navigation.navigate(RouteConstants.CALENDAR_SCREEN)}
                        label={I18n.t('CalendarScreen')}
                        icon={ImageConstants.Calendar}
                    />

                </Row>
            </View>
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
        mainContainer: {
            marginTop: 10
        },
        backgroundImage: {
            position: 'absolute',
            bottom: 50,
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
