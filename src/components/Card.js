import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";

import Basker from "./FontSComponent/Basker";
import Sulphar from "./FontSComponent/Sulpher";

const Card = props => {
  const [animation, setAnimation] = useState(InitAnimation);
  const [isAnimated, setAnimated] = useState(true);

  let InitAnimation = {
    from: {},
    to: {}
  };

  const handleTouch = () => {
    setAnimated(!isAnimated);
    isAnimated ? setAnimation(newAnimation) : setAnimation(oldAnimation);
  };
  return (
    <Animatable.View style={{ ...styles.card, ...styles.product }} onTouchStart = {handleTouch} animation = {animation}>
      <Image source={props.img} style={styles.img} />
      <Text>{props.describtion}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 6,
    shadowOpacity: 0.16,
    elevation: 4,
    backgroundColor: "#FAFAF9",
    borderRadius: 7,
    marginHorizontal: wp("10%"),
    minHeight: hp("25%"),
    justifyContent: "center",
    borderRightWidth: 0,
    marginTop: 15
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    flexBasis: "1%",
    justifyContent: "space-around"
  },
  img: {
    width: wp("20%"),
    height: hp("20%")
  }
});


const newAnimation = {
    from: {
        minHeight: hp("25%"),
        marginHorizontal: wp("10%"),

    },
    to: {
        minHeight: hp("100%"),
        marginHorizontal: wp("0%"),

    },
    duration: 1000
  };
  
  const oldAnimation = {
    from: {
        minHeight: hp("100%"),
        marginHorizontal: wp("0%"),

    },
    to: {
        minHeight: hp("25%"),
        marginHorizontal: wp("10%"),

    },
    duration: 1000
  };




export default Card;
