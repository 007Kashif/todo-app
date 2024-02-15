import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export const Notification = (props) => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.title}>Notification</Text>
        </View>
    )
}
