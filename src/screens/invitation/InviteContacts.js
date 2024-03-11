import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Contacts from 'react-native-contacts';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
            <TouchableOpacity onPress={() => alert(item.phoneNumbers?.[0]?.number)}>
                <Text
                    style={{ color: "#1E90FF", fontFamily: Fonts.SoraMedium }}>
                    Invite</Text>
            </TouchableOpacity>
        </View>
    );

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

