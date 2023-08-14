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

    useEffect(() => {
        setHomeScreenArticles(Api.getArticles().slice(0, 3));
        setGeneralInformations(Api.getGeneralInformations());
    }, []);

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
                    title={generalInformations?.Titre}
                    content={''}
                />
            </View>

            <View>
                <SectionSeparator label={I18n.t('LastNews')} />
                {homeScreenArticles.map((last3PublishedArticle) => (
                    <NewsCard
                        title={last3PublishedArticle.attributes.Titre}
                        publishedDate={dateUtils.formatDate(last3PublishedArticle.attributes.publishedAt)}
                    />
                ))}
                <CustomButton
                    label={I18n.t('SeeMoreNews')}
                    onPress={() => navigation.navigate(RouteConstants.NEWS_SCREEN)}
                    backgroundColor={'transparent'}
                    isScreenFullWidth={false}
                    fontSize={14}
                    style={{ paddingRight: 10, paddingTop: 0, alignSelf: 'flex-end' }}
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
                    onPress={() => navigation.navigate(RouteConstants.NEWS_SCREEN)}
                    backgroundColor={'secondary'}
                />
            </View>
        </View>
    );
};

const homeScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'space-between'
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            right: -90,
            opacity: 0.4
        },
        homeText: {
            fontSize: 42,
            color: colors.onBackground,
            fontWeight: 'bold',
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20
        }
    });

export default HomeScreen;
