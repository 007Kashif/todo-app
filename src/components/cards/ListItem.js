import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign';

import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';
import { images } from '../../assets/images/images';

export const ListItem = ({ item, check, onPress }) => {
    return (
        <View style={styles?.card}>
            {check ? <View style={styles.absIcon}>
                <AntDesign name='caretright' color={Colors.orange} size={hp(1.5)} />
            </View> : null}
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image
                    style={styles.itemIcon}
                    source={images?.[item?.image]}
                    defaultSource={images.placeholder}
                />
            </TouchableOpacity>
            <Text
                numberOfLines={2}
                style={[styles.title, { color: check ? Colors.orange : Colors.cBlack }]}>
                {item?.name || "N/A"}
            </Text>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        width: wp(15),
        alignItems: 'center',
        marginBottom: hp(1),
        justifyContent: 'center',

    },
    absIcon: {
        left: -3,
        top: hp(2),
        zIndex: 999,
        position: 'absolute',
    },
    container: {
        height: hp(5.5),
        width: wp(8.5),
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: Colors.clight,
    },
    title: {
        marginTop: hp(0.5),
        fontSize: fonts.P6,
        textAlign: 'center',
        color: Colors.cBlack,
        fontFamily: Fonts.SoraLight,
        paddingHorizontal: wp(1)
    },
    itemIcon: {
        width: wp(7),
        height: hp(4),
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})