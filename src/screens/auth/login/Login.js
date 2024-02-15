import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Icons
import Fontisto from 'react-native-vector-icons/Fontisto';

//Redux hooks
import { useSelector, useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//Components
import { Button, AppInput, AppLoader } from '../../../components';
//Styles
import { styles } from './styles';
import Colors from '../../../constants/ColorConstants';
import { useIsFocused } from '@react-navigation/native';
import { images } from '../../../assets/images/images';

import { postLogin } from '../../../redux/authSlice/authSlice';

export const LogIn = ({ navigation, route }) => {
  let animationTimer = 100;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const state = useSelector(state => state);

  const [animateOutData, setanimateOutData] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(
    route?.params?.direction,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('Test1@test.co');
  const [password, setPassword] = useState('testpass');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [showHidePass, setShowHidePass] = useState(true);

  useEffect(() => {
    if (isFocused) {
      setanimateOutData(false);
    }
  }, [isFocused]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  const goBack = () => {
    if (navigation?.isFocused() && navigation?.canGoBack()) {
      if (route?.params?.fromScreen == 'OnBoard') {
        BackHandler.exitApp();
      } else {
        setAnimationDirection(route?.params?.direction);
        setanimateOutData(true);
        setTimeout(() => {
          navigation.goBack();
        }, 500);
      }
    } else {
      BackHandler.exitApp();
    }
  };

  const backAction = () => {
    goBack();
    return true;
  };
  const navigateTo = (stack, screen, param) => {
    setanimateOutData(true);
    setAnimationDirection(!param);
    setTimeout(() => {
      navigation.navigate(stack, {
        screen: screen,
        params: { direction: param },
      });
    }, 500);
  };

  const checkAndNavigate = () => {
    setTimeout(() => {
      setanimateOutData(true);
      setAnimationDirection('left');
      navigation.replace('BottomTab');
    }, 1000);
  };

  let animation = '';
  if (animateOutData) {
    animation = animationDirection == 'right' ? 'fadeOutRight' : 'fadeOutLeft';
  } else {
    animation = animationDirection == 'right' ? 'fadeInRight' : 'fadeInLeft';
    // animation = 'fadeOut';
  }
  const checkValidation = () => {
    let isValid = true;
    if (!email) {
      setEmailErrorMsg('Email is required');
      isValid = false;
    }
    if (!password) {
      setPasswordErrorMsg('Password is required');
      isValid = false;
    }
    if (isValid) {
      logInUser();
    }
  };
  const logInUser = async () => {
    const body = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    dispatch(postLogin(body)).then(async response => {
      setIsLoading(false);
      if (response?.payload?.user?.token) {
        await AsyncStorage.setItem(
          'userToken',
          JSON.stringify(response.payload.user.token),
        ).then(() => {
          checkAndNavigate();
        });
      }
    });
  };
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      enableOnAndroid={true}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.container}>
        <View style={styles.skipContainer}>
          <TouchableOpacity
            onPress={() => {
              setAnimationDirection('left');
              navigation.replace('BottomTab');
              // alert('Skip Pressed')
            }}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <Animatable.View
          duration={animationTimer}
          animation={animation}
          style={styles.textContainer}>
          <Text style={styles.title}>Login</Text>
        </Animatable.View>
        <View style={styles.buttonsContainer}>
          <View style={styles.inputContainer}>
            <Animatable.View
              duration={animationTimer + 200}
              animation={animation}>
              <AppInput
                testID="Login.Email"
                textInputStyle={styles.input}
                keyboardType={'email-address'}
                placeholder="E-mail"
                value={email}
                onChangeText={text => {
                  setEmailErrorMsg('');
                  setEmail(text);
                }}
                width={'100%'}
                Error={emailErrorMsg == '' ? false : true}
                errorMessage={emailErrorMsg}
              />
            </Animatable.View>
            <Animatable.View
              duration={animationTimer + 300}
              animation={animation}>
              <AppInput
                testID="Login.Password"
                textInputStyle={styles.input}
                secureEntry={showHidePass}
                marginTop={hp(3)}
                marginBottom={hp(1)}
                placeholder="Password"
                value={password}
                onChangeText={text => {
                  setPasswordErrorMsg('');
                  setPassword(text);
                }}
                rightIconPath={showHidePass ? images.hidePass : images.showPass}
                onRightIconPress={() => setShowHidePass(!showHidePass)}
                width={'100%'}
                Error={passwordErrorMsg == '' ? false : true}
                errorMessage={passwordErrorMsg}
                returnKeyType="go"
              />
            </Animatable.View>
          </View>
          <View style={styles.bottomButtonsContainer}>
            <Animatable.View
              style={{}}
              duration={animationTimer + 700}
              animation={animation}>
              <Button
                testID="Login.Button"
                titleStyle={styles.buttonText}
                onPress={checkValidation}
                vectorIcon={
                  <Fontisto
                    name="email"
                    size={hp(2.5)}
                    color={Colors.white}
                    style={{ marginRight: 10 }}
                  />
                }
                bgColor={Colors.theme}
                iconPlace={'leftCenter'}
                title="Login with e-mail"
                icon={true}
                width={'100%'}
              />
              <View style={styles.forgetPasswordContainer}>
                <TouchableOpacity
                  onPress={() =>
                    // navigateTo('AuthStack', 'ForgetPassword', 'right')
                    alert('Forgot Pressed')
                  }>
                  {/* <Text style={styles.forgetPassword}>Forgot Password?</Text> */}
                </TouchableOpacity>
              </View>
            </Animatable.View>
          </View>
        </View>
        <Animatable.View
          duration={animationTimer + 700}
          animation={animation}
          style={styles.bottomContainer}>
          <View style={styles.logInTextContainer}>
            <Text style={styles.registerText}>Doesn’t have account? </Text>
            <TouchableOpacity
              onPress={() => {
                setEmailErrorMsg('');
                setPasswordErrorMsg('');
                setEmail('');
                setPassword('');
                setAnimationDirection('right');
                navigateTo('AuthStack', 'SignUpEmail', 'left');
              }}>
              <Text style={styles.logInText}>Register</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
      {isLoading && <AppLoader visible={isLoading} />}
    </KeyboardAwareScrollView>
  );
};
