import ContactCard from '@components/cards/ContactCard';
import CustomHeader from '@components/cards/CustomHeader';
import { contactFixtures } from '@constants/fixtures/ContactFixtures';
import I18n from '@utils/I18n';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ContactScreen = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader label={I18n.t('ContactScreen')} />

            <ScrollView contentContainerStyle={{ paddingBottom: 20 + insets.bottom }}>
                {contactFixtures.map((contact, index) => (
                    <ContactCard
                        key={index}
                        contact={contact}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default ContactScreen;
