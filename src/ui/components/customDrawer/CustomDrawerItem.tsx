import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import { useNavigation, useTheme } from '@react-navigation/native';
import { changeRoute } from '@services/redux/actions/RouteActions';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect, useDispatch } from 'react-redux';

const CustomDrawerItem = ({ label, icon, route, currentRoute }) => {
    const { colors } = useTheme();
    const styles = customDrawerItemStyle(colors);

    const navigation = useNavigation<any>();

    const dispatch = useDispatch();

    const isCurrentRoute = route === currentRoute;

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: isCurrentRoute ? `${colors.primary}55` : colors.background }]}
            onPress={() => {
                if (!isCurrentRoute) {
                    dispatch(changeRoute(route));
                    navigation.reset({
                        index: 0,
                        routes: [{ name: route as never }]
                    });
                }
            }}
        >
            <Row>
                <ImageIcon
                    source={icon}
                    size={25}
                    color={colors.tertiary}
                />
                <Text style={styles.text}>{label}</Text>
            </Row>
        </TouchableOpacity>
    );
};

const customDrawerItemStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            marginLeft: 10,
            marginRight: 10,
            padding: 10,
            borderRadius: 5,
            justifyContent: 'center',
            marginBottom: 5
        },
        text: {
            color: colors.tertiary,
            fontSize: 14,
            fontWeight: '500',
            marginLeft: 20
        }
    });

const mapStateToProps = (state) => {
    return {
        currentRoute: state.route.route
    };
};

export default connect(mapStateToProps)(CustomDrawerItem);
