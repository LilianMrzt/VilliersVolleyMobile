import ImageButton from '@components/common/ImageButton';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
import { MonthlyCalendarHeaderProps } from '@interfaces/CalendarInterfaces';
import { useTheme } from '@react-navigation/native';
import { dateUtils } from '@utils/DateUtils';
import Size from '@utils/Size';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MonthlyCalendarHeader: React.FC<MonthlyCalendarHeaderProps> = ({
    activeMonth,
    onNextMonthPressed,
    onPreviousMonthPressed,
    onGoToCurrentMonthPressed,
    activeYear
}) => {
    const { colors } = useTheme();
    const styles = monthlyCalendarHeaderStyle(colors);

    return (
        <Row style={styles.header}>
            <View style={styles.leftIcon}>
                <ImageButton
                    source={ImageConstants.leftArrow}
                    size={16}
                    color={colors.onBackground}
                    onPress={onPreviousMonthPressed}
                />
                <View style={{ width: 40 }} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {dateUtils.getMonthLabel(activeMonth)} {activeYear}
                </Text>
            </View>

            <View style={styles.rightIcons}>
                <ImageButton
                    source={ImageConstants.calendar}
                    size={20}
                    color={colors.onBackground}
                    onPress={onGoToCurrentMonthPressed}
                    style={{ marginRight: 20 }}
                />
                <ImageButton
                    source={ImageConstants.rightArrow}
                    size={16}
                    color={colors.onBackground}
                    onPress={onNextMonthPressed}
                />
            </View>
        </Row>
    );
};

const monthlyCalendarHeaderStyle = (colors: any) =>
    StyleSheet.create({
        header: {
            height: Size.getWindowContentHeight() * 0.05,
            alignItems: 'center'
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20
        },
        leftIcon: {
            flexDirection: 'row',
            marginRight: 10,
            marginLeft: 10
        },
        titleContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontSize: 16,
            color: colors.onBackground,
            fontWeight: 'bold'
        },
        rightIcons: {
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        }
    });

export default MonthlyCalendarHeader;
