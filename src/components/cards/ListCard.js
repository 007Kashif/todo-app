import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ListCard = ({ item, onEdit, onRemove }) => {
    return (
        <View style={styles?.card}>
            <View>
                <Text style={styles.title}>{item?.title || "N/A"}</Text>
                <Text style={styles.descTxt}>{item?.description || "N/A"}</Text>
            </View>
            <View style={styles.rowSection}>
                <TouchableOpacity onPress={onEdit}>
                    <FontAwesome name='edit' size={hp(3.5)} color={Colors.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onRemove}>
                    <MaterialCommunityIcons name='delete-outline' size={hp(4)} color={Colors.red} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        marginBottom: hp(1),
        paddingVertical: hp(1),
        paddingHorizontal: wp(3),
        backgroundColor: Colors.lightBeige,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        maxWidth: wp(70),
        fontSize: fonts.P3,
        color: Colors.black,
        fontFamily: Fonts.SoraMedium,
    },
    rowSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    descTxt: {
        maxWidth: wp(70),
        marginTop: hp(0.3),
        fontSize: fonts.P4,
        color: Colors.black,
        fontFamily: Fonts.SoraLight,
    }
})