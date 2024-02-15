import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { styles } from './styles';
import { images } from '../../assets/images/images';
import Colors from '../../constants/ColorConstants';

import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useSelector } from 'react-redux';

export const Profile = (props) => {
    const { navigation } = props;
    const state = useSelector((state) => state);
    const { authReducer } = state;
    const [user, setUser] = useState(authReducer?.userData?.user)
    
    const renderEditProfileButton = () => {
        return (
            <TouchableOpacity
                onPress={() => { }}
                style={styles.editIcon}
            >
                <FeatherIcon name="plus" size={hp(1.6)} color={Colors.cBlack} />
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                style={styles.menuIcon}
                onPress={() => {
                    navigation.navigate('ProfileTabs');
                }}
            >
                <MaterialCommunityIcons
                    name="menu"
                    size={hp(2.4)}
                    color={Colors.white}
                />
            </TouchableOpacity>
            <View style={styles.topViewContainer}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Image
                            style={styles.avatar}
                            source={images.userplaceholder}
                        />
                    </View>
                    {renderEditProfileButton()}
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.userNameStyle}>
                        @{user?.name.toLowerCase()}
                    </Text>
                </View>
                <Text style={[styles.nameStyle,{fontSize: 18, fontWeight: '600'}]}>
                    {user?.role_type}
                </Text>
                <Text style={styles.nameStyle}>
                    {user?.name}
                </Text>
                <Text style={styles.userDescription}>
                    This is the deafault user description
                </Text>
            </View>
            <View style={styles.bottomSection}>
                <Pressable
                    onPress={() => { }}
                    style={styles.btnStyle}
                >
                    <FeatherIcon
                        name='edit'
                        color={Colors.white}
                        size={hp(2)}
                    />
                    <Text style={styles.btnTextStyle}>
                        Edit profile
                    </Text>
                </Pressable>

            </View>
        </View>
    );
};
