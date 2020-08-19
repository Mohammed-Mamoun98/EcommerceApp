import React from 'react';
import { StyleSheet, Text, View , YellowBox , Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Constants from 'expo-constants'
import Login from './src/screens/Login'
import Btn from './src/components/RoundBtn'

YellowBox.ignoreWarnings(['Remote debugger'])

export default function App() {
  
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    // backgroundColor: '#EEF5F9',
    backgroundColor : '#FAFAFA',
    marginTop : Constants.statusBarHeight
   
  },
  headphone:{
    width : wp('50%'),
    height : hp('45%')
  }
});
  

{/* <Image source = {require('./assets/airpods.png')} style = {styles.headphone} /> */}
