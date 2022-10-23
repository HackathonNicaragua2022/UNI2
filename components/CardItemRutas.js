import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Bottom2 from "./Bottom2";
import { colors } from "../colors";

export default function ({ tittleCard, subTittleCard, body, navigation }) {
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{tittleCard}</Text>
      <Bottom2
        onPress={() => {
          navigation.navigate("map");
        }}
        tittleCard={"Recorrido"}
        style={{ paddingLeft: 100 }}
      />
      <Image
        source={require("../assets/Ruta.png")}
        resizeMode={"contain"}
        style={{ width: "90%", height: "58%" }}
      />
    </View>
  );
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      backgroundColor: colors.blanco,
      margin: "8%",
      paddingVertical: 10,
      borderRadius: 12,
      height: "20%",
      width: "75%",
    },
    titleStyle: {
      fontSize: 28,
      color: colors.rojo,
      borderColor: colors.negro,
    },
    subtitleStyle: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
      display: "flex",
      backgroundColor: colors.blanco,
      marginBottom: 20,
      marginVertical: "5%",
      borderRadius: 12,
      height: "20%",
      width: "60%",
    },
    bodyStyle: {
      fontSize: 12,
      paddingLeft: 5,
    },
  });
};
