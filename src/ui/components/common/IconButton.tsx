import SvgIcon from '@components/common/SvgIcon';
import { ImageButtonInterface } from '@interfaces/DrawerInterfaces';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

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
