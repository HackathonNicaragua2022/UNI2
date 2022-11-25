import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ({ tittleCard, subTittleCard, body }) {
  const styles = makeStyles(colors);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{tittleCard}</Text>
        <Text style={styles.subtitleStyle}>{subTittleCard}</Text>
        <Text style={styles.bodyStyle}> {body} </Text>
      </View>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: colors.blanco,
      marginVertical: hp("2%"),
      borderRadius: 18,
      height: hp("23%"),
      width: wp("82%"),
    },
    titleStyle: {
      fontSize: hp(3),
      color: colors.rojo,
      marginTop: hp(1),
      fontFamily: "Montserrat",
    },
    subtitleStyle: {
      fontSize: hp(2.3),
      margingTop: hp(1.5),
      color: colors.negro,
      fontFamily: "Montserrat",
    },
    bodyStyle: {
      fontSize: hp(1.8),
      paddingHorizontal: wp(2),
      paddingTop: hp(1),
      fontFamily: "Montserrat",
    },
  });
};
