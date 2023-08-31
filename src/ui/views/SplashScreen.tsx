import RouteConstants from '@constants/routes/RouteConstants';
import { useTheme } from '@react-navigation/native';
import Size from '@utils/Size';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Images from '@assets/images/ImageConstants';

const SplashScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = splashScreenStyle(colors);

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: RouteConstants.DRAWER_NAVIGATION }]
            });
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={Images.splashScreenLogo}
                style={styles.image}
                resizeMode={'contain'}
            />
        </View>
    );
};

const splashScreenStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.background
        },
        image: {
            width: Size.getScreenWidth() * 0.8,
            height: undefined,
            aspectRatio: 1
        }
    });

export default SplashScreen;
