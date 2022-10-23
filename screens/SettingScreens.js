import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItem from "../components/CardItem";

const SettingScreen = ({ navigation }) => {
  const styles = makeStyles(colors);
  return (
    <View style>
      <CardItem style={styles.container} />
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      fontSize: 20,
      padding: "20%",
      backgroundColor: colors.aliceAzul,
    },
  });
};

export default SettingScreen;
