import React, { useRef, useState, useEffect } from 'react'
import { View, Image, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './styles'
import { images } from '../../assets/images/images';
import Colors from '../../constants/ColorConstants';
import { BannerCard, ListCard, InvitationModal } from '../../components'

import { categories } from './StaticData';
const INTERVAL_DELAY = 3000;

export const Home = (props) => {
  const flatListRef = useRef(null);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex += 1;
      if (currentIndex >= 5) {
        currentIndex = 0;
      }
      flatListRef.current.scrollToIndex({ animated: true, index: currentIndex });
    }, INTERVAL_DELAY);

    return () => clearInterval(interval);
  }, []);

  const renderItem = ({ item, index }) => {
    const isEnd = categories?.length - 1 === index
    return (
      <View style={{ marginBottom: isEnd ? hp(5) : 0 }}>
        <ListCard
          item={item}
          onPress={() => props?.navigation?.navigate("ItemInfo")}
        />
      </View>
    )
  }

  const renderBanner = ({ item, index }) => {
    return <BannerCard item={item} />
  }

  return (
    <View style={styles.container}>
      <View style={styles?.topSection}>
        <View style={styles.rowSection}>
          <Ionicons color={Colors.orange} name='location-sharp' size={hp(4)} />
          <View style={{ paddingLeft: wp(1.5) }}>
            <View style={styles.rowSection}>
              <Text style={styles.heading}>Brampton</Text>
              <Ionicons color={Colors.cGray} name='chevron-down' size={hp(3)} />
            </View>
            <Text style={styles.locText}>205, Queen St E</Text>
          </View>
        </View>
        {/* <View>
          <View style={styles.countSection}>
            <Text style={styles.countText}>22</Text>
          </View>
          <Image source={images.Shopping_Bag} style={styles.basket} />
        </View> */}
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text style={styles.shareTxt}>Share & Earn</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.toastText}>Earliest delivery slot: 1 Jun 10am - 1pm</Text>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          onChangeText={(val) => { }}
          placeholderTextColor={Colors.cGray}
          placeholder="Search Atta, Dal and more..."
        />
        <View style={styles.searchIcon}>
          <Image source={images.SearchIcon} style={styles.Search} />
        </View>
      </View>
      <View>
        <FlatList
          horizontal
          ref={flatListRef}
          data={[1, 2, 3, 4, 5]}
          renderItem={renderBanner}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.toString()}
          style={{ paddingHorizontal: wp(2.5), paddingTop: hp(1.5) }}
        />
      </View>
      <Text style={styles.listHead}>All Categories</Text>
      <FlatList
        numColumns={3}
        data={categories}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item?.id?.toString()}
        style={{ paddingHorizontal: wp(2.5), paddingTop: hp(1.5) }}
      />

      {/* InvitationModal */}
      <InvitationModal
        modalVisible={showModal}
        navigation={props?.navigation}
        setModalVisible={setShowModal} />
    </View>
  )
}
