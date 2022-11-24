import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";

export default function ({ onPress, tittleCard }) {
  const styles = makeStyles(colors);

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.bottomContainer}>
        <Text style={styles.title}>{tittleCard}</Text>
      </TouchableOpacity>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    title: {
      fontSize: 20,
      color: colors.blanco,
      fontFamily: "Montserrat",
    },

    bottomContainer: {
      height: "100%",
      backgroundColor: colors.morado,
      alignItems: "center",
      justifyContent: "center",
      width: "45%",
      borderRadius: 18,
    },
  });
};
