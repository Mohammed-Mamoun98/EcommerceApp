import React, { PureComponent } from "react";
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

import Header from "../components/Header";
import PriceTag from "../components/PriceTag";

const ProductView = props => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View>
        <Header />
        <PriceTag price="59.58" />
      </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: Constants.statusBarHeight,
    ,
    height : '100%'

  },
  scroll: {
      height : '100%'
  }
});

export default ProductView;
