import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItemRegistro from "../components/CardItemRegistro";

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
      height: "100%",
      backgroundColor: colors.naranja,
      alignItems: "center",
    },
  });
};

export default RegistroScreen;
