import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import React from 'react';
import { View } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeaderCard label={'Préférences'} />
        </View>
    );
};

export default SettingsScreen;
