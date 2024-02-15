import { StyleSheet } from 'react-native'

import Colors from '../../constants/ColorConstants';
import Fonts from '../../constants/FontsContstants';


export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.SoraMedium
    }
})