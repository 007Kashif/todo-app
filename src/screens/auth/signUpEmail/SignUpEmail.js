import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  StatusBar,
  NativeModules,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as Animatable from 'react-native-animatable';
import Fonts from '../../../constants/FontsContstants';
import { useIsFocused } from '@react-navigation/native';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//Components
import {
  Button,
  AppInput,
  ErrorText,
  AppLoader,
} from '../../../components';
import Colors from '../../../constants/ColorConstants';
//Styles
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { CommonActions, StackActions } from '@react-navigation/native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CountryPicker from '../../../components/countryCodePicker/components/CountryPicker';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from '../../../assets/images/images';

const { StatusBarManager } = NativeModules;

let animationTimer = 10;

export const SignUpEmail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { logInReducer, checkUserReducer } = state

  const [show, setShow] = useState(false);
  const [showHidePass, setShowHidePass] = useState(true);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [address, setAddress] = useState('');
  const [linkedin, setLinkedIn] = useState('');
  const [expInvestment, setExpInvestment] = useState('');
  const [keyInterest, setKeyInterest] = useState('');
  const [ipValue, setIpValue] = useState('');
  const [genIp, setGenIp] = useState('');
  const [description, setDescriptiom] = useState('');
  const [goal, setGoal] = useState('');
  const [affiliate, setAffiliate] = useState('');
  const [countryCode, setCountryCode] = useState('+372');

  const [validEmail, setValidEmail] = useState(true);
  const [errMsgs, setErrMsgs] = useState({});

  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [animateOutData, setanimateOutData] = useState(false);
  const [statusBarHeight, setStatusBarHeight] = useState(
    StatusBar?.currentHeight,
  );

  const [animationDirection, setAnimationDirection] = useState(
    route?.params?.direction,
  );

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight((response) => {
        setStatusBarHeight(response?.height);
      });
    } else {
      setStatusBarHeight(StatusBar?.currentHeight);
    }
  }, []);


  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [show]);

  const goBack = () => {
    if (route?.params?.fromScreen == 'OnBoard') {
      BackHandler.exitApp();
    } else {
      setAnimationDirection(route?.params?.direction);
      setanimateOutData(true);
      setTimeout(() => {
        navigation.goBack();
      }, 350);
    }
  };

  const backAction = () => {
    show ? setShow(false) : goBack();
    return true;
  };

  const navigateTo = (stack, screen) => {
    setanimateOutData(true);
    setTimeout(() => {
      navigation.navigate(stack, { screen: screen });
    }, 500);
  };

  let animation = '';
  if (animateOutData) {
    animation = animationDirection == 'right' ? 'fadeOutRight' : 'fadeOutLeft';
  } else {
    animation = animationDirection == 'right' ? 'fadeInRight' : 'fadeInLeft';
    // animation = 'fadeOut';
  }



  const checkUserEmail = () => {
    if (email != '') {
      let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (/\s/.test(email)) {
        setErrMsgs({
          ...errMsgs,
          emailErrMessage: 'email can not contain space',
        });

      };
    }
  }
  const handleError = (error, input) => {
    setErrMsgs((errMsgs) => ({ ...errMsgs, [input]: error }));
  };

  const onPressRegisterButton = () => {
    let isValid = true;
    if (name == '') {
      handleError('Name is missing', 'nameErrMessage');
      isValid = false;
    } else if (name.charAt(0) == ' ') {
      handleError('Name can not start with space', 'nameErrMessage');
      isValid = false;
    }

    if (userName == '') {
      handleError('Username is missing', 'userNameErrMessage');
      isValid = false;
    } else if (userName.charAt(0) == ' ') {
      handleError('Username can not start with space', 'userNameErrMessage');
      isValid = false;
    }

    if (email == '') {
      handleError('email is missing', 'emailErrMessage');
      isValid = false;
    } else if (email.charAt(0) == ' ') {
      handleError('email can not start with space', 'emailErrMessage');
      isValid = false;
    }

    if (password == '') {
      handleError('password is missing', 'passwordErrMessage');
      isValid = false;
    } else if (password.charAt(0) == ' ') {
      handleError('password can not start with space', 'passwordErrMessage');
      isValid = false;
    } else if (password != cpassword) {
      handleError('Password and Confirm password does not match!', 'passwordErrMessage');
      isValid = false;
    }

    if (isValid) {
      //on all condiotions Success
      onPressRegister();
    }
  };

  const onPressRegister = () => {
    setPassword('');
    setCPassword('');
    setErrMsgs({});
    // registerUser(null);
  }

  const checkAndNavigate = () => {
    let checkUser = checkUserReducer.checkUserData;
    if (checkUser == null || checkUser == undefined) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'BottomTab',
            },
          ],
        }),
      );
    } else {
      navigation.replace(checkUser?.stack, { screen: checkUser?.screen });
    }
  };

  const registerUser = (details) => {
    setIsLoading(true);
    dispatch(postRegister(details))
      .then(async (response) => {
        setIsLoading(false);
        if (
          response.payload.message == 'User has been registered successfully'
        ) {
          setName('');
          setEmail('');
          setPassword('');
          setUserName('');
          setPhone('');
          setAnimationDirection('left');
          // navigateTo('AuthStack', 'LogIn', 'left');

          await AsyncStorage.setItem(
            'userToken',
            JSON.stringify(response?.payload?.data?.token),
          ).then(async () => {
            let device_id = await AsyncStorage.getItem('deviceID');
            let device_token = await AsyncStorage.getItem('fcmToken');
            let payload = {
              device_id,
              device_token,
            };
            dispatch(storeFCM(payload));
            dispatch(getCart());
            dispatch(fetchProductFilters());
            dispatch(getProductTypes(''));
            dispatch(resetFilter());
            checkAndNavigate();
          });
        }
      })
      .catch((err) => { })
      .then(() => {
        setIsLoading(false);
      });
  };


  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.white }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: statusBarHeight,
          backgroundColor: 'white',
          zIndex: 11111,
        }}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="always"
        style={{ flex: 1, backgroundColor: Colors.white }}
      >
        <View style={styles.container}>
          {/* Loader */}

          {/* <BackIconButton onPress={() => goBack()} iconColor="black" /> */}
          {/* <View style={styles.skipContainer}>
            <TouchableOpacity
              onPress={() => {
                setAnimationDirection('left');
                navigation.replace('BottomTab');
              }}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View> */}
          <Animatable.View
            duration={animationTimer}
            animation={animation}
            style={styles.textContainer}
          >
            <Text style={styles.title}>Register with e-mail</Text>
          </Animatable.View>
          <ScrollView
            keyboardShouldPersistTaps="always"
            nestedScrollEnabled={true}
            style={styles.buttonsContainer}
          >
            <Animatable.View
              duration={animationTimer + 100}
              animation={animation}
            >
              <AppInput
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Company Type"
                value={name}
                onChangeText={(text) => {
                  setErrMsgs({ ...errMsgs, nameErrMessage: '' });
                  setName(text);
                }}
                width={'100%'}
                Error={errMsgs.nameErrMessage ? true : false}
                errorMessage={errMsgs.nameErrMessage}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 200}
              animation={animation}
            >
              <AppInput
                borderColor={Colors.red}
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Representative Name"
                value={userName}
                onChangeText={(text) => {
                  setErrMsgs({ ...errMsgs, userNameErrMessage: '' });
                  setUserName(text);
                }}
                onBlur={() => checkUserName()}
                width={'100%'}
                Error={errMsgs.userNameErrMessage ? true : false}
                errorMessage={errMsgs.userNameErrMessage}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 250}
              animation={animation}
            >
              <AppInput
                borderColor={Colors.red}
                borderWidth={validEmail ? 0 : 1}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                keyboardType={'email-address'}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => {
                  setErrMsgs({ ...errMsgs, emailErrMessage: '' });
                  setEmail(text);
                }}
                onBlur={() => checkUserEmail()}
                width={'100%'}
                Error={errMsgs.emailErrMessage ? true : false}
                errorMessage={errMsgs.emailErrMessage}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 250}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Company Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 300}
              animation={animation}
            >
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: hp(3),
                }}
              >
                <Button
                  bgColor={Colors.clight}
                  titleStyle={[styles.buttonText, { color: Colors.cBlack }]}
                  width={'25%'}
                  borderRadius={1}
                  vectorIcon={
                    <Ionicons
                      name="chevron-down"
                      size={hp(2)}
                      color={Colors.cBlack}
                      style={{ marginLeft: 10 }}
                    />
                  }
                  icon={true}
                  height={hp(6)}
                  iconPlace={'rightCenter'}
                  onPress={() => {
                    setShow(true);
                  }}
                  title={countryCode}
                  style={styles.countryCodeButtonStyle}
                />
                <AppInput
                  // width={'70%'}
                  textInputStyle={styles.input}
                  keyboardType={'decimal-pad'}
                  placeholder="Representative Phone"
                  value={phone}
                  onChangeText={(text) => setPhone(text)}
                />
              </View>
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 350}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Linkedin Url"
                value={linkedin}
                onChangeText={(text) => setLinkedIn(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 450}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Expected Investment"
                value={expInvestment}
                onChangeText={(text) => setExpInvestment(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 450}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Key Interest"
                value={keyInterest}
                onChangeText={(text) => setKeyInterest(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 450}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Est. Ip Value"
                value={ipValue}
                onChangeText={(text) => setIpValue(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 550}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Generated Ip"
                value={genIp}
                onChangeText={(text) => setGenIp(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 550}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Company Description"
                value={description}
                onChangeText={(text) => setDescriptioms(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 550}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Key Interest"
                value={keyInterest}
                onChangeText={(text) => setKeyInterest(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 550}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Goal Of Rise"
                value={goal}
                onChangeText={(text) => setGoal(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 600}
              animation={animation}
            >
              <AppInput
                borderWidth={0}
                textInputStyle={styles.input}
                marginTop={hp(3)}
                placeholder="Affiliate Link"
                value={affiliate}
                onChangeText={(text) => setAffiliate(text)}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 600}
              animation={animation}
            >
              <AppInput
                width={'100%'}
                textInputStyle={styles.input}
                secureEntry={showHidePass}
                marginTop={hp(3)}
                placeholder="Password"
                value={password}
                onChangeText={(text) => {
                  setErrMsgs({ ...errMsgs, passwordErrMessage: '' });
                  setPassword(text);
                }}
                rightIconPath={showHidePass ? images.hidePass : images.showPass}
                onRightIconPress={() => setShowHidePass(!showHidePass)}
                Error={errMsgs.passwordErrMessage ? true : false}
                errorMessage={errMsgs.passwordErrMessage}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 600}
              animation={animation}
            >
              <AppInput
                width={'100%'}
                textInputStyle={styles.input}
                secureEntry={showHidePass}
                marginTop={hp(3)}
                placeholder="Confirm Password"
                value={cpassword}
                onChangeText={(text) => {
                  setErrMsgs({ ...errMsgs, passwordErrMessage: '' });
                  setCPassword(text);
                }}
                rightIconPath={showHidePass ? images.hidePass : images.showPass}
                onRightIconPress={() => setShowHidePass(!showHidePass)}
                Error={errMsgs.passwordErrMessage ? true : false}
                errorMessage={errMsgs.passwordErrMessage}
              />
            </Animatable.View>
            {/* )} */}
            <Animatable.View
              duration={animationTimer + 700}
              animation={animation}
            >
              <Button
                testID="Login.RegisterButton"
                titleStyle={styles.buttonText}
                onPress={() => {
                  onPressRegisterButton();
                }}
                vectorIcon={
                  <Fontisto
                    name="email"
                    size={hp(2.5)}
                    color={Colors.white}
                    style={{ marginRight: 10 }}
                  />
                }
                style={styles.butonStyle}
                bgColor={Colors.theme}
                iconPlace={'leftCenter'}
                title="Register with e-mail"
                icon={true}
                width={'100%'}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 700}
              animation={animation}
              style={[styles.bottomContainer, { marginTop: hp(1), marginBottom: hp(5) }]}
            >
              <View
                style={[
                  styles.logInTextContainer,
                  { justifyContent: 'center' },
                ]}
              >
                <Text style={styles.registerText}>Already have account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    setAnimationDirection('left');
                    navigateTo('LogIn');
                  }}
                >
                  <Text style={styles.logInText}>Log in</Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </ScrollView>
        </View>
        {isLoading && <AppLoader visible={isLoading} />}
      </KeyboardAwareScrollView>
      {show && (
        <CountryPicker
          show={show}
          pickerButtonOnPress={(item) => {
            setCountryCode(item?.dial_code ? item.dial_code : countryCode);
            setShow(false);
          }}
        />
      )}
    </View>
  );
};
