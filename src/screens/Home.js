import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import Header from "../Header/header";

export default function Home({ navigation }) {
  const [data, setData] = useState([
    { key: "1", name: "Maça", price: 10, quant: 1},
    { key: "2", name: "Banana", price: 15, quant: 1},
    { key: "3", name: "Ovo", price: 20, quant: 1}
  ]);

  let totalPrice = data.reduce((count, item) => count + item.price, 0);

  return (
    <View>
      <Header />
      {/* flatlist wrapper */}
      <View>
        <FlatList
          style={{ paddingTop: 10 }}
          data={data}
          ItemSeparatorComponent={
            Platform.OS !== "android" &&
            (({ highlighted }) => (
              <View
                style={[styles.separator, highlighted && { marginLeft: 0 }]}
              />
            ))
          }
          renderItem={({ item }) => (
            //item data
            <View style={styles.itemWrapper}> 
              <Text style={styles.itemText}>
              {item.name} R${item.price}
            </Text>
            <Text style={{color: '#fff', fontSize: 10, textAlign: 'right'}}>Quant: {item.quant}</Text>
            </View>
         
          )}
        />
      </View>
      {/* button to change screen */}
      <View style={styles.finalOrderWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("finalOrder", { totalPrice })}
          style={styles.finalOrderButton}
        >
          <Text style={styles.finalOrderText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  finalOrderButton: {
    backgroundColor: "#36B643",
    alignItems: "center",
    borderRadius: 25,
    width: 385,
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
  finalOrderText: {
    color: "#fff",
    fontSize: 25,
  },
  finalOrderWrapper: {
    paddingTop: 10,
    paddingLeft: 23,
  },
  itemWrapper: {
    backgroundColor: "#383838",
    borderRadius: 25,
    height: 60,
    alignItems: "center",
    justifyContent: 'center'
  },
  itemText : {
    color: '#fff',
    fontSize: 20,
  },
  separator: {
    padding: 5,
    borderRadius: 100,
  },
});
