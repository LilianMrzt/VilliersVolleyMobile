import ImageButton from '@components/common/ImageButton';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@assets/images/ImageConstants';
import RouteConstants from '@constants/routes/RouteConstants';
import { CustomHeaderInterface } from '@interfaces/ComponentsInterfaces';
import { useNavigation, useTheme } from '@react-navigation/native';
import DarkTheme from '@resources/theme/DarkTheme';
import LightTheme from '@resources/theme/LightTheme';
import Size from '@utils/Size';
import React, { FC } from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import IconButton from "@components/common/IconButton";
import SvgIcon from "@components/common/SvgIcon";

const CustomHeader: FC<CustomHeaderInterface> = ({
    height = 60,
    backgroundColor = useColorScheme() === 'dark'
        ? DarkTheme.colors.background
        : LightTheme.colors.background,
    elevation = 0,
    borderRadius,
    onPress,
    icon,
    hasBorder = false,
    label,
    isHomeScreen = false
}) => {
    const { colors } = useTheme();
    const styles = customHeaderStyle(colors);

    const navigation = useNavigation<any>();

    return (
        <View
            style={[
                styles.container,
                {
                    height: height + StatusBar.currentHeight,
                    backgroundColor: backgroundColor,
                    elevation: elevation
                },
                borderRadius && {
                    borderBottomLeftRadius: borderRadius,
                    borderBottomRightRadius: borderRadius
                }
            ]}
        >
            <ImageBackground
                resizeMode={'cover'}
                tintColor={`${colors.secondary}51`}
                source={isHomeScreen ? ImageConstants.shortcutBackDesign : ''}
                style={styles.image}
            >
                <Row
                    alignItems={'center'}
                    justify={'space-between'}
                    flex={1}
                    style={styles.row}
                >
                    <IconButton
                        source={icon ? icon : ImageConstants.Menu}
                        size={isHomeScreen ? height * 0.35 : height * 0.6}
                        color={colors.onBackground}
                        onPress={() => (onPress ? onPress() : navigation.toggleDrawer())}
                        style={[styles.button, hasBorder && styles.leftButton]}
                    />
                    <Text style={styles.homeText}>{label}</Text>
                    {isHomeScreen ? (
                        <SvgIcon
                            source={ImageConstants.VolleyballBall}
                             size={height * 0.5}
                             color={colors.tertiary}
                        />
                    ) : (
                        <IconButton
                            source={ImageConstants.VolleyballBall}
                            size={height * 0.6}
                            color={colors.tertiary}
                            onPress={() =>
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: RouteConstants.HOME_SCREEN }]
                                })
                            }
                        />
                    )}
                </Row>
            </ImageBackground>
        </View>
    );
};

const customHeaderStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: Size.getScreenWidth(),
            backgroundColor: colors.surface,
            elevation: 1,
            justifyContent: 'center'
        },
        homeText: {
            fontSize: 20,
            color: colors.onSurface,
            fontWeight: 'bold',
            flex: 6,
            marginLeft: 20
        },
        row: {
            paddingTop: StatusBar.currentHeight,
            paddingLeft: 20,
            paddingRight: 20
        },
        button: {
            alignItems: 'center',
            aspectRatio: 1,
            padding: 5
        },
        leftButton: {
            borderWidth: 1,
            borderRadius: 8,
            borderColor: colors.onSurface
        },
        image: {
            flex: 1
        }
    });

export default CustomHeader;
