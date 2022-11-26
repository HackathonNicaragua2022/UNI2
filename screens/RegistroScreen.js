import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../colors";
import CardItemRegistro from "../components/CardItemRegistro";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RegistroScreen = ({ navigation }) => {
  const styles = makeStyles(colors);

  return (
    <View style={styles.container}>
      <CardItemRegistro
        tittleCard1={"Usuario"}
        tittleCard2={"Contraseña"}
        navigation={navigation}
      />
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      height: hp("90%"),
      backgroundColor: colors.naranja,
      alignItems: "center",
    },
  });
};

export default RegistroScreen;
