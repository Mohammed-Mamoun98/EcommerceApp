import React, { useState } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Basker from "./FontSComponent/Basker";
import Sulphar from "./FontSComponent/Sulpher";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text></Text>
      {/* <Icon name="menu" size={30} /> */}
      <Sulphar text= {props.title} style={styles.mainText} />

      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: hp("5%"),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    flexBasis: "10%",
    backgroundColor: "#FAFAFA",
    color: "#fff",
    marginTop : 10
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 10 },
    // shadowRadius: 6,
    // shadowOpacity: 0.56,
    // elevation: 20,
    // padding: 20,
    // borderRadius: 3
  },
  headerElement: {
    letterSpacing: 1,
    fontSize: 18,
    marginHorizontal: 50
  },
  mainText: {
    fontSize: 30,
    textAlign: "center",
    alignSelf: "center",
    color: "#000"
  }
});
