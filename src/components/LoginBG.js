import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Text, StyleSheet , Image} from "react-native";
import {colors} from '../colors/colors'
import Btn from './RoundBtn'

const img = require('../../assets/tutrial.png')


const LoginTemplate = props => {
  return (
    <View style={{...styles.container,...props.style}}>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <Btn style = {{margin : 15 , backgroundColor :'black'}} textStyle = {{color : 'white'}} text = 'Login' />
        <Btn style = {{ backgroundColor : '#fff'}} textStyle = {{color : 'black'}} text = 'Registeration' />
      </View>
      <Image source = {img} style = {styles.img}  />
      <Text style = {styles.txt}>All you need in A single App!</Text>
    </View>
  );
};


const LoginBG = props => {
    return(
        <LoginTemplate style = {{...props.style , ...styles.container}}>
            {props.children}
        </LoginTemplate>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position : 'relative'
  },
  top: {
    flex: 5,
    backgroundColor: "#fff"
  },
  bottom: {
    flex: 2.6,
    backgroundColor: colors.sky,
    alignItems : 'center',
    justifyContent : 'center',    
},
img:{
  position : 'absolute' , top : hp('15%') , width : 350 , height : 350 , left : wp('15%')
},

  txt :{
    position : 'absolute' , top : hp('5%') , left : wp('5%') , fontSize : 22, color : '#0F2F43'
  },


});

export default LoginBG;
