import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../../constants/ColorConstants';
import fonts from '../../../constants/Fonts';
import Fonts from '../../../constants/FontsContstants';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: hp(7),
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderBottomWidth: 2,
    borderBottomColor: Colors.clight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    height: hp(7),
    width: hp(7),
    borderRadius: hp(3.5),
  },
  userName: {
    fontSize: fonts.P1,
    fontFamily: Fonts.SoraBold,
  },
  email: {
    color: Colors.primaryBeige,
    fontSize: fonts.P4,
    fontFamily: Fonts.SoraRegular,
  },
  textContainer: {
    marginLeft: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterStyle: {
    backgroundColor: Colors.primaryBeige,
    height: hp(3),
    // width: hp(3),
    paddingHorizontal: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(3),
    marginRight: 5,
  },
  counterTextStyle: {
    fontSize: fonts.P5,
    color: Colors.white,
    fontFamily: Fonts.SoraRegular,
  },
});
