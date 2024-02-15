import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DeviceInfo from 'react-native-device-info';
isIphoneX = DeviceInfo.hasNotch();
import Colors from '../../../constants/ColorConstants';
import Fonts from '../../../constants/FontsContstants';
import fonts from '../../../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    backgroundColor: Colors.white,
    paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(4),
  },
  skipText: {
    color: Colors.darkBeige,
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
    right: hp(2),
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: hp(3),
    fontWeight: '600',
    fontSize: fonts.H6,
    color: Colors.cBlack,
    fontFamily: Fonts.SoraMedium,
  },
  logInTextContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: hp(2),
    alignSelf: 'center',
  },
  logInText: {
    color: Colors.cBlack,
    fontFamily: Fonts.SoraBold,
  },
  textContainer: {
    flex: 0.12,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 0.87,

  },
  butonStyle: {
    marginTop: hp(2.2),
  },
  countryCodeButtonStyle: {
    marginRight: '5%',
  },
  textFlex: { flex: 0.3, justifyContent: 'flex-end' },
  separatorContainer: {
    width: '100%',
    padding: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
  },
  separatorLine: {
    width: '40%',
    height: 1.5,
    backgroundColor: Colors.clight,
  },
  separatorTextContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordField: {
    marginTop: hp(2),
  },
  bottomContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3.5),
    // position: 'absolute',
    // bottom: 20,
    // alignSelf: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: fonts.P4,
    fontFamily: Fonts.SoraMedium,
  },
  separatorText: {
    fontSize: fonts.P4,
    fontFamily: Fonts.SoraRegular,
    color: Colors.cBlack,
  },
  registerText: {
    fontFamily: Fonts.SoraLight,
    alignItems: 'center',
  },
  input: {
    fontFamily: Fonts.SoraRegular,
    fontSize: fonts.P4,
    fontWeight: '300',
  },
  termsAndConditionsText: {
    marginLeft: 10,
    flexDirection: 'row',
    width: '87%',
    flexWrap: 'wrap',
  },
  dateBtn: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.clight,
    height: hp(6),
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
});
