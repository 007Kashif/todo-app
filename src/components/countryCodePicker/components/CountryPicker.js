import React, { useState } from 'react';
import {
  FlatList,
  TextInput,
  View,
  Text,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Easing,
  Keyboard,
  Pressable,
  BackHandler,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { countryCodes } from '../constants/countryCodes';
import CountryButton from './CountryButton';
import { useKeyboardStatus } from '../helpers/useKeyboardStatus';
import fonts from '../../../constants/Fonts';
import DeviceInfo from 'react-native-device-info';
import Colors from '../../../constants/ColorConstants';
const isIphoneX = DeviceInfo.hasNotch();

const height = Dimensions.get('window').height;

const CountryPicker = (props) => {
  const {
    show,
    pickerButtonOnPress,
    inputPlaceholder,
    searchMessage,
    lang = 'en',
    style,
    enableModalAvoiding,
    androidWindowSoftInputMode,
    itemTemplate: ItemTemplate = 'CountryButton',
    ...rest
  } = props;
  const keyboardStatus = useKeyboardStatus();
  const animationDriver = React.useRef(new Animated.Value(0)).current;

  const animatedMargin = React.useRef(new Animated.Value(0)).current;
  const inputRef = React.useRef().current;
  const [searchValue, setSearchValue] = React.useState('');
  const [cSelected, setCSelected] = useState(null);

  React.useEffect(() => {
    if (show) {
      Animated.timing(animationDriver, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      closeModal();
    }
  }, [show]);

  // const backAction = () => {
  //   // Keyboard.dismiss();
  //   // pickerButtonOnPress(cSelected);
  //   closeModal();
  //   return true;
  // };
  // React.useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  //this useEffect for Keyboard Handling
  // React.useEffect(() => {
  //   // if (
  //   //   enableModalAvoiding &&
  //   //   !!(
  //   //     keyboardStatus.keyboardPlatform === 'ios' ||
  //   //     (keyboardStatus.keyboardPlatform === 'android' &&
  //   //       androidWindowSoftInputMode === 'pan')
  //   //   )
  //   // ) {
  //   if (keyboardStatus.isOpen)
  //     Animated.timing(animatedMargin, {
  //       toValue: keyboardStatus.keyboardHeight,
  //       duration: 100,
  //       easing: Easing.ease,
  //       useNativeDriver: false,
  //     }).start();

  //   if (!keyboardStatus.isOpen) {
  //     Keyboard.dismiss();
  //     Animated.timing(animatedMargin, {
  //       toValue: 0,
  //       duration: 100,
  //       easing: Easing.ease,
  //       useNativeDriver: false,
  //     }).start();
  //   }
  //   // }
  // }, [keyboardStatus.isOpen]);

  const resultCountries = React.useMemo(() => {
    if (!isNaN(searchValue))
      return countryCodes.filter((country) =>
        country?.dial_code.includes(searchValue),
      );

    return countryCodes.filter((country) =>
      country?.name[lang || 'en'].includes(searchValue),
    );
  }, [searchValue]);

  const modalPosition = animationDriver.interpolate({
    inputRange: [0, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1],
    outputRange: [height, 105, 75, 50, 30, 15, 5, 0],
    extrapolate: 'clamp',
  });

  const closeModal = () => {
    Animated.timing(animationDriver, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.container,
        style,
        {
          // marginBottom: keyboardStatus.isOpen ? '70%' : 0,
          transform: [
            {
              translateY: modalPosition,
            },
          ],
        },
      ]}
    >
      {/* <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          Keyboard.dismiss();
          pickerButtonOnPress(cSelected);
          closeModal();
        }}
      /> */}
      <View
        style={[
          styles.modal,
          style?.modal,
          // {
          //   marginBottom: keyboardStatus.isOpen ? '50%' : 0,
          // },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextInput
            ref={inputRef}
            style={[styles.searchBar, style?.textInput, { width: '100%' }]}
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
            placeholder={inputPlaceholder || 'Search your country'}
            {...rest}
          />
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              pickerButtonOnPress(cSelected);
              closeModal();
            }}
            style={{
              flex: 0.3,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: hp(8),
            }}
          >
            <Text style={{ color: Colors.darkGrey, fontSize: fonts.P3 }}>
              cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        {resultCountries.length === 0 ? (
          <View style={styles.countryMessage}>
            <Text
              style={[
                {
                  color: '#8c8c8c',
                  fontSize: fonts.P3,
                },
                style?.searchMessageText,
              ]}
            >
              {searchMessage || 'Sorry we cant find your country :('}
            </Text>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={resultCountries || countryCodes}
            keyExtractor={(item, index) => item + index}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            keyboardShouldPersistTaps={'handled'}
            renderItem={({ item, index }) => {
              let itemName = item?.name[lang];
              let checkName = itemName.length ? itemName : item?.name['en'];

              return (
                <CountryButton
                  key={index}
                  item={item}
                  style={style}
                  name={checkName}
                  onPress={() => {
                    Keyboard.dismiss();
                    setCSelected(item);
                    pickerButtonOnPress(item);
                    closeModal();
                  }}
                />
              );
            }}
            {...rest}
          />
        )}
      </View>
      {/* <Animated.View
        // key={animatedMargin}
        style={[
          styles.modalInner,
          style?.modalInner,
          {
            height: animatedMargin,
          },
        ]}
      /> */}
    </Animated.View>
  );
};

const styles = {
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingTop: Platform.OS == 'ios' && isIphoneX ? hp(5) : hp(4),
  },
  modal: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 10,
  },
  modalInner: {
    backgroundColor: 'white',
    width: '100%',
    zIndex: 100,
    elevation: 10,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height: 40,
    padding: 5,
  },
  countryMessage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  line: {
    width: '100%',
    height: 1.5,
    borderRadius: 2,
    backgroundColor: '#eceff1',
    alignSelf: 'center',
    marginVertical: 5,
  },
};

export default CountryPicker;
