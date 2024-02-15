import React from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { images } from '../../assets/images/images';
import Colors from '../../constants/ColorConstants';

export const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const { authReducer } = state;

  React.useEffect(async () => {
    setTimeout(() => {
      if (authReducer?.userData?.token) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('AuthStack');
      }
    }, 1000);
  }, []);

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
