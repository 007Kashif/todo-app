import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../../components';
import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Onboard = ({ navigation }) => {

    const onPress = async () => {
        await AsyncStorage.setItem('firstLogin', "true")
            .then(() => navigation.navigate("AuthStack"))
    }

    return (
        <View
            style={styles.container}>
            <Text style={styles.title}>Welcome to the App</Text>
            <Button
                icon={false}
                width={'90%'}
                onPress={onPress}
                title={"Let's Go"}
                bgColor={Colors.theme}
                iconPlace={'leftCenter'}
                titleStyle={styles.buttonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    title: {
        fontWeight: '600',
        fontSize: fonts.H4,
        color: Colors.black,
        marginBottom: hp(20),
        fontFamily: Fonts.SoraRegular,
    },
    buttonText: {
        marginRight: 12,
        fontWeight: '600',
        fontSize: fonts.P4,
        color: Colors.white,
        fontFamily: Fonts.SoraRegular,
    },
})