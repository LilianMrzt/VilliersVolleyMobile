import TerrainInformations from '@components/calendar/TerrainInformations';
import SectionSeparator from '@components/common/SectionSeparator';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { CalendarBottomSheetInterface } from '@interfaces/CalendarInterfaces';
import { useTheme } from '@react-navigation/native';
import { dateUtils } from '@utils/DateUtils';
import Size from '@utils/Size';
import React, { useMemo, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';

const CalendarBottomSheet: React.FC<CalendarBottomSheetInterface> = ({
    activeDate,
    activeMonth,
    activeYear,
    sessions
}) => {
    const { colors } = useTheme();
    const styles = bottomSheetViewStyle(colors);

    const isSameMonthAndYear =
        activeMonth === activeDate.getMonth() && activeYear === activeDate.getFullYear();

    const sheetRef = useRef<BottomSheet>(null);

    /**
     * Permet de définir les deux points d'arret de la bottom sheet
     */
    const snapPoints = useMemo(() => {
        if (isSameMonthAndYear) {
            return [Size.getWindowContentHeight() * 0.32, '70%'];
        } else {
            return [Size.getWindowContentHeight() * 0.32];
        }
    }, [isSameMonthAndYear]);

    return (
        <BottomSheet
            ref={sheetRef}
            index={0}
            snapPoints={snapPoints}
            handleStyle={styles.bottomSheetHandle}
            handleIndicatorStyle={styles.handleIndicator}
        >
            <BottomSheetScrollView
                style={styles.contentContainer}
                contentContainerStyle={styles.contentContainer}
            >
                {activeMonth === activeDate.getMonth() &&
                    activeYear === activeDate.getFullYear() && (
                        <>
                            <Text style={styles.dateText}>
                                {dateUtils.getDayLabel(activeDate.getDay())} {activeDate.getDate()}{' '}
                                {dateUtils.getMonthLabel(activeDate.getMonth())}{' '}
                                {activeDate.getFullYear()}
                            </Text>
                            <SectionSeparator />
                        </>
                    )}

                <TerrainInformations
                    terrains={sessions?.filter((terrain) => {
                        const terrainDate = new Date(terrain.attributes.day);
                        return (
                            terrainDate.getDate() === activeDate.getDate() &&
                            terrainDate.getMonth() === activeDate.getMonth() &&
                            terrainDate.getFullYear() === activeDate.getFullYear()
                        );
                    })}
                    activeDate={activeDate}
                    activeMonth={activeMonth}
                    activeYear={activeYear}
                />
            </BottomSheetScrollView>
        </BottomSheet>
    );
};

const bottomSheetViewStyle = (colors) =>
    StyleSheet.create({
        contentContainer: {
            backgroundColor: colors.background
        },
        bottomSheetHandle: {
            backgroundColor: colors.background,
            height: 40,
            justifyContent: 'center',
            borderTopColor: colors.borderOutline,
            borderTopWidth: 0.2,
            borderBottomColor: colors.borderOutline,
            borderBottomWidth: 1
        },
        handleIndicator: {
            backgroundColor: colors.onBackground
        },
        dateText: {
            flex: 1,
            textAlign: 'center',
            color: colors.onBackground,
            fontSize: 18,
            marginTop: 10
        }
    });

export default CalendarBottomSheet;
