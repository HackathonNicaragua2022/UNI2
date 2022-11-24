import Header2 from "../components/Header2";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItemConfig from "../components/cardItemConfig";
import CardItemNotis from "../components/CardItemNotis";
import BottomPoliticas from "../components/BottomPoliticas";
import BottomPreguntas from "../components/BottomPreguntas";

const SettingScreen = ({ navigation }) => {
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <CardItemConfig
        tittleCard={"Cuenta Ruta"}
        navigation={navigation}
      ></CardItemConfig>
      <CardItemNotis></CardItemNotis>
      <BottomPoliticas></BottomPoliticas>
      <BottomPreguntas></BottomPreguntas>
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      backgroundColor: colors.naranja,
      alignItems: "center",
    },
  });
};

export default SettingScreen;
