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
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.tittle}>Iniciar Sesión</Text>
      </TouchableOpacity>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      height: hp("6%"),
      width: wp("60%"),
      backgroundColor: colors.blanco,
      borderWidth: 1,
      borderRadius: 28,
    },

    tittle: {
      fontSize: hp(3),
      color: colors.morado,
      fontFamily: "Montserrat",
    },
  });
};
