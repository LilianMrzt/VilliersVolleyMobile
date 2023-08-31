import ImageIcon from '@components/common/ImageIcon';
import { ImageButtonInterface } from '@interfaces/DrawerInterfaces';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import SvgIcon from "@components/common/SvgIcon";

const IconButton: FC<ImageButtonInterface> = ({ source, size, color, onPress, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
        >
            <SvgIcon
                source={source}
                size={size}
                color={color}
            />
        </TouchableOpacity>
    );
};

export default IconButton;
