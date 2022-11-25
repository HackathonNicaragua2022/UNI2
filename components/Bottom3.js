import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
      fontSize: hp(2),
      color: colors.blanco,
      fontFamily: "Montserrat",
    },

    bottomContainer: {
      height: hp("4.4%"),
      backgroundColor: colors.morado,
      alignItems: "center",
      justifyContent: "center",
      width: wp("34%"),
      borderRadius: 18,
    },
  });
};
