import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile, ProfileTabs } from '../../screens/profile';

const StackAuth = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
export const ProfileStack = () => {
  return (
    <StackAuth.Navigator initialRouteName="MyProfile">
      <StackAuth.Screen
        name="MyProfile"
        component={Profile}
        options={navOptionHandler}
      />
      <StackAuth.Screen
        name="ProfileTabs"
        component={ProfileTabs}
        options={navOptionHandler}
      />
    </StackAuth.Navigator>
  );
};
