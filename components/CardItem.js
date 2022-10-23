import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";

export default function ({ tittleCard, subTittleCard, body }) {
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{tittleCard}</Text>
      <Text style={styles.subtitleStyle}>{subTittleCard}</Text>
      <Text style={styles.bodyStyle}> {body} </Text>
    </View>
  );
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      backgroundColor: colors.aquaMarina,
      marginVertical: "5%",
      marginHorizontal: "5%",
      borderRadius: 12,
      height: "20%",
      width: "80%",
    },
    titleStyle: {
      fontSize: 28,
      color: colors.rojo,
      borderColor: colors.negro,
    },
    subtitleStyle: {
      fontSize: 18,
      padding: 10,
      color: colors.negro,
    },
    bodyStyle: {
      fontSize: 12,
      fontStyle: "italic",
      paddingLeft: 5,
    },
  });
};
