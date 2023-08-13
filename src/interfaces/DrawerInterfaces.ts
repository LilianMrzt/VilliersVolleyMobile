import { ColorValue, DimensionValue, ImageSourcePropType, ViewStyle } from 'react-native';

export interface ImageButtonInterface {
    source: ImageSourcePropType;
    size: DimensionValue;
    color: ColorValue;
    onPress: () => void;
    style?: ViewStyle;
}

export interface ImageIconInterface {
    source: ImageSourcePropType;
    size: DimensionValue;
    color: ColorValue;
}
