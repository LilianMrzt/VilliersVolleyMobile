import { ImageIconInterface } from '@interfaces/DrawerInterfaces';
import React, { FC } from 'react';
import { Image } from 'react-native';

const ImageIcon: FC<ImageIconInterface> = ({ source, color, size, style }) => {
    return (
        <Image
            source={source}
            resizeMode={'contain'}
            style={[color && { tintColor: color }, { width: size, height: size }, style]}
        />
    );
};

export default ImageIcon;
