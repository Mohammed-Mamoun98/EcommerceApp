import React from 'react';
import { StyleSheet, Text, View , YellowBox , Image} from 'react-native';
import {Icon} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Constants from 'expo-constants'
import Header from './src/components/Header'
import PriceTag from './src/components/PriceTag';

import Home from './src/screens/Home'

YellowBox.ignoreWarnings(['Remote debugger'])

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
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
