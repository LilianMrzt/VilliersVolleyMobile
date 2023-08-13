import { DayNameCardInterface } from '@interfaces/CalendarInterfaces';
import { useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DayNameCard: React.FC<DayNameCardInterface> = ({ item, dayContainerWidth }) => {
    const { colors } = useTheme();
    const styles = dayNameCardStyle(colors);
    return (
        <View style={[styles.dayContainer, { width: dayContainerWidth }]}>
            <Text style={styles.dayText}>{item}</Text>
        </View>
    );
};

const dayNameCardStyle = (colors: any) =>
    StyleSheet.create({
        dayContainer: {
            height: Size.getWindowContentHeight() * 0.03,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: colors.borderOutline,
            backgroundColor: colors.background
        },
        dayText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.onBackground
        }
    });

export default DayNameCard;
