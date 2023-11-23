import React from "react";
import { SafeAreaView, Image, View } from "react-native";
import Title from "./Title/title.js";
import styles from "./style.js";

export default function Header() {
  return (
    <SafeAreaView style={styles.titleBox}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.logoImg}
        />
        <Title />
      </View>
    </SafeAreaView>
  );
}
