import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
//Styles
import styles from './styles';
import FastImage from 'react-native-fast-image';
import { Button2 } from '../../index';
import Colors from '../../../constants/ColorConstants';

import { images } from '../../../assets/images/images';

export const ProfileCard = (props) => {
  const {
    onPress,
    style,
    name = 'Username',
    nameStyle,
    userName,
    isLeTribeMember,
    userNameStyle,
    profileImage,
    profileImageStyle,
    showButton,
    btnTitle,
    btnBackgroundColor,
    btnBorderColor,
    btnTextColor,
    onPressBtn,
    disabled,
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.leftContainer}>
        {profileImage ? (
          <FastImage
            style={[styles.profileImage, profileImageStyle]}
            source={profileImage ? { uri: profileImage } : images.placeholder}
          />
        ) : (
          <FastImage
            style={[styles.profileImage, profileImageStyle]}
            source={images.userplaceholder}
            resizeMode="cover"
          />
        )}
        {/* )} */}
        <View style={styles.textContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.userName, nameStyle]}>{name}</Text>
            {
              isLeTribeMember &&
              <FastImage
                source={images.Lt_family}
                resizeMode="contain"
                style={styles.memberStyle}
              />
            }
          </View>
          <Text style={[styles.email, userNameStyle]}>{userName}</Text>

        </View>
      </View>
      {showButton && (
        <View style={styles.rightContainer}>
          <Button2
            IconButton={false}
            ButtonName={btnTitle}
            ButtonBackground={btnBackgroundColor}
            ButtonType="Outlined"
            OutlineColor={btnBorderColor}
            TextColor={btnTextColor}
            TextStyle={styles.btnTextStyle}
            style={styles.btnStyle}
            borderWidth={2}
            onPress={onPressBtn}
            disabled={disabled}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};
