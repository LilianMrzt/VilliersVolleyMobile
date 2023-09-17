import { useTheme } from '@react-navigation/native';
import I18n from '@utils/I18n';
import Size from '@utils/Size';
import React from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {getMediaUrl} from "@utils/MediaUtils";

const ContactCard = ({ contact }) => {
    const { colors } = useTheme();
    const styles = contactCardStyle(colors);

    return (
        <View style={styles.container}>
            <View style={styles.contactCard}>
                <Image
                    height={200}
                    source={{ uri: getMediaUrl(contact?.attributes?.image?.data?.attributes?.url) }}
                    style={styles.image}
                />
                <View style={styles.infoCard}>
                    <Text style={styles.functionText}>{contact?.attributes.function}</Text>
                    <Text style={styles.text}>
                        {contact?.attributes.firstName} {contact?.attributes.lastName}
                    </Text>
                    <Text style={{ marginTop: 10, color: colors.onBorderOutline }}>
                        {I18n.t('Contact')}:
                    </Text>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(`mailto:${contact.attributes.email}`)}
                    >
                        <Text style={[styles.text]}>{contact?.attributes.email}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(`tel:${contact?.attributes.phone}`)}
                    >
                        <Text style={styles.text}>{contact?.attributes.phone}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const contactCardStyle = (colors: any) =>
    StyleSheet.create({
        container: {
            width: Size.getScreenWidth(),
            padding: 20,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 20
        },
        contactCard: {
            backgroundColor: colors.surface,
            borderRadius: 10,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 1
            },
            shadowOpacity: 0.16,
            shadowRadius: 1.51,
            elevation: 1
        },
        infoCard: {
            padding: 20,
            alignItems: 'center'
        },
        functionText: {
            fontSize: 20,
            color: colors.onSurface,
            fontWeight: 'bold'
        },
        text: {
            color: colors.onSurface,
            fontSize: 16,
            lineHeight: 30
        },
        image: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10
        }
    });

export default ContactCard;
