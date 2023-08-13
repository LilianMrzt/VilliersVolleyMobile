import { Terrain } from '@interfaces/TerrainInterface';
import { ColorValue } from 'react-native';

export interface Month {
    label: string;
    numberOfDays: number;
    monthNumber: number;
}

export interface Day {
    label: string;
    dayNumber: number;
}

export interface DayNameCardInterface {
    item: string;
    dayContainerWidth: number;
}

export interface CalendarBottomSheetInterface {
    activeDate: Date;
    activeMonth: number;
    activeYear: number;
}

export interface ColoredDotInterface {
    color: ColorValue;
    isCurrentMonth: boolean;
}

interface DateItem {
    day: number;
    isPreviousMonth?: boolean;
    isCurrentMonth?: boolean;
    isNextMonth?: boolean;
}

export interface DayCardInterface {
    item: DateItem;
    activeDate: Date;
    activeMonth: number;
    activeYear: number;
    currentDate: Date;
    dayContainerWidth: number;
    changeMonth: any;
    terrains?: Terrain[];
    index: number;
}

export interface MonthlyCalendarHeaderProps {
    activeMonth: number;
    activeYear: number;
    onNextMonthPressed: () => void;
    onPreviousMonthPressed: () => void;
    onGoToCurrentMonthPressed: () => void;
}
