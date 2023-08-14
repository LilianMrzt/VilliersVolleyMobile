import { RowInterface } from '@interfaces/ComponentsInterfaces';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row: React.FC<RowInterface> = ({ children, style, justify = 'flex-start', alignItems = 'center' }) => {
    return <View style={[styles.container, style, { justifyContent: justify, alignItems: alignItems }]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%'
    }
});

export default Row;
