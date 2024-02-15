import { StyleSheet, Platform } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';
isIphoneX = DeviceInfo.hasNotch();
import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';

export const styles = StyleSheet.create({
    mainContainer: { flex: 1 },
    topViewContainer: {
        flex: 0.5,
        alignItems: 'center',
        paddingVertical: hp(5),
        paddingHorizontal: hp(2),
        backgroundColor: `${Colors.theme}43`,
        paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(7) : hp(6),
        marginBottom: hp(2),
    },
    avatar: {
        height: '100%',
        width: '100%',
        borderRadius: hp(14),
        resizeMode: 'contain',
        borderColor: Colors.primaryBeige,
        borderWidth: 0.5,
    },
    avatarContainer: {
        height: hp(14),
        width: hp(14),
        // borderRadius: hp(16),
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameStyle: {
        fontSize: 14,
        color: Colors.cBlack,
        fontFamily: Fonts.RalewayMedium,
        marginTop: hp(0.5),
    },
    userNameStyle: {
        marginTop: hp(1),
        fontSize: 20,
        color: Colors.cBlack,
        fontFamily: Fonts.RalewayBold,
    },
    userDescription: {
        fontSize: 12,
        color: Colors.cBlack,
        fontFamily: Fonts.RalewayMedium,
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: hp(2),
        marginBottom: hp(6.2),
    },
    menuIcon: {
        height: hp(4.3),
        width: hp(4.3),
        borderRadius: hp(5),
        backgroundColor: Colors.theme,
        zIndex: 999,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(4),
        right: hp(2),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    editIcon: {
        height: hp(2.7),
        width: hp(2.7),
        borderRadius: hp(2.7),
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 10,
    },
    btnStyle: {
        zIndex: 2,
        width: wp(37),
        height: hp(4.4),
        marginTop: hp(-4),
        alignSelf: 'center',
        borderRadius: wp(22),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.theme,
    },
    btnTextStyle: {
        fontSize: 14,
        marginLeft: 5,
        color: Colors.white,
        fontFamily: Fonts.RalewayBold,
    },
});
