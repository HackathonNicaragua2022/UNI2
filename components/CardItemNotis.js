import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../colors";
import Interruptor from "./Interruptor";
import { useFonts } from "expo-font";

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
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: colors.blanco,
      borderRadius: 28,
      height: "25%",
      width: "80%",
      marginTop: 50,
    },
    titleStyle: {
      fontSize: 35,
      color: colors.rojo,
      fontFamily: "Montserrat",
    },
    Avisos: {
      color: colors.rojo,
      fontSize: 20,
      paddingRight: 50,
      marginRight: 16,
      fontFamily: "Montserrat",
    },
    interruptor: {
      flexDirection: "row",
    },
  });
};
