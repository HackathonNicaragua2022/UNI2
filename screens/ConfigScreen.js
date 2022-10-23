import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import CardItem from "../components/CardItem";
import Header from "../components/Header";

const SettingScreen = ({ navigation }) => {
  const styles = makeStyles(colors);
  return (
    <View style={styles.container}>
      <Text>ola mundo</Text>
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      height: "100%",
      color: colors.naranja,
      alignItems: "center",
    },
  });
};

export default SettingScreen;
