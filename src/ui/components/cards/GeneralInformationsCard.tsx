import CustomButton from '@components/common/CustomButton';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
import { GeneralInformationsCardInterface } from '@interfaces/GeneralInformationsInterfaces';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import Size from '@utils/Size';
import formatTextWithBold from '@utils/TextUtils';
import React, { FC, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const GeneralInformationsCard: FC<GeneralInformationsCardInterface> = ({ title, content }) => {
    const { colors } = useTheme();
    const styles = generalInformationsCardStyle(colors);

    const [isVisible, setIsVisible] = useState(false);

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
                    onPress={() => {
                        setIsVisible(true);
                    }}
                    backgroundColor={'transparent'}
                    isScreenFullWidth={false}
                    fontSize={14}
                    style={{ paddingRight: 0, paddingBottom: 0 }}
                />
            </View>

            <Modal
                coverScreen={true}
                isVisible={isVisible}
                onBackdropPress={() => setIsVisible(false)}
                hideModalContentWhileAnimating={true}
                backdropTransitionOutTiming={0}
                statusBarTranslucent={true}
                useNativeDriverForBackdrop={true}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
            >
                <View style={styles.modalView}>
                    <ScrollView contentContainerStyle={styles.modalContent}>
                        <Text style={styles.modalTitleText}>{title}</Text>
                        <Text style={styles.modalText}>{formatTextWithBold(content, colors.onBackground)}</Text>
                    </ScrollView>
                    <CustomButton
                        label={'Fermer'}
                        onPress={() => setIsVisible(false)}
                        style={styles.closeButton}
                        isScreenFullWidth={false}
                        hasShadows={false}
                    />
                </View>
            </Modal>
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
        },
        modalTitleText: {
            color: colors.onBackground,
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 10
        },
        modalView: {
            width: Size.getScreenWidth() - 40,
            maxHeight: Size.getScreenHeight() - 140,
            backgroundColor: colors.background,
            borderRadius: 10,
            alignItems: 'center'
        },
        modalText: {
            color: colors.onBackground
        },
        modalContent: {
            padding: 20,
            paddingBottom: 80
        },
        closeButton: {
            position: 'absolute',
            bottom: 5,
            alignSelf: 'flex-end'
        }
    });

export default GeneralInformationsCard;
