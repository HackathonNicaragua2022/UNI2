import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";

export default function ({ onPress, tittle }) {
  const styles = makeStyles(colors);

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.tittle}>{tittle}</Text>
      </TouchableOpacity>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "22%",
      width: "60%",
      backgroundColor: colors.morado,
      borderRadius: 18,
    },

    tittle: {
      fontSize: 28,
      color: colors.blanco,
      fontFamily: "Montserrat",
    },
  });
};
