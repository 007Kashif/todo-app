import React from 'react';
import {
  View,
  Text,
  Pressable,
} from 'react-native';
//Styles
import styles from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';
//Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
//App Colors
import Colors from '../../../constants/ColorConstants';
import Fonts from '../../../constants/FontsContstants';
import fonts from '../../../constants/Fonts';

const AnimatableTouchableOpacity =
  Animatable.createAnimatableComponent(Pressable);

export const ForwardCard = (props) => {
  const { onPress, style, title, hideIcon, index, counter } = props;
  const animation = {
    from: {
      opacity: 0,
      translateX: 60,
    },
    to: {
      opacity: 1,
      translateX: 0,
    },
  };
  return (
    <AnimatableTouchableOpacity
      useNativeDriver
      animation={animation}
      delay={1 + (index + 1) * 1}
      onPress={onPress}
      style={[
        styles.container,
        style,
        { backgroundColor: hideIcon ? Colors.clight : Colors.white },
      ]}
    >
      <Text
        style={{
          fontSize: hideIcon ? fonts.P5 : fonts.P3,
          fontFamily: Fonts.SoraLight,
          color: hideIcon ? Colors.darkGrey : Colors.cBlack,
        }}
      >
        {title}
      </Text>
      <View style={styles.counterContainer}>
        {counter > 0 && (
          <View style={styles.counterStyle}>
            <Text style={styles.counterTextStyle}>{counter}</Text>
          </View>
        )}
        {!hideIcon && (
          <AntDesign name="right" size={hp(2.2)} color={Colors.darkGrey} />
        )}
      </View>
    </AnimatableTouchableOpacity>
  );
};
