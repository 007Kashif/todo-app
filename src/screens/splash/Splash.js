import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { images } from '../../assets/images/images';
import Colors from '../../constants/ColorConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { authReducer } = state;

  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        if (authReducer?.userData?.token) {
          navigation.replace('BottomTab');
        } else {
          const firstLogin = await AsyncStorage.getItem('firstLogin')
          if (!firstLogin) {
            navigation.replace('Onboard');
          } else {
            navigation.replace('AuthStack');
          }
        }
      }, 2000)
    })()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.cBlack,
      }}>
      <Text style={{ fontSize: 60, color: Colors.white }}>TODO APP</Text>
    </View>
  );
};
