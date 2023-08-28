import { Day, Month } from '@interfaces/CalendarInterfaces';
import I18n from '@utils/I18n';

// Mois

const JANUARY: Month = {
    label: I18n.t('January'),
    numberOfDays: 31,
    monthNumber: 0
};

const FEBRUARY: Month = {
    label: I18n.t('February'),
    numberOfDays: 28,
    monthNumber: 1
};

const MARCH: Month = {
    label: I18n.t('March'),
    numberOfDays: 31,
    monthNumber: 2
};

const APRIL: Month = {
    label: I18n.t('April'),
    numberOfDays: 30,
    monthNumber: 3
};

const MAY: Month = {
    label: I18n.t('May'),
    numberOfDays: 31,
    monthNumber: 4
};

const JUNE: Month = {
    label: I18n.t('June'),
    numberOfDays: 30,
    monthNumber: 5
};

const JULY: Month = {
    label: I18n.t('July'),
    numberOfDays: 31,
    monthNumber: 6
};

const AUGUST: Month = {
    label: I18n.t('August'),
    numberOfDays: 31,
    monthNumber: 7
};

const SEPTEMBER: Month = {
    label: I18n.t('September'),
    numberOfDays: 30,
    monthNumber: 8
};

const OCTOBER: Month = {
    label: I18n.t('October'),
    numberOfDays: 31,
    monthNumber: 9
};

const NOVEMBER: Month = {
    label: I18n.t('November'),
    numberOfDays: 30,
    monthNumber: 10
};

const DECEMBER: Month = {
    label: I18n.t('December'),
    numberOfDays: 31,
    monthNumber: 11
};

// Jours

const MONDAY: Day = {
    label: I18n.t('Monday'),
    dayNumber: 1
};

const TUESDAY: Day = {
    label: I18n.t('Tuesday'),
    dayNumber: 2
};

const WEDNESDAY: Day = {
    label: I18n.t('Wednesday'),
    dayNumber: 3
};

const THURSDAY: Day = {
    label: I18n.t('Thursday'),
    dayNumber: 4
};

const FRIDAY: Day = {
    label: I18n.t('Friday'),
    dayNumber: 5
};

const SATURDAY: Day = {
    label: I18n.t('Saturday'),
    dayNumber: 6
};

const SUNDAY: Day = {
    label: I18n.t('Sunday'),
    dayNumber: 0
};

const WEEKDAYS = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY];

const MONTHS = [
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER
];

export const dateConstants = {
    MONTHS,
    WEEKDAYS
};
