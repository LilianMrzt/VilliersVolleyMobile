import { ImageSourcePropType, ViewStyle } from 'react-native';

export interface CustomButtonInterface {
    label: string;
    onPress: () => void;
    backgroundColor?: 'primary' | 'secondary' | 'tertiary' | 'background';
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    isScreenWidth?: boolean;
    icon?: ImageSourcePropType;
    style?: ViewStyle;
}
