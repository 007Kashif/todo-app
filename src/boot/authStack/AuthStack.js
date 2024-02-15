import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  LogIn,
  SignUpEmail
} from '../../screens/auth';

const StackAuth = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

export const AuthStack = () => {
  return (
    <StackAuth.Navigator initialRouteName="LogIn">
      <StackAuth.Screen
        name="LogIn"
        component={LogIn}
        options={navOptionHandler}
      />
      <StackAuth.Screen
        name="SignUpEmail"
        component={SignUpEmail}
        options={navOptionHandler}
      />
    </StackAuth.Navigator>
  );
};
