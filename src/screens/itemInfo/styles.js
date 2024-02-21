import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import fonts from '../../constants/Fonts';
import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';

import DeviceInfo from 'react-native-device-info';
isIphoneX = DeviceInfo.hasNotch();


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(0),
    },
    mainSection: {
        flex: 1,
        flexDirection: 'row'
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: Colors.borderColor,
        paddingVertical: hp(1),
        borderBottomWidth: 1.5,
        borderTopWidth: 1.5,
        paddingRight: wp(5),
        paddingLeft: wp(3),
    },
    leftSection: {
        width: wp(15),
        borderRightWidth: 2,
        borderColor: Colors.borderColor,
    },
    emptySection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyText: {
        fontWeight: '500',
        fontSize: fonts.P3,
        fontFamily: Fonts.SoraRegular,
    },
    countSection: {
        width: hp(3),
        height: hp(3),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.orange,
        position: 'absolute',
        bottom: hp(1.4),
        left: wp(3),
        zIndex: 999
    },
    basket: {
        width: hp(3),
        height: hp(3),
        resizeMode: 'contain'
    },
    countText: {
        fontSize: fonts.P5,
        color: Colors.white,
        fontFamily: Fonts.SoraMedium,
    },
    rowSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: fonts.P2,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraBold,
    },
    locText: {
        fontSize: fonts.P5,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraLight,
    },
    searchIcon: {
        width: hp(4.5),
        height: hp(4.5),
        borderRadius: hp(10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.orange
    },
    Search: {
        width: hp(2.2),
        height: hp(2.2),
        resizeMode: 'contain',
        tintColor: Colors.white
    },
    listHead: {
        fontSize: fonts.P3,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraMedium,
    },
    listHead1: {
        fontSize: fonts.P3,
        color: Colors.cGray,
        fontFamily: Fonts.SoraRegular,
    },
    listSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(2),
        borderColor: Colors.borderColor,
        borderBottomWidth: 1,
        marginTop: hp(1.5),
        borderTopWidth: 2,
    },
    headImg: {
        width: hp(5),
        height: hp(5),
        borderRadius: 5,
        marginLeft: wp(2),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.borderColor,
        borderWidth: 1,
    },
    headerIcon: {
        width: hp(4),
        height: hp(4),
        resizeMode: 'contain'
    }
})