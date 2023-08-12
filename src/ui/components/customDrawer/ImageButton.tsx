import { ImageButtonInterface } from '@interfaces/DrawerInterfaces';
import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';

const ImageButton: FC<ImageButtonInterface> = ({ source, style, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                source={source}
                style={style}
            />
        </TouchableOpacity>
    );
};

export default ImageButton;
