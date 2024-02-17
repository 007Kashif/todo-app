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
        paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(4),
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(3),
        paddingVertical: hp(1)
    },
    input: {
        padding: 10,
        width: wp(80),
        height: hp(5),
        borderRadius: 5,
        backgroundColor: Colors.lightBeige
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
    }

})