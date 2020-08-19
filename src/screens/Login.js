import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import LoginBG from '../components/LoginBG'
import Btn from '../components/RoundBtn'

const Login = (props) => {
    return (
            <LoginBG >
            <Btn style = {{position : 'absolute' , zIndex : 55}} />
            </LoginBG>

    )
}

const styles = StyleSheet.create({
    t:{
        position : 'absolute'
    }
})



export default Login
