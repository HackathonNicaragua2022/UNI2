import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItem from "../components/CardItem";

const HomeScreen = (navigation) => {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>aqui va la actividad de cada ruta</Text>
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.azulClaro,
    },
    title: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      fontSize: 20,
      padding: "20%",
    },
  });
};
export default HomeScreen;
