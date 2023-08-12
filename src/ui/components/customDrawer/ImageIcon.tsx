import { ImageIconInterface } from '@interfaces/DrawerInterfaces';
import React, { FC } from 'react';
import { Image } from 'react-native';

const ImageIcon: FC<ImageIconInterface> = ({ source, color, size }) => {
    return (
        <Image
            source={source}
            style={{ tintColor: color, width: size, height: size }}
        />
    );
};

export default ImageIcon;
