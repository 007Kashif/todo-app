import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/home';
import { ItemInfo } from '../../screens/itemInfo/ItemInfo';

const StackAuth = createStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
});
export const HomeStack = () => {
    return (
        <StackAuth.Navigator initialRouteName="HomeScreen">
            <StackAuth.Screen
                name="HomeScreen"
                component={Home}
                options={navOptionHandler}
            />
            <StackAuth.Screen
                name="ItemInfo"
                component={ItemInfo}
                options={navOptionHandler}
            />
        </StackAuth.Navigator>
    );
};
