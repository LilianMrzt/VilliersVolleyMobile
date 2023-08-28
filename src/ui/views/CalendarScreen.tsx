import MonthlyCalendar from '@components/calendar/MonthlyCalendar';
import CustomHeader from '@components/cards/CustomHeader';
import I18n from '@utils/I18n';
import React from 'react';
import { View } from 'react-native';

const CalendarScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader label={I18n.t('CalendarScreen')} />
            <MonthlyCalendar />
        </View>
    );
};

export default CalendarScreen;
