import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavOptions from '../constants/NavigationOptions';

import { navigationRef } from './rootNavigation.js';

import { HomeStack } from "./homeStack/HomeStack.js"
import { AuthStack } from './authStack/AuthStack';
import { Splash } from '../screens/splash/Splash';
import { StoreCleaner } from '../redux/storeCleaner';

const StackApp = createNativeStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled: false,
});

const App = () => {


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

          {/* Auth-Screens Stack */}
          <StackApp.Screen
            name="AuthStack"
            component={AuthStack}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="Home"
            component={HomeStack}
            options={navOptionHandler}
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
