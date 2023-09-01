import ImageConstants from '@assets/images/ImageConstants';
import IconButton from '@components/common/IconButton';
import Row from '@components/common/Row';
import SvgIcon from '@components/common/SvgIcon';
import { ShortcutCardInterface } from '@interfaces/ComponentsInterfaces';
import { useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ShortcutCard: FC<ShortcutCardInterface> = ({
    paddingLeft = 20,
    paddingRight = 20,
    onPress,
    label,
    icon
}) => {
    const { colors } = useTheme();
    const styles = shortcutCardStyle(colors);

    return (
        <View
            style={[
                styles.mainContainer,
                {
                    paddingLeft: paddingLeft,
                    paddingRight: paddingRight
                }
            ]}
        >
            <TouchableOpacity
                style={[styles.container]}
                onPress={onPress}
            >
                <SvgIcon
                    source={ImageConstants.NetDesign}
                    style={styles.image}
                    color={`${colors.onSecondary}11`}
                    size={'100%'}
                />
                <View style={styles.content}>
                    <Row
                        justify={'space-between'}
                        flex={1}
                    >
                        <SvgIcon
                            source={icon}
                            size={40}
                            color={colors.onSecondary}
                        />
                        {/*<ImageIcon
                        source={icon}
                        size={40}
                        color={colors.onSecondary}
                        />*/}
                        <IconButton
                            source={ImageConstants.ArrowForward}
                            size={25}
                            color={colors.onSecondary}
                            style={styles.arrowButton}
                            onPress={onPress}
                        />
                    </Row>

                    <View style={styles.textBox}>
                        <Text style={styles.text}>{label}</Text>
                    </View>
                </View>

                {/*  <ImageBackground
                    resizeMode={'cover'}
                    tintColor={`${colors.onSecondary}11`}
                    source={ ImageConstants.shortcutBackDesign}
                    style={styles.image}
                >

                </ImageBackground>*/}
            </TouchableOpacity>
        </View>
    );
};

const shortcutCardStyle = (colors: any) =>
    StyleSheet.create({
        mainContainer: {
            width: Size.getScreenWidth() / 2,
            height: 120
        },
        container: {
            flex: 1,
            backgroundColor: colors.secondary,
            elevation: 1,
            borderRadius: 10
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
            borderColor: colors.onSecondary,
            marginRight: 10
        },
        image: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        content: {
            flex: 1,
            padding: 15
        }
    });

export default ShortcutCard;
