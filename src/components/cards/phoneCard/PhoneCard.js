import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import Colors from '../../../constants/ColorConstants';
import { Button2 } from '../../button2/Button2';
import { images } from '../../../assets/images/images';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const PhoneCard = (props) => {
    const { uri } = props;
    return (
        <View style={styles.container}>
            <FastImage
                source={images.Loona}
                resizeMode="stretch"
                style={styles.image}
            />
            <View style={{ marginLeft: wp(3) }}>
                <Text style={styles.title}>1000/2000 raised</Text>
                <Text style={styles.infoText}>10/20 N-NFT's available</Text>
                <Text style={styles.infoText}>12 
                <Text style={styles.dayText}> day to go</Text>
                </Text>
                <View>
                    <Button2
                        IconButton={false}
                        ButtonName={"Reserve F-NFT"}
                        ButtonBackground={Colors.theme}
                        ButtonType="Outlined"
                        OutlineColor={Colors.theme}
                        TextColor={Colors.white}
                        TextStyle={styles.buttonText}
                        style={{
                            padding: hp(0.8),
                            marginTop: hp(1),
                            borderRadius: 5,
                            paddingHorizontal: hp(2),
                        }}
                        onPress={() => { }}
                    />
                </View>
            </View>
        </View>
    )
}
