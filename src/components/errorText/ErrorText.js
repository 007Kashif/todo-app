import React from 'react';
import { View, Text, Image } from 'react-native';
import fonts from '../../constants/Fonts';
import { images } from '../../assets/images/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Fonts from '../../constants/FontsContstants';

export const ErrorText = ({ messages = [] }) => {
  const displayMessages = messages.filter((msg) => msg !== undefined);
  if (displayMessages.length != 0) {
    return (
      <View style={{ marginTop: 2 }}>
        {displayMessages.map((msg, index) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {msg != '' && (
              <Image
                source={images.info}
                style={{
                  height: hp(1.8),
                  width: hp(1.8),
                  resizeMode: 'contain',
                  marginRight: 5,
                  tintColor: 'red',
                }}
              />
            )}
            <Text
              key={index}
              style={{
                fontSize: fonts.P5,
                color: 'red',
                fontFamily: Fonts.SoraLight,
              }}
            >
              {msg}
            </Text>
          </View>
        ))}
      </View>
    );
  } else null;
};
