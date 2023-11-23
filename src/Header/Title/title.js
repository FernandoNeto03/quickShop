import React from "react";
import {View, Text} from "react-native";
import styles from "./style";
import { useFonts } from 'expo-font';

export default function Title() {

    const [fontsLoaded] = useFonts({
        'RubikMonoOne-Regular': require('../../../assets/fonts/RubikMonoOne-Regular.ttf'),
      });

    return(
        <View>
            <Text style={{fontFamily:'RubikMonoOne-Regular', fontSize: 30, paddingLeft:40, paddingRight:10}} >
                QuickShop
            </Text>
        </View>
    );

};