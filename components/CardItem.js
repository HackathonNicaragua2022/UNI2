import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";

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
      marginVertical: "5%",
      borderRadius: 18,
      height: "23%",
      width: "82%",
    },
    titleStyle: {
      fontSize: 28,
      color: colors.rojo,
      marginTop: 12,
      fontFamily: "Montserrat",
    },
    subtitleStyle: {
      fontSize: 24,
      paddingTop: 10,
      color: colors.negro,
      fontFamily: "Montserrat",
    },
    bodyStyle: {
      fontSize: 15,
      paddingLeft: 5,
      paddingTop: 10,
      fontFamily: "Montserrat",
    },
  });
};
