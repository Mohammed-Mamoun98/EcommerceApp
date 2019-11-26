import React , {useState} from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Basker from './FontSComponent/Basker'

export default function Header() {

  


  return (
    <View style={styles.header}>
      <Icon name="menu" size={30} />
      {/* <Text style={styles.headerElement}></Text> */}
<Basker text = 'Hello Basker' />
      <Icon name="search" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: hp("5%"),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    flexBasis: "14%",
  },
  headerElement: {
    letterSpacing: 1,
    fontSize: 18,
    marginHorizontal: 50
  }
});
