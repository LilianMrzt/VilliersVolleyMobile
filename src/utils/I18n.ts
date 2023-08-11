import fr from '@resources/i18n/fr';
import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
    I18n.locale = 'fr';
}

I18n.fallbacks = true;
I18n.translations = {
    fr
};

export default I18n;
