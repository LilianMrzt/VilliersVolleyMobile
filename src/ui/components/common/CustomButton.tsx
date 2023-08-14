import { CustomButtonInterface } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomButton: FC<CustomButtonInterface> = ({
    label,
    onPress,
    backgroundColor = 'primary',
    textColor = 'onPrimary',
    fontWeight = 'normal',
    isScreenFullWidth = true,
    icon,
    style,
    fontSize = 20,
    borderWidth = 0,
    borderColor = 'onPrimary'
}) => {
    const { colors } = useTheme();

    const iconSize = fontSize * 1.3;

    return (
        <View style={[styles.buttonContainer, isScreenFullWidth && { width: '100%' }, style]}>
            <TouchableOpacity
                style={[
                    styles.container,
                    {
                        backgroundColor: colors[backgroundColor],
                        borderWidth: borderWidth,
                        borderColor:
                            backgroundColor === 'transparent'
                                ? colors[borderColor]
                                : colors[`on${borderColor.charAt(0).toUpperCase()}${backgroundColor.slice(1)}`],
                        padding: fontSize / 2,
                        paddingLeft: fontSize,
                        paddingRight: fontSize
                    },
                    backgroundColor !== 'transparent' && styles.containerShadows
                ]}
                onPress={onPress}
            >
                {icon && (
                    <Image
                        source={icon}
                        style={[
                            styles.icon,
                            {
                                tintColor:
                                    backgroundColor === 'transparent'
                                        ? colors[textColor]
                                        : colors[`on${backgroundColor.charAt(0).toUpperCase()}${backgroundColor.slice(1)}`],
                                width: iconSize,
                                height: iconSize
                            }
                        ]}
                    />
                )}
                <Text
                    style={{
                        color:
                            backgroundColor === 'transparent'
                                ? colors[textColor]
                                : colors[`on${backgroundColor.charAt(0).toUpperCase()}${backgroundColor.slice(1)}`],
                        fontWeight: fontWeight,
                        fontSize: fontSize
                    }}
                >
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
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
    },
    icon: {
        marginRight: 10
    }
});

export default CustomButton;
