import React, { FC } from 'react';
import { LocalSvg } from 'react-native-svg';
import {SvgIconInterface} from "@interfaces/DrawerInterfaces";

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
