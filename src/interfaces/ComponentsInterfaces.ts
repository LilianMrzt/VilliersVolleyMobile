import { Dispatch, SetStateAction } from 'react';
import { ImageSourcePropType, KeyboardTypeOptions, ViewStyle } from 'react-native';

export interface CustomButtonInterface {
    label: string;
    onPress: () => void;
    backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'background';
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    isScreenFullWidth?: boolean;
    icon?: ImageSourcePropType;
    style?: ViewStyle;
}

export interface SectionSeparatorInterface {
    label: string;
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
