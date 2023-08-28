import { dateConstants } from '@constants/DateConstants';

/**
 * Génère la matrice des mois pour le calendrier
 *
 * @param activeMonth
 * @param activeYear
 */
function generateMonthMatrix(activeMonth, activeYear) {
    const matrix = [];

    const numberOfDays = dateConstants.MONTHS.map((month) => month.numberOfDays);

    matrix[0] = dateConstants.WEEKDAYS.map((weekday) => {
        const truncatedWeekday = weekday.label.substring(0, 3); // Extraire les 3 premiers caractères
        return truncatedWeekday.substring(0, 3) + '.'; // Remplacer le quatrième caractère par un point
    });

    const month = activeMonth;
    const firstDay = new Date(activeYear, month, 1).getDay();
    let maxDays = numberOfDays[month];

    // Vérifie si le mois est février et si l'année est bissextile
    if (
        month === 1 &&
        ((activeYear % 4 === 0 && activeYear % 100 !== 0) || activeYear % 400 === 0)
    ) {
        maxDays += 1;
    }

    // Détermine le mois précédent
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthDays = numberOfDays[prevMonth];

    let counter = 1;
    let prevMonthCounter = prevMonthDays - firstDay + 1; // Compteur pour les jours du mois précédent

    for (let row = 1; row < 7; row++) {
        matrix[row] = [];
        for (let col = 0; col < 7; col++) {
            matrix[row][col] = null; // Assigner null s'il n'y a pas de jour correspondant pour cette cellule

            // Ajouter les jours du mois courant
            if (row > 1 && counter <= maxDays) {
                matrix[row][col] = {
                    day: counter++,
                    isCurrentMonth: true
                };
            }
            // Ajouter les jours du mois suivant à la fin
            else if (row > 1 && counter > maxDays) {
                matrix[row][col] = {
                    day: counter++ - maxDays,
                    isNextMonth: true
                };
            }
            // Ajouter les jours du mois précédent
            else if (row === 1 && col < (firstDay === 0 ? 6 : firstDay - 1)) {
                matrix[row][col] = {
                    day:
                        prevMonthCounter > numberOfDays[prevMonth]
                            ? prevMonthCounter++ - 6
                            : prevMonthCounter++ + 1,
                    isPreviousMonth: true
                };
            } else {
                matrix[row][col] = {
                    day: counter++,
                    isCurrentMonth: true
                };
            }
        }
    }
    return matrix;
}

export const calendarUtils = {
    generateMonthMatrix
};
