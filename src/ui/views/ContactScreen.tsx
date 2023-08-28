import CustomHeader from '@components/cards/CustomHeader';
import I18n from '@utils/I18n';
import React from 'react';
import { View } from 'react-native';

const ContactScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader label={I18n.t('ContactScreen')} />
        </View>
    );
};

export default ContactScreen;
