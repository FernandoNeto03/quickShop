import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import Header from "../Header/header";


export default function FinalOrder({ route }) {
  return (
    <View>
      <Header />
      {/* totalPrice wrapper */}
      <View style={styles.priceWrapper}>
        <Text style={styles.priceText}>
          Valor total da compra: R${route.params.totalPrice}
        </Text>
      </View>
      {/* pix image wrapper */}
      <View style={styles.separator}>
        <View style={styles.square}>
          <Text style={styles.pixText}>PIX QR CODE</Text>
          <Image 
          source={require('../../assets/pixPedro.jpeg')}
          style={styles.pixImg}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  priceWrapper: {
    backgroundColor: "#36B643",
    borderRadius: 15,
    width: 385,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25,
    marginTop: 10
  },
  priceText: {
    color: "#fff",
    fontSize: 25
  },
  square: {
    width: 400,
    height: 400,
    backgroundColor: '#383838',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center'
  },
  separator: {
    paddingTop: 10
  },
  pixText: {
    color: '#fff',
    fontSize: 20
  },
  pixImg: {
    height: 360,
    width: 360,
    borderColor: '#383838',
    borderWidth: 10,
    borderRadius: 30
  }
});
