import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import Bottom from "./Bottom";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ({ tittleHeader, navigation }) {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{tittleHeader}</Text>
      <Bottom
        onPress={() => {
          navigation.navigate("config");
        }}
      />
    </View>
  );
}

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "flex-end",
      height: hp("9%"),
      width: wp("100%"),
      paddingTop: hp(4),
      backgroundColor: colors.naranja,
    },

    textStyle: {
      fontSize: hp(4),
      color: colors.blanco,
      paddingRight: wp(24),
    },
  });
};
