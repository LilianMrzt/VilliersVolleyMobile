import ImageButton from '@components/common/ImageButton';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
import RouteConstants from '@constants/routes/RouteConstants';
import { CustomHeaderCardInterface } from '@interfaces/ComponentsInterfaces';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React, { FC } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const CustomHeaderCard: FC<CustomHeaderCardInterface> = ({
    label,
    icon,
    onPress,
    height,
    borderRadius,
    marginBottom = 10
}) => {
    const { colors } = useTheme();
    const styles = homeScreenHeaderCardStyle(colors);

    const navigation = useNavigation<any>();
    const route = useRoute();

    return (
        <View
            style={[
                styles.container,
                height && { height: height + StatusBar.currentHeight },
                {
                    borderBottomRightRadius: borderRadius ? borderRadius : 40,
                    borderBottomLeftRadius: borderRadius ? borderRadius : 40
                },
                marginBottom && {
                    marginBottom: marginBottom
                }
            ]}
        >
            <Row justify={'space-between'}>
                <Row flex={1}>
                    <ImageButton
                        source={icon ? icon : ImageConstants.menu}
                        size={height ? height * 0.5 : 40}
                        color={colors.onBackground}
                        onPress={() => (onPress ? onPress() : navigation.toggleDrawer())}
                        style={styles.leftButton}
                    />
                    <Text style={styles.homeText}>{label}</Text>
                </Row>

                {route.name === RouteConstants.HOME_SCREEN ? (
                    <ImageIcon
                        source={ImageConstants.volleyballBall}
                        size={50}
                        color={colors.tertiary}
                    />
                ) : (
                    <ImageButton
                        source={ImageConstants.volleyballBall}
                        size={height ? height * 0.66 : 50}
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
        </View>
    );
};

const homeScreenHeaderCardStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: Size.getScreenWidth(),
            height: 120 + StatusBar.currentHeight,
            backgroundColor: colors.surface,
            paddingTop: StatusBar.currentHeight,
            elevation: 1,
            paddingLeft: 20,
            paddingRight: 20,
            justifyContent: 'center'
        },
        homeText: {
            fontSize: 20,
            color: colors.onSurface,
            fontWeight: 'bold',
            paddingLeft: 15,
            paddingRight: 20
        },
        text: {
            fontSize: 16,
            color: colors.onSurface,
            paddingLeft: 15,
            paddingRight: 20
        },
        leftButton: {
            borderWidth: 1,
            borderRadius: 10,
            padding: 3,
            borderColor: colors.onSurface
        }
    });

export default CustomHeaderCard;
