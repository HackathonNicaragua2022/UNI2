import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
      height: hp("5%"),
      width: wp("9%"),
      marginRight: wp(5),
    },
  });
};
