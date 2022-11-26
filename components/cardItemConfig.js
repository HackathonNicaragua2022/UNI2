import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import BottomLogin from "./BottomLogin";
import BottomRegister from "./bottomRegister";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ({ tittleCard, navigation }) {
  const styles = makeStyles(colors);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{tittleCard}</Text>
        <BottomRegister
          onPress={() => {
            navigation.navigate("registro");
          }}
        />
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
      height: hp("25%"),
      width: wp("80%"),
      marginTop: hp(2),
    },
    titleStyle: {
      fontSize: hp(4),
      color: colors.rojo,
      fontFamily: "Montserrat",
    },
  });
};
