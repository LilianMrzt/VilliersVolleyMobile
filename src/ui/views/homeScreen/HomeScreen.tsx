import I18n from '@utils/I18n';
import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { homeScreenStyle } from './homeScreenStyle';

const HomeScreen = () => {
    const { colors } = useTheme();
    const styles = homeScreenStyle(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome_text}>{I18n.t('HomeScreen')}</Text>
        </View>
    );
};

export default HomeScreen;
