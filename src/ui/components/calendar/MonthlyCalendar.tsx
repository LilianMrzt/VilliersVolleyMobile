import CalendarBottomSheet from '@components/calendar/CalendarBottomSheet';
import DayCard from '@components/calendar/DayCard';
import DayNameCard from '@components/calendar/DayNameCard';
import MonthlyCalendarHeader from '@components/calendar/MonthlyCalendarHeader';
import { TerrainFixtures } from '@constants/fixtures/TerrainFixtures';
import { Terrain } from '@interfaces/TerrainInterface';
import { calendarUtils } from '@utils/CalendarUtils';
import React, { useCallback, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const MonthlyCalendar = () => {
    const styles = monthlyCalendarStyle;

    const currentDate = new Date(); // Date actuelle
    const [activeDate, setActiveDate] = useState(currentDate);
    const [activeMonth, setActiveMonth] = useState(currentDate.getMonth());
    const [activeYear, setActiveYear] = useState(currentDate.getFullYear());

    const screenWidth = Dimensions.get('window').width;
    const dayContainerWidth = screenWidth / 7;

    const changeMonth = useCallback(
        (n: number, newMonth = activeDate.getMonth(), newDate = undefined) => {
            if (n === 0) {
                setActiveMonth(newMonth);
            }
            if (newDate) {
                setActiveDate(newDate);
            }
            if (activeMonth === 0 && n === -1) {
                setActiveMonth(11);
                setActiveYear(activeYear - 1);
            } else if (activeMonth === 11 && n === 1) {
                setActiveMonth(0);
                setActiveYear(activeYear + 1);
            } else {
                setActiveMonth(activeMonth + n);
                setActiveYear(activeYear);
            }
        },
        [activeDate, activeMonth, activeYear]
    );

    const handleSwipe = (event) => {
        if (event.nativeEvent.state === State.END) {
            const { translationX } = event.nativeEvent;

            if (translationX > 0) {
                changeMonth(-1); // Swipe à droite, aller au mois précédent
            } else if (translationX < 0) {
                changeMonth(1); // Swipe à gauche, aller au mois suivant
            }
        }
    };

    const rows = calendarUtils.generateMonthMatrix(activeMonth, activeYear).map((row, rowIndex) => {
        const rowItems = row.map((item, colIndex) => {
            if (rowIndex === 0) {
                // Renvoyer les noms des jours
                return (
                    <DayNameCard
                        key={`${rowIndex}-${colIndex}`}
                        item={item}
                        dayContainerWidth={dayContainerWidth}
                    />
                );
            } else {
                const terrains = (): Terrain[] => {
                    if (item.isCurrentMonth) {
                        return TerrainFixtures.filter((terrain) => {
                            const terrainDate = new Date(terrain.attributes.jour);
                            return (
                                terrainDate.getDate() === item.day &&
                                item.isCurrentMonth === true &&
                                terrainDate.getMonth() === activeMonth &&
                                terrainDate.getFullYear() === activeYear
                            );
                        });
                    } else if (item.isNextMonth) {
                        return TerrainFixtures.filter((terrain) => {
                            const terrainDate = new Date(terrain.attributes.jour);
                            return (
                                terrainDate.getDate() === item.day &&
                                item.isNextMonth === true &&
                                terrainDate.getMonth() ===
                                    (activeMonth === 11 ? 0 : activeMonth + 1) &&
                                terrainDate.getFullYear() ===
                                    (activeMonth === 11 ? activeYear + 1 : activeYear)
                            );
                        });
                    } else if (item.isPreviousMonth) {
                        return TerrainFixtures.filter((terrain) => {
                            const terrainDate = new Date(terrain.attributes.jour);
                            return (
                                terrainDate.getDate() === item.day &&
                                item.isPreviousMonth === true &&
                                terrainDate.getMonth() ===
                                    (activeMonth === 0 ? 11 : activeMonth - 1) &&
                                terrainDate.getFullYear() ===
                                    (activeMonth === 0 ? activeYear - 1 : activeYear)
                            );
                        });
                    }
                };

                // Renvoyer les jours du mois
                return (
                    <DayCard
                        key={`${rowIndex}-${colIndex}`}
                        item={item}
                        activeDate={activeDate}
                        activeMonth={activeMonth}
                        activeYear={activeYear}
                        currentDate={currentDate}
                        dayContainerWidth={dayContainerWidth}
                        terrains={terrains()}
                        changeMonth={changeMonth}
                        index={colIndex}
                    />
                );
            }
        });

        return (
            <View
                key={rowIndex}
                style={styles.rowContainer}
            >
                {rowItems}
            </View>
        );
    });

    return (
        <View style={styles.container}>
            <PanGestureHandler onHandlerStateChange={handleSwipe}>
                <View>
                    <MonthlyCalendarHeader
                        activeMonth={activeMonth}
                        activeYear={activeYear}
                        onPreviousMonthPressed={() => changeMonth(-1)}
                        onGoToCurrentMonthPressed={() => {
                            setActiveDate(currentDate);
                            setActiveMonth(currentDate.getMonth());
                            setActiveYear(currentDate.getFullYear());
                        }}
                        onNextMonthPressed={() => changeMonth(1)}
                    />
                    {rows}
                </View>
            </PanGestureHandler>
            <CalendarBottomSheet
                activeDate={activeDate}
                activeMonth={activeMonth}
                activeYear={activeYear}
            />
        </View>
    );
};

const monthlyCalendarStyle = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default MonthlyCalendar;
