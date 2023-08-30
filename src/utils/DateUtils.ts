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

/**
 * Permet de formatter une date sous le format DD/MM/YYYY
 * @param inputDateString
 */
function formatDate(inputDateString) {
    const date = new Date(inputDateString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

/**
 * Permet d'extraire les chiffres d'une date et d'en faire un nombre pour pouvoir les comparer
 * @param inputString
 */
function extractConcatenatedDates(inputString) {
    const numberChunks = inputString.match(/\d+/g);
    if (!numberChunks) {
        return NaN; // No numbers found in the string
    }

    const concatenatedNumber = numberChunks.join('');
    return parseInt(concatenatedNumber);
}

export const dateUtils = {
    getDayLabel,
    getMonthLabel,
    formatDate,
    extractConcatenatedDates
};
