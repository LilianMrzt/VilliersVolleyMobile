import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import I18n from '@utils/I18n';
import React from 'react';
import { View } from 'react-native';

const ContactScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeaderCard label={I18n.t('ContactScreen')} />
        </View>
    );
};

export default ContactScreen;
