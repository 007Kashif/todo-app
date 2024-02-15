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
            <Text style={styles.title}>ListCard</Text>
            <View style={styles.rowSection}>
                <TouchableOpacity onPress={onEdit}>
                    <FontAwesome name='edit' size={hp(3.5)} color={Colors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onRemove}>
                    <MaterialCommunityIcons name='delete-outline' size={hp(4)} color={Colors.white} />
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
        backgroundColor: Colors.theme,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: fonts.P3,
        color: Colors.white,
        fontFamily: Fonts.SoraRegular,
        maxWidth: wp(70)
    },
    rowSection: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})