import ImageButton from '@components/common/ImageButton';
import ImageConstants from '@constants/ImageConstants';
import { useNavigation, useTheme } from '@react-navigation/native';
import React from 'react';

const HeaderLeft = ({ onBackPress = false }) => {
    const { colors } = useTheme();
    const navigation = useNavigation<any>();

    const onPress = () => {
        if (onBackPress) {
            navigation.goBack();
        } else {
            navigation.toggleDrawer();
        }
    };

    const icon = onBackPress ? ImageConstants.backArrow : ImageConstants.menu;

    return (
        <ImageButton
            onPress={() => onPress()}
            size={30}
            color={colors.onBackground}
            source={icon}
            style={{ marginLeft: 10, marginRight: 10 }}
        />
    );
};

export default HeaderLeft;
