import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Alert, TextInput } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { styles } from './styles'
import Colors from '../../constants/ColorConstants';
import { Button2, ListCard, AppLoader } from '../../components'

import { deleteItem } from '../../redux/todoSlice/todoSlice';

export const Home = (props) => {
  const dispatch = useDispatch();
  const focused = useIsFocused();

  const state = useSelector((state) => state);
  const { todoReducer } = state;

  const [data, setData] = useState(null);
  const [current, setCurrent] = useState(null)
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (todoReducer?.todoItems?.length > 0) {
      setData(todoReducer?.todoItems)
      setCurrent(todoReducer?.todoItems)
    }
  }, [todoReducer?.todoItems])


  const removeAlert = (id) =>
    Alert.alert(
      "Delete Item ?",
      "Are you sure you want to delete this item?",
      [
        { text: "Cancel" },
        { text: "OK", onPress: () => dispatch(deleteItem(id)) },
      ]
    );

  const searchData = (x) => {
    let text = x.toLowerCase();

    let filtered = current.filter((item) => {
      return item?.title?.toLowerCase()?.match(text);
    });
    setData(filtered);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginBottom: data?.length - 1 === index ? hp(10) : 0 }}>
        <ListCard item={item}
          onRemove={() => (removeAlert(item?.id))}
          onEdit={() => props?.navigation?.navigate("CreateItem", item)} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles?.topSection}>
        <TextInput
          style={styles.input}
          placeholder="Search by title..."
          placeholderTextColor={Colors.black}
          onChangeText={(val) => searchData(val)}
        />
        <Button2
          IconButton={false}
          ButtonName={"Add"}
          ButtonType="Outlined"
          style={styles.button}
          TextColor={Colors.white}
          OutlineColor={Colors.theme}
          TextStyle={styles.buttonText}
          ButtonBackground={Colors.theme}
          onPress={() => props?.navigation?.navigate("CreateItem")}
        />
      </View>

      {data?.length ? <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item?.id?.toString()}
          style={{ paddingHorizontal: wp(3), paddingTop: hp(1) }}
        />
      </View> :
        <View style={styles.emptySection}>
          <Text style={styles.emptyText}>No Data Found.</Text>
        </View>}

      {isLoading && <AppLoader visible={isLoading} />}
    </View>
  )
}
