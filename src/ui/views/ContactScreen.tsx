import ContactCard from '@components/cards/ContactCard';
import CustomHeader from '@components/cards/CustomHeader';
import I18n from '@utils/I18n';
import React, {useEffect, useState} from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Api from "@api/Api";

const ContactScreen = () => {
    const insets = useSafeAreaInsets();
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        Api.getContacts('?populate=*').then(response => {
            setContacts(response)
        })
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <CustomHeader label={I18n.t('ContactScreen')} />

            <ScrollView contentContainerStyle={{ paddingBottom: 20 + insets.bottom }}>
                {contacts?.map((contact, index) => (
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
