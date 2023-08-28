import { SectionSeparatorInterface } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const SectionSeparator: FC<SectionSeparatorInterface> = ({ label, icon }) => {
    const { colors } = useTheme();
    const styles = sectionSeparatorStyle(colors);

    const fontSize = 20;
    const iconSize = fontSize * 1.3;

    return (
        <View style={styles.container}>
            <View style={styles.firstLine} />
            {icon && (
                <Image
                    source={icon}
                    style={[styles.logo, { width: iconSize, height: iconSize }]}
                />
            )}
            {label && (
                <Text style={[styles.label, { fontSize: fontSize }, !icon && { marginLeft: 20 }]}>
                    {label}
                </Text>
            )}
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
            paddingBottom: 10
        },
        label: {
            color: colors.onBackground,
            marginRight: 20
        },
        line: {
            flex: 1,
            height: 1,
            backgroundColor: colors.onBackground
        },
        firstLine: {
            width: 30,
            height: 1,
            backgroundColor: colors.onBackground
        },
        logo: {
            marginRight: 10,
            marginLeft: 20,
            tintColor: colors.onBackground
        }
    });

export default SectionSeparator;
