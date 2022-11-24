import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../colors";

export default function ({ onPress }) {
  const styles = makeStyles(colors);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
      height: "75%",
      width: "20%",
      paddingLeft: 30,
    },
  });
};
