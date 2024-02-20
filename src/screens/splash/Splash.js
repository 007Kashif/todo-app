import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../constants/ColorConstants';

export const Splash = ({ navigation }) => {
  const state = useSelector(state => state);


  useEffect(() => {
    (async () => {
      setTimeout(async () => {
        navigation.replace('AuthStack');
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
