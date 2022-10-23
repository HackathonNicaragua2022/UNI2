import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import Bottom from "./Bottom";
import Bottom2 from "./Bottom2";

export default function ({ tittleHeader }) {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Bottom2 style={styles.container} />
    </View>
  );
}

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20%",
      height: "100%",
      backgroundColor: colors.naranja,
    },

    textStyle: {
      fontSize: 35,
      color: colors.blanco,
      paddingLeft: 120,
    },
  });
};
