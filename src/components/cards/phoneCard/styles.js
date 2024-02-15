import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/ColorConstants';
import fonts from '../../../constants/Fonts';
import Fonts from '../../../constants/FontsContstants';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        marginBottom: hp(1.5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderRadius: 5,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    image: {
        height: hp(20),
        width: wp(40),
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    title: {
        fontSize: 20,
        color: Colors.cBlack,
        marginBottom: hp(1),
        fontFamily: Fonts.SoraMedium
    },
    infoText: {
        fontSize: 16,
        marginBottom: hp(1),
        color: Colors.buttonText,
        fontFamily: Fonts.SoraMedium
    },
    dayText: {
        fontSize: 14,
        color: Colors.cGray
    },
    buttonText: {
        fontSize: fonts.P4,
        fontWeight: '500',
        fontFamily: Fonts.SoraRegular,
    },
});
