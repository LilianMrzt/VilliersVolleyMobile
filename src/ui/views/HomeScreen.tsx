import { useTheme } from '@react-navigation/native';
import CustomButton from '@ui/components/CustomButton';
import I18n from '@utils/I18n';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageConstants from '../../constants/ImageConstants';

const HomeScreen = () => {
    const { colors } = useTheme();
    const styles = homeScreenStyle(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome_text}>{I18n.t('HomeScreen')}</Text>
            <CustomButton
                label={'Test'}
                onPress={() => {}}
            />
            <CustomButton
                label={'Test'}
                backgroundColor={'secondary'}
                onPress={() => {}}
                icon={ImageConstants.homeLogo}
            />
            <CustomButton
                label={'Test'}
                backgroundColor={'tertiary'}
                onPress={() => {}}
            />
            <CustomButton
                label={'Test'}
                backgroundColor={'background'}
                isScreenWidth={false}
                onPress={() => {}}
                icon={ImageConstants.homeLogo}
            />
        </View>
    );
};

const homeScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background
        },
        welcome_text: {
            fontSize: 22,
            color: colors.onBackground
        }
    });

export default HomeScreen;
