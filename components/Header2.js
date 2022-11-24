import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";

export default function ({ tittleHeader }) {
  const styles = makeStyles(colors);

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{tittleHeader}</Text>
      </View>
    );
  }
}

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "8%",
      backgroundColor: colors.naranja,
      paddingTop: 30,
    },

    textStyle: {
      fontSize: 30,
      color: colors.blanco,
      fontFamily: "Montserrat",
    },
  });
};
