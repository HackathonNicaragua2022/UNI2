import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../colors";

export default function ({ onPress }) {
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={require("../assets/cuadro.png")}
        resizeMode={"contain"}
        style={{ width: "100%", height: "140%" }}
      />
    </TouchableOpacity>
  );
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      height: "8%",
      width: "30%",
      marginLeft: "25%",
    },
  });
};
