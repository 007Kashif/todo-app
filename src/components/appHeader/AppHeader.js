import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Colors from '../../constants/ColorConstants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { images } from '../../assets/images/images';
import { styles } from './styles';

import { AppInput } from '../appInput/AppInput';
import { useSelector, useDispatch } from 'react-redux';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Fonts from '../../constants/FontsContstants';
import fonts from '../../constants/Fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppHeader = (props) => {
  const state = useSelector((state) => state);
  const [counter, setCounter] = useState(0);


  let {
    showFilter = false,
    filterPress,
    showAdd = false,
    addPress,
    showTitle,
    title = 'Notifications',
    showSearch = true,
    showFav,
    favIcon = images.Heart,
    showBasket = true,
    // counter,
    navigation,
    cartIcon = images.Shopping_Bag,
    showClose,
    showDot,
    placeholder,
    ...rest
  } = props;

  const renderInput = () => {
    return (
      <View
        style={{
          width: '90%',
          flexDirection: 'row-reverse',
          alignItems: 'center',
        }}
      >
        <AppInput
          fontFamily={Fonts.SoraRegular}
          fontSize={fonts.P4}
          height={hp(5)}
          width={'100%'}
          colortextInput={Colors.darkGrey}
          paddingLeft={hp(1)}
          placeholderTextColor={Colors.darkGrey}
          borderRadius={hp(0)}
          borderWidth={wp(0)}
          backgroundColor={Colors.lightBeige}
          placeholder={placeholder}
          tintColor={'grey'}
          rightIconPath={props.value != '' ? undefined : images.SearchIcon}
          rightIconSize={hp(2)}
          {...rest}
          value={props.value}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
        />
        {props.value != '' && (
          <TouchableOpacity
            onPress={props.iconPress}
            style={{ position: 'absolute', paddingHorizontal: 5 }}
          >
            <Entypo name="cross" size={hp(2.5)} color={Colors.cBlack} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        {showTitle && (
          <Text
            style={{
              color: Colors.cBlack,
              fontSize: fonts.H7,
              fontFamily: Fonts.SoraMedium,
            }}
          >
            {title}
          </Text>
        )}

        {/* Add Icon */}
        {!showTitle && showAdd && (
          <TouchableOpacity onPress={addPress} style={styles.addContainer}>
            <FeatherIcon name="plus" color={Colors.cBlack} size={hp(2.7)} />
          </TouchableOpacity>
        )}

        {/* Filter Icon */}
        {!showTitle && (
          <TouchableOpacity
            onPress={filterPress}
            style={[styles.btnStyle, { marginRight: wp(2) }]}
          >
            <Image source={images.Filter} style={styles.iconStyle} />
            {showDot && (
              <Image
                source={images.Dot}
                resizeMode="contain"
                style={styles.dotStyle}
              />
            )}
          </TouchableOpacity>
        )}

        {/* App Input */}
        {!showTitle && showSearch && renderInput()}
      </View>
      <View style={styles.rightContainer}>
        {/* Heart Icon */}
        <TouchableOpacity
          onPress={() => { }}
          style={[styles.btnStyle, { marginHorizontal: hp(1.5) }]}
        >
          <Image source={favIcon} style={styles.iconStyle} />
        </TouchableOpacity>

        {/* Cart Icon */}
        {showBasket && (
          <TouchableOpacity
            onPress={() => { }}
            style={styles.btnStyle}
          >
            {counter > 0 && (
              <View style={styles.counterStyle}>
                <Text style={styles.counterTextStyle}>{counter}</Text>
              </View>
            )}
            <Image source={cartIcon} style={styles.iconStyle} />
          </TouchableOpacity>
        )}
        {showClose && (
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={styles.btnStyle}
          >
            <EvilIcons name="close" size={hp(3.5)} color={Colors.cBlack} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
