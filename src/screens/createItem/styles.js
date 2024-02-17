import { StyleSheet, Platform } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import DeviceInfo from 'react-native-device-info';
isIphoneX = DeviceInfo.hasNotch();

import fonts from '../../constants/Fonts';
import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(4) : hp(3),
        paddingHorizontal: '6%',
    },
    title: {
        fontSize: fonts.H6,
        fontFamily: Fonts.SoraMedium,
        color: Colors.cBlack,
    },
    textContainer: {
        flex: 0.25,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        flex: 0.75,
    },
    butonStyle: {
        marginTop: hp(2.2),
    },
    textFlex: { flex: 0.3, justifyContent: 'flex-end' },
    separatorContainer: {
        width: '100%',
        // padding: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp(2),
        // backgroundColor: 'green'
    },
    separatorLine: {
        width: '40%',
        height: 1.5,
        backgroundColor: Colors.clight,
    },
    separatorTextContainer: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    passwordField: {
        marginTop: hp(2),
    },
    bottomContainer: {
        // flex: 1,
        // justifyContent: 'flex-end',
        paddingTop: hp(2),
        paddingBottom: hp(5),
    },
    buttonText: {
        color: Colors.white,
        fontSize: fonts.P4,
        fontFamily: Fonts.SoraRegular,
        fontWeight: '600',
    },
    separatorText: {
        fontSize: fonts.P4,
        fontFamily: Fonts.SoraRegular,
        color: Colors.cBlack,
    },
    registerText: {
        fontFamily: Fonts.SoraLight,
    },
    input: {
        fontFamily: Fonts.SoraRegular,
        fontSize: fonts.P4,
        fontWeight: '300',
    },
    skipText: {
        color: Colors.darkBeige,
        // fontWeight:"700",
        fontFamily: Fonts.SoraMedium,
    },
    skipContainer: {
        height: hp(5),
        // width: hp(5),
        borderRadius: hp(5),
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: hp(1),
        position: 'absolute',
        top: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(4),
        left: hp(2),
    },
    forgetPasswordContainer: {
        width: '100%',
        paddingHorizontal: wp(2),
        alignItems: 'center',
        marginTop: hp(1.5),
    },
    forgetPassword: {
        fontSize: fonts.P4,
        fontWeight: '300',
        color: Colors.darkBeige,
    },
    bottomButtonsContainer: {
        // flex: 0.5,
        justifyContent: 'center',
        marginTop: hp(1.5),
    },
    inputContainer: {
        flex: 0.2,
        justifyContent: 'center',
    },
    descriptionInput: {
        height: hp(14),
        paddingTop: hp(1),
        textAlignVertical: 'top',
    },
    inputHeader: {
        fontSize: fonts.P5,
        marginTop: hp(2.5),
        marginBottom: hp(0.5),
        color: Colors.darkGrey,
        fontFamily: Fonts.SoraLight,
    },
});
