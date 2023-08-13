import ImageIcon from '@components/common/ImageIcon';
import { ImageButtonInterface } from '@interfaces/DrawerInterfaces';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';

const ImageButton: FC<ImageButtonInterface> = ({ source, size, color, onPress, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={style}
        >
            <ImageIcon
                source={source}
                size={size}
                color={color}
            />
        </TouchableOpacity>
    );
};

export default ImageButton;
