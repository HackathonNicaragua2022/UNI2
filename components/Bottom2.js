import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../colors";

export default function ({ onPress, tittleCard }) {
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.container}>{tittleCard}</Text>
    </TouchableOpacity>
  );
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "flex-end",
      alignContent: "space-around",
      justifyContent: "center",
      height: "40%",
      width: "30%",
      backgroundColor: colors.rojo,
      borderRadius: 5,
      fontSize: 18,
    },
  });
};
