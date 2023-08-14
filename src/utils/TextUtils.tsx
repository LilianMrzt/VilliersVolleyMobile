import React from 'react';
import { Text } from 'react-native';

const formatTextWithBold = (inputString, color) => {
    const parts = inputString.split('**');
    const formattedText = parts.map((part, index) => {
        if (index % 2 === 1) {
            return (
                <Text
                    key={index}
                    style={{ fontWeight: 'bold' }}
                >
                    {part}
                </Text>
            );
        } else {
            return part;
        }
    });

    return <Text style={{ color: color }}>{formattedText}</Text>;
};

export default formatTextWithBold;
