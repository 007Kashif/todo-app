import React, { useState } from 'react'
import { View, FlatList, TextInput } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { styles } from './styles'
import Colors from '../../constants/ColorConstants';
import { Button2, ListCard } from '../../components'

const Data = [1, 2, 3,4,5,6,7,]
export const Home = (props) => {
  const [text, setText] = useState(null);

  const onAddItem = () => {

  }

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginBottom: index == Data?.length - 1 ? hp(15) : 0 }}>
        <ListCard />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles?.topSection}>
        <TextInput
          value={text}
          style={styles.input}
          placeholder="Add todo..."
          onChangeText={(val) => setText(val)}
        />
        <Button2
          IconButton={false}
          ButtonName={"Add"}
          onPress={onAddItem}
          ButtonType="Outlined"
          style={styles.button}
          TextColor={Colors.white}
          OutlineColor={Colors.theme}
          TextStyle={styles.buttonText}
          ButtonBackground={Colors.theme}
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
