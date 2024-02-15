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
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: isIphoneX && Platform.OS == 'ios' ? hp(5) : hp(4),
  },
  BottomSheetChildContainer:{
    flex:1,
    paddingHorizontal:wp(4),
    paddingTop:hp(3),
  },
  time:{
    fontSize:fonts.P5,
    color:Colors.darkGrey,
    fontFamily:Fonts.SoraLight
  },
  childTitle:{
    fontSize:fonts.P3,
    fontFamily:Fonts.SoraMedium,
    marginTop:hp(1)
  },
  childDescription:{
    marginTop:hp(1),
    fontSize:fonts.P4,
    fontFamily:Fonts.SoraLight
  }
});
