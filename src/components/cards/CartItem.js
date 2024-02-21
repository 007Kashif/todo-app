import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';

import { Button2 } from '../button2/Button2';
import { images } from '../../assets/images/images';

export const CartItem = ({ item }) => {
    return (
        <View style={styles?.card}>
            <View style={styles.tagSection}>
                <Text style={styles.tagTxt}>40% OFF</Text>
            </View>
            <Image
                style={styles.itemIcon}
                source={images?.[item?.image]}
                defaultSource={images.placeholder}
            />
            <Text style={styles.subText}>Shan</Text>
            <Text numberOfLines={1} style={styles.title}>{item?.name || "N/A"}</Text>
            <View style={styles.btnSection}>
                <View>
                    <Text style={styles.subText}>100 gm</Text>
                    <Text style={styles.title}>$2.99</Text>
                </View>
                <Button2
                    ButtonName={"ADD"}
                    IconButton={false}
                    ButtonType="Outlined"
                    style={styles.button}
                    TextColor={Colors.cGreen}
                    OutlineColor={Colors.cGreen}
                    TextStyle={styles.buttonText}
                    ButtonBackground={Colors.white}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: wp(42.5),
        paddingHorizontal: wp(2),
        justifyContent: 'center',
        borderColor: Colors.borderColor,
        borderBottomWidth: 1,
        borderRightWidth: 2,
        borderTopWidth: 1,
    },
    tagSection: {
        top: 0,
        left: 0,
        padding: 3,
        zIndex: 999,
        position: 'absolute',
        borderBottomRightRadius: 20,
        backgroundColor: Colors.orange,
    },
    container: {
        height: hp(15),
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: Colors.lightBeige,
    },
    title: {
        marginTop: hp(0.3),
        fontSize: fonts.P3,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraBold,
    },
    itemIcon: {
        width: wp(28),
        height: hp(15),
        borderRadius: 5,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    subText: {
        fontSize: fonts.P4,
        color: Colors.cGray,
        fontFamily: Fonts.SoraRegular,
    },
    btnSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp(1.5),
    },
    button: {
        width: wp(18),
        height: hp(3.8),
        borderRadius: hp(4),
    },
    buttonText: {
        fontWeight: '700',
        fontSize: fonts.P5,
        fontFamily: Fonts.SoraRegular
    },
    tagTxt: {
        maxWidth: wp(10),
        fontSize: fonts.P6,
        textAlign: 'center',
        color: Colors.white,
        fontFamily: Fonts.SoraLight,
    }
})