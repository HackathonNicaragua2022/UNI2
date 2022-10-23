import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import Bottom from "../components/Bottom";

const SettingScreen = ({ navigation }) => {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Header tittleHeader={"Avisos"} />
      <CardItem
        tittleCard={"Administrador"}
        subTittleCard={"Aviso Importante"}
        body={"Se reanuda el uso de Mascarilla debido a ola masiva de Covid-19"}
      />
      <CardItem
        tittleCard={"Alcaldia Municipal"}
        subTittleCard={"Nuevas Transportes"}
        body={
          "El gobierno de Reconciliacion y Unidad Nacional realizo una donacion de 7 buses"
        }
      />
      <CardItem
        tittleCard={"Ministerio de Transporte"}
        subTittleCard={"Sube el Costo del Pasaje"}
        body={"A partir de la proxima semana el pasaje subira a 7 Cordobas"}
      />
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "flex-start",
      display: "flex",
      backgroundColor: colors.azul,
      height: "100%",
    },
  });
};

export default SettingScreen;
