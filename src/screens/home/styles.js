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
        paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(0.5),
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: hp(1),
        paddingRight: wp(5),
        paddingLeft: wp(3),
    },
    input: {
        width: wp(75),
        padding: wp(3),
        height: hp(5.5),
        fontSize: fonts.P4,
        fontFamily: Fonts.SoraRegular,
    },
    buttonText: {
        fontSize: fonts.P4,
        fontWeight: '500',
        fontFamily: Fonts.SoraRegular,
    },
    button: {
        width: wp(12),
        height: hp(5),
        borderRadius: 5,
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
    toastText: {
        fontSize: fonts.P4,
        textAlign: 'center',
        color: Colors.white,
        fontFamily: Fonts.SoraRegular,
        backgroundColor: Colors.cGreen,
        paddingVertical: hp(0.5)
    },
    searchSection: {
        marginTop: hp(1.5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: Colors.borderColor,
        marginHorizontal: wp(3),
        borderRadius: hp(10),
        borderWidth: 1,
    },
    searchIcon: {
        width: hp(4.5),
        height: hp(4.5),
        marginRight: wp(2),
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
        fontSize: fonts.P2,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraMedium,
        paddingHorizontal: wp(3),
        marginTop: hp(1.5)
    }
})