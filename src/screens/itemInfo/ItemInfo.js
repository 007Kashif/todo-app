import React, { useState } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles'
import { images } from '../../assets/images/images';
import Colors from '../../constants/ColorConstants';
import { BannerCard, CartItem, ListItem } from '../../components'

import { categories } from '../home/StaticData';

export const ItemInfo = (props) => {
    const [selected, setSelected] = useState(0);

    const renderItem = ({ item, index }) => {
        const isEnd = categories?.length - 1 === index
        return (
            <View style={{ marginBottom: isEnd ? hp(3.5) : 0 }}>
                <CartItem
                    item={item}
                    onPress={() => props?.navigation?.navigate("ItemInfo")}
                />
            </View>
        )
    }

    const renderBanner = ({ item, index }) => {
        return (
            <View style={{ marginRight: index === 4 ? wp(20) : 0 }}>
                <BannerCard item={item} />
            </View>
        )
    }

    const renderFilter = ({ item, index }) => {
        const isEnd = categories?.length - 1 === index
        const check = selected === index
        return (
            <View style={{ marginBottom: isEnd ? hp(3.5) : 0 }}>
                <ListItem
                    item={item}
                    check={check}
                    onPress={() => setSelected(index)}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles?.topSection}>
                <View style={styles.rowSection}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <MaterialIcons color={Colors.cGray} name='keyboard-backspace' size={hp(4)} />
                    </TouchableOpacity>
                    <View style={styles.headImg}>
                        <Image source={images.Grocery} style={styles.headerIcon} />
                    </View>
                    <View style={{ paddingLeft: wp(3) }}>
                        <View style={styles.rowSection}>
                            <View>
                                <Text style={styles.heading}>Hot Deals</Text>
                                <Text style={styles.locText}>124 Items</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.searchIcon}>
                    <Image source={images.SearchIcon} style={styles.Search} />
                </View>
            </View>

            <View style={styles.mainSection}>
                {/* Left Section */}
                <View style={styles.leftSection}>
                    <FlatList
                        data={categories}
                        renderItem={renderFilter}
                        style={{ paddingVertical: hp(2) }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item?.id?.toString()}
                    />
                </View>
                {/* Right Section */}
                <View>
                    <View>
                        <FlatList
                            horizontal
                            data={[1, 2, 3, 4, 5]}
                            renderItem={renderBanner}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item?.toString()}
                            style={{ paddingHorizontal: wp(2.5), paddingTop: hp(1.5) }}
                        />
                    </View>
                    <View style={styles.listSection}>
                        <Text style={styles.listHead}>128 Items</Text>
                        <Text style={styles.listHead1}> in Bestsellers</Text>
                    </View>
                    <FlatList
                        numColumns={2}
                        data={categories}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item?.id?.toString()}
                    />
                </View>
            </View>
        </View>
    )
}
