import { RowInterface } from '@interfaces/ComponentsInterfaces';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row: React.FC<RowInterface> = ({ children, style, justify = 'flex-start' }) => {
    return <View style={[styles.container, style, { justifyContent: justify }]}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    }
});

export default Row;
