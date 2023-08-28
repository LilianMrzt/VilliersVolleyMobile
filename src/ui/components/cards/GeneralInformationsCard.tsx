import CustomButton from '@components/common/CustomButton';
import CustomHtml from '@components/common/CustomHtml';
import ImageIcon from '@components/common/ImageIcon';
import Row from '@components/common/Row';
import ImageConstants from '@constants/ImageConstants';
import { GeneralInformationsInterfaces } from '@interfaces/GeneralInformationsInterfaces';
import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import Size from '@utils/Size';
import React, { FC, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

const GeneralInformationsCard: FC<GeneralInformationsInterfaces> = ({ title, content }) => {
    const { colors } = useTheme();
    const styles = generalInformationsCardStyle(colors);

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setIsVisible(true);
                }}
                style={styles.touchable}
            >
                <Row>
                    <ImageIcon
                        source={ImageConstants.information}
                        size={60}
                        color={colors.tertiary}
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
                    textColor={'tertiary'}
                    isScreenFullWidth={false}
                    fontSize={14}
                    style={{ paddingRight: 0, paddingBottom: 0 }}
                />
            </TouchableOpacity>

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
                deviceHeight={Size.getScreenHeight() + StatusBar.currentHeight}
            >
                <View style={styles.modalView}>
                    <ScrollView
                        contentContainerStyle={styles.modalContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={styles.modalTitleText}>{title}</Text>
                        <CustomHtml html={content} />
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
            paddingTop: 5,
            paddingBottom: 20
        },
        touchable: {
            backgroundColor: colors.surface,
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
            color: colors.onSurface,
            fontWeight: 'bold',
            fontSize: 20,
            flex: 1
        },
        modalTitleText: {
            color: colors.onSurface,
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 20,
            marginTop: 20
        },
        modalView: {
            width: Size.getScreenWidth() - 40,
            maxHeight: Size.getScreenHeight() - 140,
            backgroundColor: colors.surface,
            borderRadius: 10,
            alignItems: 'center'
        },
        modalText: {
            color: colors.onSurface
        },
        modalContent: {
            width: Size.getScreenWidth() - 40,
            paddingLeft: 30,
            paddingRight: 30,
            alignItems: 'center'
        },
        closeButton: {
            position: 'absolute',
            bottom: 5,
            alignSelf: 'flex-end'
        }
    });

export default GeneralInformationsCard;
