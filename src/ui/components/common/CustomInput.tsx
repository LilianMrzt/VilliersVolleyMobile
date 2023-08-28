import { CustomInputInterface } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomInput: FC<CustomInputInterface> = ({
    label,
    text,
    onChangeText,
    backgroundColor = 'primary',
    border = false,
    mandatory = false,
    placeholder = '',
    keyboardType = 'default',
    style
}) => {
    const { colors } = useTheme();
    const styles = customInputStyle(colors);

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>
                {label}
                {mandatory && <Text style={{ color: 'red' }}> *</Text>}
            </Text>
            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: colors[backgroundColor],
                        color: colors[
                            `on${backgroundColor.charAt(0).toUpperCase()}${backgroundColor.slice(
                                1
                            )}`
                        ]
                    },
                    border && { borderWidth: 1 },
                    backgroundColor !== 'background' && styles.containerShadows
                ]}
                onChangeText={onChangeText}
                value={text}
                placeholder={placeholder}
                placeholderTextColor={colors.onBackground}
                keyboardType={keyboardType}
            />
        </View>
    );
};

const customInputStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: '100%',
            height: undefined,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10
        },
        input: {
            borderRadius: 10,
            paddingLeft: 20,
            paddingRight: 20
        },
        label: {
            color: colors.onBackground,
            marginBottom: 5
        },
        containerShadows: {
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowOpacity: 0.16,
            shadowRadius: 1.51,
            elevation: 1
        }
    });

export default CustomInput;
