import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";

export default function () {
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Administrador</Text>
      <Text style={styles.subtitleStyle}>Aviso Importante</Text>
      <Text></Text>
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
      marginVertical: "12%",
      marginHorizontal: "10%",
      borderRadius: 15,
    },
    titleStyle: {
      fontSize: 28,
      paddingTop: "5%",
      color: colors.rojo,
      borderColor: colors.negro,
    },
    subtitleStyle: {
      fontSize: 18,
      padding: 10,
      color: colors.negro,
      borderColor: colors.blancoAntiguo,
    },
  });
};
