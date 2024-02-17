import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/home';
import { CreateItem } from '../../screens/createItem/CreateItem';

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
                name="CreateItem"
                component={CreateItem}
                options={navOptionHandler}
            />
        </StackAuth.Navigator>
    );
};
