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
    height: hp(10),
    paddingHorizontal: hp(2),
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderBottomWidth: 2,
    borderBottomColor: Colors.clight,
    alignItems: 'center',
  },
  leftContainer: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  rightContainer: { marginRight: -wp(3) },
  profileImage: {
    height: hp(6),
    width: hp(6),
    borderRadius: hp(6),
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
  btnTextStyle: {
    fontSize: fonts.P4,
    fontFamily: Fonts.SoraBold,
  },
  btnStyle: {
    margin: hp(1),
    padding: hp(1),
    paddingHorizontal: hp(1.5),
  },
  userNameTextShimmer: {
    width: wp(40),
    height: 10,
    borderRadius: 7,
    backgroundColor: Colors.clight,
  },
  memberStyle:{
    height: hp(2),
    width: hp(2),
    borderRadius: hp(2),
    marginLeft: wp(1),
  },
  emailTextShimmer: {
    width: wp(30),
    height: 10,
    borderRadius: 7,
    backgroundColor: Colors.clight,
  },
  avatarPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: hp(7),
    width: hp(7),
    borderRadius: hp(3.5),
    backgroundColor: Colors.primaryBeige,
  },
  avatarPlaceholderText: {
    fontSize: fonts.H3,
    color: Colors.white,
    fontWeight: 'bold',
  },
});
