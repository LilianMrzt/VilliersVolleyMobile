import ImageButton from '@components/common/ImageButton';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
import { ShortcutCardInterface } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ShortcutCard: FC<ShortcutCardInterface> = ({ marginLeft = 20, marginRight = 20, onPress, label, icon }) => {
    const { colors } = useTheme();
    const styles = shortcutCardStyle(colors);

    return (
        <TouchableOpacity
            style={[
                styles.container,
                {
                    marginLeft: marginLeft,
                    marginRight: marginRight
                }
            ]}
            onPress={onPress}
        >
            <Row
                justify={'space-between'}
                flex={1}
            >
                <ImageIcon
                    source={icon}
                    size={40}
                    color={colors.onSecondary}
                />
                <ImageButton
                    source={ImageConstants.forwardArrow}
                    size={16}
                    color={colors.onSecondary}
                    style={styles.arrowButton}
                    onPress={onPress}
                />
            </Row>

            <View style={styles.textBox}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
};

const shortcutCardStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            height: 120,
            backgroundColor: colors.secondary,
            elevation: 1,
            borderRadius: 10,
            padding: 15
        },
        text: {
            color: colors.onSecondary,
            fontWeight: '700',
            fontSize: 16
        },
        textBox: {
            flex: 1,
            justifyContent: 'center',
            paddingTop: 10
        },
        arrowButton: {
            borderWidth: 2,
            borderRadius: 5,
            padding: 3,
            borderColor: colors.onSecondary,
            marginRight: 10
        }
    });

export default ShortcutCard;
