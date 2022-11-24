import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { colors } from "../colors";
import CardItem from "../components/CardItem";
import Header from "../components/Header";

const SettingScreen = ({ navigation }) => {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Header tittleHeader={"Avisos"} navigation={navigation} />
      <ScrollView>
        <View style={styles.scroll}>
          <CardItem
            tittleCard={"Administrador"}
            subTittleCard={"Aviso Importante"}
            body={
              "Se reanuda el uso de Mascarilla debido a ola masiva de COVID-19"
            }
          />
          <CardItem
            tittleCard={"Alcaldia Municipal"}
            subTittleCard={"Nuevos Transportes"}
            body={
              "El gobierno de Reconciliacion y Unidad Nacional realizo una donacion de 7 buses"
            }
          />
          <CardItem
            tittleCard={"Ministerio de Transporte"}
            subTittleCard={"Sube el Costo del Pasaje"}
            body={"A partir de la proxima semana el pasaje subira a 7 Cordobas"}
          />

          <CardItem
            tittleCard={"Alcaldia Municipal"}
            subTittleCard={"Nuevos Transportes"}
            body={
              "El gobierno de Reconciliacion y Unidad Nacional realizo una donacion de 7 buses"
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.naranja,
      height: "100%",
      paddingLeft: 10,
    },

    scroll: {
      alignItems: "center",
      justifyContent: "space-between",
    },
  });
};

export default SettingScreen;
