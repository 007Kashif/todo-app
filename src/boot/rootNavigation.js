import * as React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const navigationRef = React.createRef();

export async function navigate(name, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
        },
      ],
    }),
  );
  await AsyncStorage.clear();
  await AsyncStorage.removeItem('userToken');
}
