import ImageConstants from '@constants/ImageConstants';
import RouteConstants from '@constants/routes/RouteConstants';
import I18n from '@utils/I18n';

export const DrawerTopRoutes = [
    {
        label: I18n.t('HomeScreen'),
        route: RouteConstants.HOME_SCREEN,
        image: ImageConstants.homeLogo
    },
    {
        label: I18n.t('CalendarScreen'),
        route: RouteConstants.CALENDAR_SCREEN,
        image: ImageConstants.calendar
    },
    {
        label: I18n.t('NewsScreen'),
        route: RouteConstants.NEWS_STACK_NAVIGATION,
        image: ImageConstants.news
    }
];

export const DrawerBottomRoutes = [
    {
        label: I18n.t('ContactScreen'),
        route: RouteConstants.CONTACT_SCREEN,
        image: ImageConstants.contactEmail
    },
    {
        label: I18n.t('SettingsScreen'),
        route: RouteConstants.SETTINGS_SCREEN,
        image: ImageConstants.settings
    }
];
