import CardLoader from '@components/loaders/CardLoader';
import Size from '@utils/Size';
import React from 'react';
import { View } from 'react-native';

const HomeScreenLoader = () => {
    return (
        <View>
            <CardLoader
                height={30}
                width={120}
                style={{}}
            />
            <CardLoader
                height={100}
                width={Size.getScreenWidth() - 40}
                style={{ marginBottom: 30 }}
            />
            <CardLoader
                height={30}
                width={120}
                style={{}}
            />
            <CardLoader
                height={60}
                width={Size.getScreenWidth() - 40}
                style={{}}
            />
            <CardLoader
                height={60}
                width={Size.getScreenWidth() - 40}
                style={{}}
            />
            <CardLoader
                height={60}
                width={Size.getScreenWidth() - 40}
                style={{ marginBottom: 20 }}
            />
        </View>
    );
};

export default HomeScreenLoader;
