import { SectionSeparatorInterface } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SectionSeparator: FC<SectionSeparatorInterface> = ({ label }) => {
    const { colors } = useTheme();
    const styles = sectionSeparatorStyle(colors);

    return (
        <View style={styles.container}>
            <View style={styles.firstLine} />
            <Text style={styles.label}>{label}</Text>
            <View style={styles.line} />
        </View>
    );
};

const sectionSeparatorStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
        },
        label: {
            fontSize: 18,
            color: colors.onBackground,
            marginRight: 20,
            marginLeft: 20
        },
        line: {
            flex: 1,
            height: 1,
            backgroundColor: colors.onBackground,
            borderRadius: 50
        },
        firstLine: {
            width: 30,
            height: 1,
            backgroundColor: colors.onBackground,
            borderRadius: 50
        }
    });

export default SectionSeparator;
