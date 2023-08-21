import ImageButton from '@components/common/ImageButton';
import SectionSeparator from '@components/common/SectionSeparator';
import CustomDrawerItem from '@components/customDrawer/CustomDrawerItem';
import { DrawerBottomRoutes, DrawerTopRoutes } from '@constants/routes/DrawerRoutes';
import RouteConstants from '@constants/routes/RouteConstants';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation, useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageConstants from '../../../constants/ImageConstants';

const CustomDrawer = (props) => {
    const { colors } = useTheme();
    const styles = customDrawerStyle(colors);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.headerBackground}
            >
                <View style={styles.drawerHeader}>
                    <ImageButton
                        source={ImageConstants.defaultUser}
                        size={Size.getScreenWidth() * 0.3}
                        color={colors.tertiary}
                        onPress={() => navigation.navigate(RouteConstants.SETTINGS_SCREEN as never)}
                    />
                    <Text style={styles.userInfos}>FirstName LastName</Text>
                </View>

                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <View>
                        {DrawerTopRoutes.map((route, index) => (
                            <CustomDrawerItem
                                key={index}
                                label={route.label}
                                icon={route.image}
                                route={route.route}
                            />
                        ))}
                    </View>

                    <View style={{ marginBottom: insets.bottom }}>
                        <SectionSeparator />

                        {DrawerBottomRoutes.map((route, index) => (
                            <CustomDrawerItem
                                key={index}
                                label={route.label}
                                icon={route.image}
                                route={route.route}
                            />
                        ))}
                    </View>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

const customDrawerStyle = (colors: any) =>
    StyleSheet.create({
        background: {
            flex: 1,
            backgroundColor: colors.background
        },
        headerBackground: {
            backgroundColor: colors.background,
            flex: 1
        },
        drawerHeader: {
            padding: 20,
            //flex: 1,
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 20
        },
        drawerItems: {
            //flex: 1,
            backgroundColor: colors.background
        },
        userInfos: {
            color: colors.tertiary,
            marginTop: 20
        },
        drawerItem: {
            color: colors.primary,
            backgroundColor: colors.tertiary
        }
    });

export default CustomDrawer;
