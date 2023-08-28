import {
    ColorValue,
    DimensionValue,
    ImageSourcePropType,
    ImageStyle,
    ViewStyle
} from 'react-native';

export interface ImageButtonInterface {
    source: ImageSourcePropType;
    size: DimensionValue;
    color: ColorValue;
    onPress: () => void;
    style?: ViewStyle | ViewStyle[];
}

export interface ImageIconInterface {
    source: ImageSourcePropType;
    size: DimensionValue;
    color?: ColorValue;
    style?: ImageStyle;
}
