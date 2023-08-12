import { ColorValue, DimensionValue, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export interface ImageButtonInterface {
    source: ImageSourcePropType;
    style: StyleProp<ImageStyle>;
    onPress: () => void;
}

export interface ImageIconInterface {
    source: ImageSourcePropType;
    size: DimensionValue;
    color: ColorValue;
}
