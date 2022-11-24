import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";

export default function ({ onPress }) {
  const styles = makeStyles(colors);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.tittle}>Registrarse</Text>
      </TouchableOpacity>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "20%",
      width: "60%",
      backgroundColor: colors.blanco,
      borderWidth: 1,
      borderRadius: 28,
    },

    tittle: {
      fontSize: 28,
      color: colors.morado,
      fontFamily: "Montserrat",
    },
  });
};
