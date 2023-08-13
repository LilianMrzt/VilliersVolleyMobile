import MonthlyCalendar from '@components/calendar/MonthlyCalendar';
import React from 'react';
import { View } from 'react-native';

const CalendarScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <MonthlyCalendar />
        </View>
    );
};

export default CalendarScreen;
