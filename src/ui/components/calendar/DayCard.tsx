import ColoredDot from '@components/calendar/ColoredDot';
import Row from '@components/common/Row';
import { COLOR_ORDER, TERRAIN_COLOR_MAP } from '@constants/TerrainConstants';
import { DayCardInterface } from '@interfaces/CalendarInterfaces';
import { useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DayCard: React.FC<DayCardInterface> = ({
    item,
    activeDate,
    activeMonth,
    activeYear,
    currentDate,
    dayContainerWidth,
    terrains,
    changeMonth,
    index
}) => {
    const { colors } = useTheme();
    const styles = dayCardStyle(colors);

    const isActiveDate =
        item.day === activeDate.getDate() &&
        item.isCurrentMonth &&
        activeMonth === activeDate.getMonth() &&
        activeYear === activeDate.getFullYear();

    /**
     * Permet de savoir si le mois actuel est Décembre
     */
    const isDecember = () => {
        return activeMonth === 11;
    };

    /**
     * Permet de savoir si le mois actuel est Janvier
     */
    const isJanuary = () => {
        return activeMonth === 0;
    };

    /**
     * Permet de gérer le changement de date lors d'un click sur une date
     */
    const handleDateChange = () => {
        const newDate = new Date(activeDate.getFullYear(), activeMonth, activeDate.getDate());

        // Si on clique sur une date du mois suivant
        if (item.isNextMonth === true) {
            newDate.setDate(item.day);
            newDate.setMonth(isDecember() ? 0 : activeMonth + 1);
            newDate.setFullYear(isDecember() ? activeYear + 1 : activeYear);
            changeMonth(1, newDate.getMonth(), newDate);
        }
        // Si on clique sur une date du mois précédent
        else if (item.isPreviousMonth === true) {
            newDate.setDate(item.day);
            newDate.setMonth(isJanuary() ? 11 : activeMonth - 1);
            newDate.setFullYear(isJanuary() ? activeYear - 1 : activeYear);
            changeMonth(-1, newDate.getMonth(), newDate);
        } else {
            newDate.setDate(item.day);
            newDate.setFullYear(activeYear);
            changeMonth(0, newDate.getMonth(), newDate);
        }
    };

    const isCurrentYear = activeYear === currentDate.getFullYear();

    /**
     * Permet de trier les terrains en fonction de leur couleur
     */
    const sortedTerrains = terrains.sort((a, b) => {
        const colorA = a.attributes.terrain;
        const colorB = b.attributes.terrain;
        return COLOR_ORDER.indexOf(colorA) - COLOR_ORDER.indexOf(colorB);
    });

    /**
     * Permet d'afficher des points de couleur en fonction des terrains disponibles
     */
    const coloredDots = sortedTerrains
        .filter((terrain) => TERRAIN_COLOR_MAP.hasOwnProperty(terrain.attributes.terrain))
        .map((terrain) => (
            <ColoredDot
                key={terrain.id}
                color={
                    terrain.attributes.ferme
                        ? colors.border
                        : TERRAIN_COLOR_MAP[terrain.attributes.terrain]
                }
                isCurrentMonth={item.isCurrentMonth}
            />
        ));

    return (
        <TouchableOpacity
            onPress={handleDateChange}
            style={[
                styles.dayContainer,
                isActiveDate && styles.activeDay,
                { width: dayContainerWidth },
                index === 0 && !isActiveDate && { borderLeftWidth: 0 },
                index === 6 && !isActiveDate && { borderRightWidth: 0 }
            ]}
        >
            <View
                style={
                    item.day === currentDate.getDate() &&
                    activeMonth === currentDate.getMonth() &&
                    isCurrentYear &&
                    styles.currentDay
                }
            >
                <Text
                    style={[
                        styles.dayText,
                        item.day === currentDate.getDate() &&
                            activeMonth === currentDate.getMonth() &&
                            isCurrentYear &&
                            styles.currentDayText,
                        item.isCurrentMonth === undefined && { opacity: 0.2 }
                    ]}
                >
                    {item.day}
                </Text>
            </View>
            <Row justify="space-around">{coloredDots.length > 0 ? coloredDots : <View />}</Row>
        </TouchableOpacity>
    );
};

const dayCardStyle = (colors) =>
    StyleSheet.create({
        dayContainer: {
            height: Size.getWindowContentHeight() * 0.1,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 5,
            borderWidth: 0.5,
            borderColor: colors.borderOutline,
            backgroundColor: colors.background
        },
        dayText: {
            fontSize: 14,
            color: colors.onBackground
        },
        activeDay: {
            borderWidth: 2,
            borderColor: colors.tertiary,
            borderRadius: 10
        },
        currentDayText: {
            color: colors.background
        },
        currentDay: {
            backgroundColor: colors.tertiary,
            borderRadius: 50,
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });

export default DayCard;
