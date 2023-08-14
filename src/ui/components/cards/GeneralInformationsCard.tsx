import CustomButton from '@components/common/CustomButton';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
import { GeneralInformationsCardInterface } from '@interfaces/GeneralInformationsInterfaces';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import Size from '@utils/Size';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GeneralInformationsCard: FC<GeneralInformationsCardInterface> = ({ title, content }) => {
    const { colors } = useTheme();
    const styles = generalInformationsCardStyle(colors);

    return (
        <View style={styles.container}>
            <View style={styles.touchable}>
                <Row>
                    <ImageIcon
                        source={ImageConstants.information}
                        size={60}
                        color={colors.onPrimary}
                        style={{ marginRight: 15 }}
                    />
                    <Text style={styles.titleText}>{title}</Text>
                </Row>

                <CustomButton
                    label={I18n.t('KnowMore')}
                    onPress={() => {}}
                    backgroundColor={'transparent'}
                    isScreenFullWidth={false}
                    fontSize={14}
                    style={{ paddingRight: 0, paddingBottom: 0 }}
                />
            </View>
        </View>
    );
};

const generalInformationsCardStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: Size.getScreenWidth(),
            padding: 20,
            paddingTop: 10,
            paddingBottom: 10
        },
        touchable: {
            backgroundColor: colors.primary,
            padding: 10,
            borderRadius: 10,
            alignItems: 'flex-end',
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowOpacity: 0.16,
            shadowRadius: 1.51,
            elevation: 1
        },
        titleText: {
            color: colors.onPrimary,
            fontWeight: 'bold',
            fontSize: 20,
            flex: 1
        }
    });

export default GeneralInformationsCard;
