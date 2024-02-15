import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../../constants/ColorConstants';
import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';

export const styles = StyleSheet.create({
  mainContainer: {
    height: hp(7),
    width: wp(100),
    flexDirection: 'row',
    paddingHorizontal: hp(1.5),
    borderBottomWidth: 2,
    borderBottomColor: Colors.clight,
  },
  leftContainer: {
    flex: 0.9,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  addContainer: {
    height: hp(4.4),
    width: hp(4.2),
    backgroundColor: Colors.primaryBeige,
    borderRadius: hp(0.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2.5),
  },
  iconStyle: {
    height: hp(3),
    width: hp(3),
    resizeMode: 'contain',
  },
  btnStyle: {
    // marginHorizontal: hp(0.5),
  },

  rightContainer: {
    flex: 0.25,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  counterStyle: {
    position: 'absolute',
    top: -hp(1.7),
    right: -hp(1.5),
    // alignSelf: 'flex-end',
    backgroundColor: Colors.primaryBeige,
    height: hp(3),
    width: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(3),
    zIndex: 11,
  },
  counterTextStyle: {
    fontSize: fonts.P5,
    color: Colors.cBlack,
    // fontFamily: Fonts.SoraRegular,
  },
  dotStyle: {
    height: hp(1.5),
    width: hp(1.5),
    position: 'absolute',
    right: '-20%',
    top: '-10%',
  },
});
