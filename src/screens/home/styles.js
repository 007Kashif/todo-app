import { StyleSheet, Platform, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';

import DeviceInfo from 'react-native-device-info';
isIphoneX = DeviceInfo.hasNotch();


export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: Colors.white,
        paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(4),
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.SoraMedium
    },
    buttonListContainer: {
    },
})