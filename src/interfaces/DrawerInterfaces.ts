import {
    ColorValue,
    DimensionValue,
    ImageSourcePropType,
    ImageStyle,
    ViewStyle
} from 'react-native';
import {NumberProp} from "react-native-svg";

export interface ImageButtonInterface {
    source: ImageSourcePropType;
    size: NumberProp;
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

export interface SvgIconInterface {
    source: ImageSourcePropType;
    size?: NumberProp;
    color?: ColorValue;
    style?: ImageStyle;
    height?: number;
    width?: number;
}