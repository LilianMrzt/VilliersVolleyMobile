import React, { Dispatch, SetStateAction } from 'react';
import { ImageSourcePropType, KeyboardTypeOptions, ViewStyle } from 'react-native';

export interface CustomButtonInterface {
    label: string;
    onPress: () => void;
    backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'transparent';
    textColor?: 'onPrimary' | 'onSecondary' | 'onTertiary' | 'onBackground';
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    isScreenFullWidth?: boolean;
    icon?: ImageSourcePropType;
    style?: ViewStyle;
    fontSize?: number;
    borderWidth?: number;
    borderColor?: 'onPrimary' | 'onSecondary' | 'onTertiary' | 'onBackground';
    hasShadows?: boolean;
}

export interface SectionSeparatorInterface {
    label?: string;
    icon?: ImageSourcePropType;
}

export interface CustomInputInterface {
    label: string;
    text: string;
    onChangeText: Dispatch<SetStateAction<string>>;
    backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'background';
    border?: boolean;
    mandatory?: boolean;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    style?: ViewStyle;
}

export interface RowInterface {
    children: React.ReactNode;
    style?: any;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}
