import React from "react";
import { View, StyleSheet } from "react-native";
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
        tittleCard2={"Correo"}
        tittleCard3={"Contraseña"}
        tittleCard4={"Confirmar"}
        tittleCard5={"Contrato"}
        tittleCard6={"N Ruta"}
        tittleCard7={"Perfil Ruta"}
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
