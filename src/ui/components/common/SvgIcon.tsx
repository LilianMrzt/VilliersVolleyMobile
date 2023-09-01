import React, { FC } from 'react';
import { ColorValue, ImageSourcePropType, ImageStyle } from 'react-native';
import { LocalSvg, NumberProp } from 'react-native-svg';

interface SvgIconInterface {
    source: ImageSourcePropType;
    size?: NumberProp;
    color?: ColorValue;
    style?: ImageStyle;
    height?: number;
    width?: number;
}

const SvgIcon: FC<SvgIconInterface> = ({ source, size, color = 'black', style, height, width }) => {
    return (
        <LocalSvg
            asset={source}
            height={size || height}
            width={size || width}
            color={color}
            style={style}
        />
    );
};

export default SvgIcon;
