import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';
import { images } from '../../assets/images/images';

export const ListCard = ({ item, onPress }) => {
    return (
        <View style={styles?.card}>
            <TouchableOpacity style={styles.container}>
                <Image
                    style={styles.itemIcon}
                    source={images.Shopping_Bag}
                    defaultSource={images.placeholder}
                />
            </TouchableOpacity>
            <Text numberOfLines={2} style={styles.title}>{item?.name || "N/A"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: wp(30),
        marginRight: wp(2.5),
        alignItems: 'center',
        marginBottom: hp(1),
        paddingHorizontal: wp(3),
        justifyContent: 'center',

    },
    container: {
        height: hp(15),
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: Colors.lightBeige,
    },
    title: {
        marginTop: hp(1),
        fontSize: fonts.P5,
        textAlign: 'center',
        color: Colors.cBlack,
        fontFamily: Fonts.SoraRegular,
    },
    itemIcon: {
        width: wp(28),
        height: hp(10),
        borderRadius: 5,
        resizeMode: 'contain'
    }
})