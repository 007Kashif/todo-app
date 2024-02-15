import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Colors from '../../constants/ColorConstants';
import { styles } from './styles';
const { height, width } = Dimensions.get('window');
import { images } from '../../assets/images/images';

export const Button2 = (props) => {
  let {
    IconButton, //; Boolean : if true icon will shown
    ButtonBackground, //; styling property will define color of button background
    TextColor, //; styling property will define color of text on button
    TextStyle, //; styling property of text on button
    ButtonName, //; define what will be the name of button
    ButtonIcon, //; define what will be the icon of button
    ButtonType, //; type of button; outlined || plain ; by default it is plain
    OutlineColor, //; styling property will define color of button outline
    onPress,
    borderWidth, //; border
    ButtonIconStyle,
    testID,
    style,
    disabled = false,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.btnContainer}
      testID={testID}
    >
      {IconButton ? (
        <View
          style={[
            styles.imgButtonTextContainer,
            style,
            {
              borderWidth: borderWidth ? borderWidth : 1,
              borderColor:
                ButtonType == 'Outlined' ? OutlineColor : 'transparent',
              backgroundColor:
                ButtonType == 'Outlined'
                  ? ButtonBackground
                  : Colors.primaryBeige,
            },
          ]}
        >
          <View style={styles.imgContainer}>
            <Image
              source={ButtonIcon != null ? ButtonIcon : images.Dot}
              style={[styles.imgBtnStyle, ButtonIconStyle]}
              resizeMode="contain"
            />
          </View>
          <Text
            style={[
              styles.buttonText,
              TextStyle,
              { flex: 7, color: TextColor ? TextColor : Colors.white },
            ]}
          >
            {ButtonName}
          </Text>
        </View>
      ) : (
        <View
          style={[
            styles.buttonTextContainer,
            style,
            {
              borderWidth: borderWidth ? borderWidth : 1,
              borderColor:
                ButtonType == 'Outlined' ? OutlineColor : 'transparent',
              backgroundColor:
                ButtonType == 'Outlined'
                  ? ButtonBackground
                  : Colors.primaryBeige,
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              TextStyle,
              { color: TextColor ? TextColor : Colors.white },
            ]}
          >
            {ButtonName}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
