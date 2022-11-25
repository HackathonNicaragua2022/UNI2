import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../colors";
import Interruptor from "./Interruptor";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ({ tittleCard, navigation }) {
  const styles = makeStyles(colors);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Notificaciones</Text>
        <View style={styles.interruptor}>
          <Text style={styles.Avisos}>Avisos y Noticias</Text>
          <Interruptor></Interruptor>
        </View>
        <View style={styles.interruptor}>
          <Text style={styles.Avisos}>Efectos de Sonido</Text>
          <Interruptor></Interruptor>
        </View>
      </View>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "baseline",
      justifyContent: "space-around",
      backgroundColor: colors.blanco,
      borderRadius: 28,
      height: hp(25),
      width: wp(83),
      marginTop: hp(4),
      paddingLeft: wp(3),
    },
    titleStyle: {
      fontSize: hp(3.8),
      color: colors.rojo,
      fontFamily: "Montserrat",
      paddingLeft: wp(10),
    },
    Avisos: {
      color: colors.rojo,
      fontSize: hp(2.4),
      paddingRight: wp(3),
      marginRight: wp(10),
      fontFamily: "Montserrat",
      width: wp(55),
    },
    interruptor: {
      right: 0,
      flexDirection: "row",
    },
  });
};
