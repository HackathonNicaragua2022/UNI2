import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ({ onPress }) {
  const styles = makeStyles(colors);

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.tittle}>Preguntas Frecuentes</Text>
      </TouchableOpacity>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: "8%",
      width: wp("78%"),
      backgroundColor: colors.morado,
      borderRadius: 30,
      marginTop: 30,
    },

    tittle: {
      fontSize: hp(3),
      color: colors.blanco,
      fontFamily: "Montserrat",
    },
  });
};
