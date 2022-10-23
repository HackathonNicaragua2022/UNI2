import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import Bottom2 from "../components/Bottom2";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import MapView from "react-native-maps";

const MapsScreen = ({ navigation }) => {
  const styles = makeStyles();
  return (
    <View style={styles.container}>
      <Header tittleHeader={"INFOROUTE"} navigation={navigation} />
      <MapView style={styles.mapview} />
    </View>
  );
};
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      backgroundColor: colors.naranja,
      height: "100%",
    },
    containerButtons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "10%",
      width: "100%",
      paddingTop: 40,
      backgroundColor: colors.rojo,
    },

    styleBottom: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mapview: {
      height: "90%",
      width: "100%",
    },
  });
};

export default MapsScreen;
