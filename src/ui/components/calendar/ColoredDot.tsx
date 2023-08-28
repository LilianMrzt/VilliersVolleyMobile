import { ColoredDotInterface } from '@interfaces/CalendarInterfaces';
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

const ColoredDot: FC<ColoredDotInterface> = ({ color, isCurrentMonth }) => {
    return (
        <View
            style={[styles.dot, { backgroundColor: color }, !isCurrentMonth && { opacity: 0.2 }]}
        />
    );
};

const styles = StyleSheet.create({
    dot: {
        height: 5,
        width: 5,
        borderRadius: 50
    }
});

export default ColoredDot;
