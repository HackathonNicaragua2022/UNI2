import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import Bottom from "./Bottom";

export default function ({ tittleHeader }) {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{tittleHeader}</Text>
      <Bottom />
    </View>
  );
}

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      height: "10%",
      width: "100%",
      paddingTop: 35,
      backgroundColor: colors.azul,
    },

    textStyle: {
      fontSize: 35,
      color: colors.blanco,
      paddingLeft: 135,
    },
  });
};
