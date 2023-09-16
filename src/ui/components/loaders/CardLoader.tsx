import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardLoader = ({ height, width, style }) => {
    const { colors } = useTheme();
    const styles = generalInformationsCardLoaderStyle(colors);

    return (
        <View style={[styles.generalInformationsLoader, style, { height: height, width: width }]} />
    );
};

const generalInformationsCardLoaderStyle = (colors: any) =>
    StyleSheet.create({
        generalInformationsLoader: {
            marginLeft: 20,
            marginTop: 10,
            backgroundColor: colors.borderOutline,
            borderRadius: 20
        }
    });

export default CardLoader;
