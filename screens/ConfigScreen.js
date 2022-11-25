import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../colors";
import CardItemConfig from "../components/cardItemConfig";
import CardItemNotis from "../components/CardItemNotis";
import BottomPoliticas from "../components/BottomPoliticas";
import BottomPreguntas from "../components/BottomPreguntas";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SettingScreen = ({ navigation }) => {
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <CardItemConfig tittleCard={"Cuenta Ruta"} navigation={navigation} />
      <CardItemNotis />
      <BottomPoliticas></BottomPoliticas>
      <BottomPreguntas></BottomPreguntas>
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      height: hp("100%"),
      backgroundColor: colors.naranja,
      alignItems: "center",
    },
  });
};

export default SettingScreen;
