import React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import fonts from "../../constants/Fonts";
import Colors from "../../constants/ColorConstants";
import Fonts from "../../constants/FontsContstants";

import { Button2 } from "../button2/Button2";
import { images } from "../../assets/images/images";

export const BannerCard = (props) => {
    const { item, onPress } = props;

    return (
        <ImageBackground
            style={styles.bgImage}
            source={images[`Banner${item}`]}
            defaultSource={images.placeholder}
            imageStyle={{ borderRadius: 20, height: hp(25) }}
        >
            <View style={styles.section}>
                <Text style={styles.heading}>Hello Summar</Text>
                <Text style={styles.text}>
                    It's time to chill with the juciest picks
                </Text>
                <Text style={styles.infoTxt}>
                    Up tp <Text style={styles.discountTxt}>30% OFF</Text>
                </Text>

                <Button2
                    onPress={onPress}
                    IconButton={false}
                    ButtonType="Outlined"
                    style={styles.button}
                    ButtonName={"BUY NOW"}
                    TextColor={Colors.cBlack}
                    TextStyle={styles.buttonText}
                    ButtonBackground={Colors.white}
                    OutlineColor={Colors.borderColor}
                />
            </View>

        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bgImage: {
        width: wp(80),
        height: hp(35),
        marginRight: wp(2),
    },
    heading: {
        maxWidth: wp(40),
        fontSize: fonts.H7,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraBold,
    },
    section: {
        height: hp(30),
        paddingHorizontal: wp(3),
        justifyContent: 'center',
    },
    text: {
        maxWidth: wp(50),
        marginTop: hp(0.3),
        fontSize: fonts.P4,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraRegular,
    },
    infoTxt: {
        maxWidth: wp(50),
        marginTop: hp(0.3),
        fontSize: fonts.P2,
        color: Colors.cBlack,
        fontFamily: Fonts.SoraRegular,
    },
    discountTxt: {
        fontFamily: Fonts.SoraBold,
    },
    button: {
        width: wp(30),
        height: hp(4.5),
        borderRadius: 5,
        marginBottom: hp(3),
        marginTop: hp(1)
    },
    buttonText: {
        fontWeight: '700',
        fontSize: fonts.P3,
        fontFamily: Fonts.SoraRegular
    },
});
