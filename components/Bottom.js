import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../colors";

export default function ({ onPress }) {
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../assets/settingsblanco.png")}
        resizeMode={"contain"}
        style={{ width: "100%", height: "100%" }}
      />
    </TouchableOpacity>
  );
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "flex-end",
      justifyContent: "center",
      height: "65%",
      width: "10%",
    },
  });
};
