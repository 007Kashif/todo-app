import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styles } from './styles'
import fonts from '../../constants/Fonts';
import Fonts from '../../constants/FontsContstants';
import Colors from '../../constants/ColorConstants';
import { AppHeader, Button2, PhoneCard } from '../../components'
const filterData = ["Smart Pones", "Wearables", "Automotive", "IoT", "Industrial", "Medical"]
const Data = [
  { uri: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
  { uri: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
  { uri: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjBwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" },
  { uri: "https://images.unsplash.com/photo-1610664921890-ebad05086414?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNtYXJ0cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
  { uri: "https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" },
  { uri: "https://images.unsplash.com/photo-1618680551746-83925d89838b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" }
]
export const Home = (props) => {
  const [search, setSearch] = useState('');

  const renderButtonList = ({ item, index }) => {
    const isSelected = index === 0;
    const backgroundColor = isSelected ? Colors.theme : Colors.white;
    const textColor = isSelected ? Colors.white : Colors.cBlack;
    const borderColor = isSelected ? Colors.theme : Colors.theme;
    return (
      <Button2
        IconButton={false}
        ButtonName={item}
        ButtonBackground={backgroundColor}
        ButtonType="Outlined"
        OutlineColor={borderColor}
        TextColor={textColor}
        TextStyle={{
          fontSize: fonts.P5,
          fontWeight: '400',
          fontFamily: Fonts.SoraRegular,
        }}
        style={{
          marginRight: hp(1),
          padding: hp(0.8),
          paddingHorizontal: hp(2),
        }}
        onPress={() => { }}
      />
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginBottom: index == Data?.length - 1 ? hp(15) : 0 }}>
        <PhoneCard uri={item?.uri} />
      </View>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <AppHeader
        placeholder="Search here..."
        value={search}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />
      <View style={styles.buttonListContainer}>
        <FlatList
          horizontal
          style={{ marginLeft: '3%', marginVertical: hp(2) }}
          showsHorizontalScrollIndicator={false}
          data={filterData}
          initialScrollIndex={0}
          renderItem={renderButtonList}
          keyExtractor={(e, i) => 'dom' + i.toString()}
        />
      </View>
      <View>
        <FlatList
          data={Data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: wp(3), paddingTop: hp(1) }}
        />
      </View>
    </View>
  )
}
