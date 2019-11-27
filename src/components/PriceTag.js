import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import * as Animatable from "react-native-animatable";
import Basker from "./FontSComponent/Basker";
import SulpharRegular from "./FontSComponent/SulpherRegular";

export default function PriceTag(props) {

  const [animation, setAnimation] = React.useState(InitAnimation);
  const [isAnimated, setAnimated] = React.useState(true);

  let InitAnimation = {
    from: {},
    to: {}
  };

  const handleTouch = () => {
    setAnimated(!isAnimated);
    isAnimated ? setAnimation(newAnimation) : setAnimation(oldAnimation);
  };
  return (
    <View style={styles.container}>
      <SulpharRegular style={styles.price} text={"$" + props.price} />
      <Image
        source={require("../../assets/airpods.png")}
        style={styles.product}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("13%"),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "#202020",
    width: wp("60%"),
    borderRadius: 7,
    // position: "absolute",
    // right: 5,
    // top: hp("27%"),
  },
  price: {
    color: "#fff",
    fontSize: 50,
    marginRight: 25
  },
  product: {
    // height: hp("55%"),
    // width: wp("55%"),
    // position: "absolute",
    // left: -120,
    // top: -130,
  }
});

const newAnimation = {
  from: {
    transform: [
      {
        scale: 1
      }
    ]
  },
  to: {
    transform: [
      {
        scale: 30
      }
    ]
  },
  duration: 1000
};

const oldAnimation = {
  from: {
    transform: [
      {
        scale: 30
      }
    ]
  },
  to: {
    transform: [
      {
        scale: 1
      }
    ]
  },
  duration: 1000
};

/* <Animatable.View
        onTouchStart={handleTouch}
        animation={animation}
        style={{
          backgroundColor: "#000",
          width: 30,
          height: 30,
          borderRadius: 100
        }}
      ></Animatable.View> */
