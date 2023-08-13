import { dateConstants } from '@constants/DateConstants';

/**
 * Permet d'obtenir le label du jour en fonction de son nombre dans la matrice
 *
 * @param dayNumber
 */
function getDayLabel(dayNumber) {
    const matchedDay = dateConstants.WEEKDAYS.find((day) => day.dayNumber === dayNumber);
    if (matchedDay) {
        return matchedDay.label;
    }
    return '';
}

/**
 * Permet d'obtenir le label du mois en fonction de son nombre
 *
 * @param monthNumber
 */
function getMonthLabel(monthNumber) {
    const matchedMonth = dateConstants.MONTHS.find((month) => month.monthNumber === monthNumber);
    if (matchedMonth) {
        return matchedMonth.label;
    }
    return '';
}

export const dateUtils = {
    getDayLabel,
    getMonthLabel
};
