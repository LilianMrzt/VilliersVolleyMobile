import { useTheme } from '@react-navigation/native';
import CustomButton from '@ui/components/CustomButton';
import CustomInput from '@ui/components/CustomInput';
import SectionSeparator from '@ui/components/SectionSeparator';
import I18n from '@utils/I18n';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageConstants from '../../constants/ImageConstants';

const HomeScreen = () => {
    const { colors } = useTheme();
    const styles = homeScreenStyle(colors);

    const [inputText, setInputText] = useState('assassa');

    return (
        <View style={styles.container}>
            <Text style={styles.welcome_text}>{I18n.t('HomeScreen')}</Text>
            <CustomButton
                label={'Test'}
                onPress={() => {}}
            />
            <CustomButton
                label={'Test'}
                backgroundColor={'background'}
                isScreenFullWidth={false}
                onPress={() => {}}
                icon={ImageConstants.homeLogo}
            />

            <View style={{ flexDirection: 'row' }}>
                <CustomButton
                    label={'Test'}
                    onPress={() => {}}
                    style={{ flex: 1, paddingRight: 10 }}
                    backgroundColor={'secondary'}
                />
                <CustomButton
                    label={'Test'}
                    onPress={() => {}}
                    style={{ flex: 1, paddingLeft: 10 }}
                />
            </View>

            <SectionSeparator label={'Profil'} />
            <SectionSeparator
                label={'Profil'}
                icon={ImageConstants.homeLogo}
            />

            <CustomInput
                label={'Test'}
                text={inputText}
                onChangeText={setInputText}
                mandatory
                placeholder={'Test placeholder'}
            />

            <View style={{ flexDirection: 'row' }}>
                <CustomInput
                    label={'Test'}
                    text={inputText}
                    onChangeText={setInputText}
                    mandatory
                    backgroundColor={'secondary'}
                    style={{ flex: 1, paddingRight: 10 }}
                />
                <CustomInput
                    label={'Test'}
                    text={inputText}
                    onChangeText={setInputText}
                    mandatory
                    style={{ flex: 1, paddingLeft: 10 }}
                    keyboardType={'number-pad'}
                />
            </View>
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
