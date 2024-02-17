import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavOptions from '../constants/NavigationOptions';
import { useSelector, useDispatch } from 'react-redux';
import { navigationRef } from './rootNavigation.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Onboard } from '../screens/splash/Onboard.js';
import { AuthStack } from './authStack/AuthStack';
import { BottomTab } from './bottomTab/BottomTab';
import { Splash } from '../screens/splash/Splash';
import { StoreCleaner } from '../redux/storeCleaner';

const StackApp = createNativeStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

const App = () => {
  const [loginChk, setloginChk] = useState(true);
  const { authReducer } = useSelector(state => state);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    let authToken = await AsyncStorage.getItem('userToken');
    if (authToken != null && authToken != undefined) {
      setloginChk(false);
    } else {
      setloginChk(false);
    }
  };

  if (loginChk) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <StackApp.Navigator
          detachInactiveScreens={false}
          initialRouteName="Splash"
        >

          <StackApp.Screen
            name="Splash"
            component={Splash}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="Onboard"
            component={Onboard}
            options={navOptionHandler}
          />
          {/* Auth-Screens Stack */}
          <StackApp.Screen
            name="AuthStack"
            component={AuthStack}
            options={navOptionHandler}
          />

          <StackApp.Screen
            name="BottomTab"
            component={BottomTab}
            options={NavOptions}
          />
          {/* Clear Redux */}
          <StackApp.Screen
            name="StoreCleaner"
            component={StoreCleaner}
            options={NavOptions}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default App;
