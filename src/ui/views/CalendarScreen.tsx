import MonthlyCalendar from '@components/calendar/MonthlyCalendar';
import CustomHeaderCard from '@components/cards/CustomHeaderCard';
import I18n from '@utils/I18n';
import React from 'react';
import { View } from 'react-native';

const CalendarScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeaderCard
                label={I18n.t('CalendarScreen')}
                height={60}
                borderRadius={20}
                marginBottom={0}
            />
            <MonthlyCalendar />
        </View>
    );
};

export default CalendarScreen;
