import React, { useState, useEffect } from 'react';
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
import Fontisto from 'react-native-vector-icons/Fontisto';
//Components
import {
  Button,
  AppInput,
  AppLoader,
} from '../../../components';
import Colors from '../../../constants/ColorConstants';
//Styles
import { styles } from './styles';

import { images } from '../../../assets/images/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const { StatusBarManager } = NativeModules;

let animationTimer = 10;

export const SignUpEmail = ({ navigation, route }) => {

  const [show, setShow] = useState(false);
  const [showHidePass, setShowHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const [errMsgs, setErrMsgs] = useState({});
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
      //pssing data then can access
      checkAndNavigate();
    }
  };


  const checkAndNavigate = () => {
    setTimeout(() => {
      setanimateOutData(true);
      setAnimationDirection('left');
      navigation.replace('Home');
    }, 1000);
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
              duration={animationTimer + 250}
              animation={animation}
            >
              <AppInput
                borderColor={Colors.red}
                borderWidth={errMsgs?.emailErrMessage ? 1 : 0}
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
            <View style={{ marginTop: hp(3) }} />
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
    </View>
  );
};
