import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, FlatList, TouchableOpacity } from 'react-native';

import Contacts from 'react-native-contacts';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import { styles } from './styles';
import { images } from '../../assets/images/images';
import Fonts from '../../constants/FontsContstants';

export const InviteContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [permissionStatus, setPermissionStatus] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const status = await Contacts.checkPermission();
            setPermissionStatus(status);

            if (status === 'authorized') {
                const contactsData = await Contacts.getAll();
                setContacts(contactsData);
            } else {
                requestContactsPermission()
            }
        } catch (error) {
            console.log('Error fetching contacts: ', error);
        }
    };

    const requestContactsPermission = async () => {
        try {
            const status = await Contacts.requestPermission();
            setPermissionStatus(status);

            if (status === 'authorized') {
                const contactsData = await Contacts.getAll();
                setContacts(contactsData);
            }
        } catch (error) {
            console.log('Error requesting contacts permission: ', error);
        }
    };

    const renderContactItem = ({ item }) => (
        <View style={styles.contactCard}>
            <View style={styles.rowSection}>
                <Image style={styles.userImg} source={images.placeholder} />
                <View>
                    <Text>{item.displayName || "Name not found"}</Text>
                    <Text>{item.phoneNumbers?.[0]?.number}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => openMessageApp(item.phoneNumbers?.[0]?.number)}>
                <Text
                    style={{ color: "#1E90FF", fontFamily: Fonts.SoraMedium }}>
                    Invite</Text>
            </TouchableOpacity>
        </View>
    );

    const generateLink = async () => {
        try {
            const link = await dynamicLinks().buildShortLink({
                link: `https://voicelifeapp123.page.link/dmCn?refCode=QAZ123`,
                domainUriPrefix: 'https://voicelifeapp123.page.link',
                android: {
                    packageName: 'com.voicelifeapp',
                },
            }, dynamicLinks.ShortLinkType.DEFAULT)
            console.log('link:', link)
            return link
        } catch (error) {
            console.log('Generating Link Error:', error)
        }
    }

    const openMessageApp = async (number) => {
        const getLink = await generateLink()

        const phoneNumber = number;
        const message = getLink;
        const encodedMessage = encodeURIComponent(message);

        let messageAppLink;

        // Construct the message app link based on the platform
        if (Platform.OS === 'android') {
            messageAppLink = `sms:${phoneNumber}?body=${encodedMessage}`;
        } else if (Platform.OS === 'ios') {
            messageAppLink = `sms:${phoneNumber}&body=${encodedMessage}`;
        } else {
            console.error('Unsupported platform.');
            return;
        }

        // Open the messaging app
        Linking.canOpenURL(messageAppLink).then(supported => {
            if (supported) {
                return Linking.openURL(messageAppLink);
            } else {
                console.error("Don't know how to open messaging app on this device.");
            }
        }).catch(err => console.error('An error occurred', err));
    };

    return (
        <View style={styles.container}>
            {permissionStatus === 'authorized' && (
                <FlatList
                    data={contacts}
                    renderItem={renderContactItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
        </View>
    );
};

