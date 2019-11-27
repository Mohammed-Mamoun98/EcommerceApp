import React from 'react';
import { View, StyleSheet , Image , Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
  import Basker from "./FontSComponent/Basker";
  import Sulphar from "./FontSComponent/Sulpher";
import Card from './Card'


const ProductSample = props => {
  return (
      <Card >
       {props.price}
      </Card>
  );
};

const styles = StyleSheet.create({
    container: {
        width : '100%',
        height : '100%',
        marginTop : 10
    }
})