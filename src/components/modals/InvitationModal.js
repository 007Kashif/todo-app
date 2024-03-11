import React from 'react'
import { StyleSheet, TouchableOpacity, Modal, Text, View } from 'react-native'
import Share from 'react-native-share';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'


import Colors from '../../constants/ColorConstants'
import Fonts from '../../constants/FontsContstants'

import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import fonts from '../../constants/Fonts'

export const InvitationModal = (props) => {
    const { navigation, modalVisible, setModalVisible } = props;

    const onShareLink = async () => {
        const referralCode = 'REF123';
        const link = ' https://play.google.com/store/apps/details?id=com.bazaaro.bazaaroapp';
        const message = `Please download app from this link: ${link}.\n Use referral code ${referralCode} for bonus!`;
        try {
            const options = {
                title: 'Share Link and Code',
                message: message,
            };
            await Share.open(options);
        } catch (error) {
            console.log('Error sharing link: ', error);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Share and Earn</Text>
                    <TouchableOpacity style={styles.shareBtn}
                        onPress={() => {
                            setModalVisible(false);
                            setTimeout(() => {
                                navigation.navigate("InviteContacts");
                            }, 350)
                        }}>
                        <AntDesign name='contacts' size={hp(3)} />
                        <Text style={styles.shareTxt}>Invite from contact list</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareBtn}
                        onPress={() => {
                            setModalVisible(false);
                            setTimeout(() => {
                                onShareLink();
                            }, 350)
                        }}>
                        <Ionicons name='share-social-outline' size={hp(3)} />
                        <Text style={styles.shareTxt}>Share on Social</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: hp(2),
        paddingHorizontal: wp(28),
        borderColor: Colors.borderColor,
    },
    textStyle: {
        textAlign: 'center',
        color: Colors.cBlack,
        fontFamily: Fonts.SoraMedium
    },
    modalText: {
        fontSize: fonts.H7,
        marginBottom: hp(2),
        textAlign: 'center',
        fontFamily: Fonts.SoraBold
    },
    shareBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: hp(1),
    },
    shareTxt: {
        paddingLeft: wp(2),
        color: Colors.cBlack,
        fontFamily: Fonts.SoraMedium
    }
})