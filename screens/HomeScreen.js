import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItem from "../components/CardItem";
import Header from "../components/Header";

const HomeScreen = (navigation) => {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Header tittleHeader={"Rutas"} />
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
      height: "100%",
    },
  });
};
export default HomeScreen;
