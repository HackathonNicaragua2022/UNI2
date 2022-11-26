import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export default function ({ onPress, tittle }) {
  const styles = makeStyles(colors);

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.tittle}>{tittle}</Text>
      </TouchableOpacity>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: colors.morado,
      borderRadius: 18,
      height: hp("5%"),
      justifyContent: "center",
      marginTop: hp(4),
      width: wp("60%"),
    },

    tittle: {
      fontSize: hp(3.3),
      color: colors.blanco,
      fontFamily: "Montserrat",
    },
  });
};
