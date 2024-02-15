import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';
import { images } from '../../assets/images/images';

//Screens
import { Home } from '../../screens/home';
import { Offer } from '../../screens/offer';
import { Notification } from '../../screens/notifications';
import { ProfileStack } from '../profileStack/ProfileStack';
import { useDispatch } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import fonts from '../../constants/Fonts';

isIphoneX = DeviceInfo.hasNotch();

const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

const MyTabBar = ({ state, descriptors, navigation }) => {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        backgroundColor: Colors.lightGrey,
        flexDirection: 'row',
        height: isIphoneX && Platform.OS == 'ios' ? hp(9) : hp(7),
        paddingBottom: isIphoneX && Platform.OS == 'ios' ? hp(1.5) : 0,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const IconName =
          route.name == 'Home'
            ? images.Home
            : route.name == 'Offers'
              ? images.Offer
              : route.name == 'Notifications'
                ? images.Bell
                : route.name == 'Profile'
                  ? images.User
                  : null;

        const onPress = async () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            await AsyncStorage.getItem('userToken').then((userToken) => {
              if (userToken != null && userToken != undefined) {
                navigation.navigate(route.name);
              } else {
                alert('Login required')
                // Toast.show({
                //   type: 'alert',
                //   text1:
                //     'To use this functionality, registration or login is required!',
                // });
                navigation.replace('AuthStack');
              }
            });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Image
              source={IconName}
              style={{
                width: hp(3),
                height: hp(3),
                resizeMode: 'contain',
                tintColor: isFocused
                  ? Colors.cBlack
                  : label == 'Notifications'
                    ? !isFocused
                      ? Colors.theme
                      : null
                    : Colors.theme,
              }}
            />
            <Text
              style={{
                fontSize: fonts.P6,
                color: isFocused ? Colors.cBlack : Colors.theme,
                fontFamily: Fonts.SoraMedium,
                fontWeight: isFocused ? 'bold' : 'normal',
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="Offers"
        component={Offer}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={navOptionHandler}
      />
    </Tab.Navigator>
  );
};
