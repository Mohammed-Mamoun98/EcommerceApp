import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const RoundBtn = ({style, text = '' , textStyle = {}}) => {
    return (
        <TouchableOpacity style = {{...styles.btn,...style}}>
        <Text style = {textStyle}>
            {text}
        </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width : wp('70%'),
        height : hp('7%'),
        backgroundColor : '#f5d',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 12
    }
})
export default RoundBtn
