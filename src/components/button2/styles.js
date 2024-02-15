import { StyleSheet, Dimension, Dimensions } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Colors from '../../constants/ColorConstants';
import fonts from '../../constants/Fonts';
const { height, width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  //Button Styling
  btnContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTextContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryBeige,
    borderRadius: width / 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: fonts.P3,
    fontWeight: '500',
  },
  imgButtonTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primaryBeige,
    borderRadius: width / 10,
    paddingHorizontal: width / 10,
  },
  imgContainer: {
    flex: 2,
  },
  imgBtnStyle: { height: width / 14, width: width / 14 },
});
