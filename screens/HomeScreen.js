import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { colors } from "../colors";
import CardItemRutas from "../components/CardItemRutas";

const HomeScreen = ({ navigation }) => {
  const styles = makeStyles(colors);

  const tittle = [
    { tittle: "Ruta 5" },
    { tittle: "Ruta 6" },
    { tittle: "Ruta 7" },
    { tittle: "Ruta 8" },
    { tittle: "Ruta 9" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tittle}
        renderItem={({ item, index }) => (
          <CardItemRutas tittleCard={item.tittle} />
        )}
      />
    </View>
  );
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.naranja,
      height: "100%",
    },
  });
};
export default HomeScreen;
