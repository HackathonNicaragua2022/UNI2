import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import CardItemRutas from "../components/CardItemRutas";

const HomeScreen = ({ navigation }) => {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Header tittleHeader={"Rutas"} navigation={navigation} />
      <CardItemRutas tittleCard={"Ruta 5"} navigation={navigation} />
      <CardItemRutas tittleCard={"Ruta 6"} navigation={navigation} />
      <CardItemRutas tittleCard={"Ruta 7"} navigation={navigation} />
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "flex-start",
      display: "flex",
      backgroundColor: colors.naranja,
      height: "100%",
    },
  });
};
export default HomeScreen;
