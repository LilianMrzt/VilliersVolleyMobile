import { RowInterface } from '@interfaces/ComponentsInterfaces';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Row: React.FC<RowInterface> = ({
    children,
    style,
    justify = 'flex-start',
    alignItems = 'center',
    flex
}) => {
    return (
        <View
            style={[
                styles.container,
                style,
                { justifyContent: justify, alignItems: alignItems, flex: flex }
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%'
    }
});

export default Row;
