import { StyleSheet, Platform } from 'react-native';
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
        marginTop: hp(1),
        paddingHorizontal: wp(3),
        backgroundColor: Colors.white,
        paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(0.5),
    },
    contactCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: hp(1),
        justifyContent: 'space-between'
    },
    rowSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImg: {
        width: hp(6),
        height: hp(6),
        borderRadius: hp(5),
        marginRight: wp(3)
    }
})