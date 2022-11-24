import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Bottom2 from "./Bottom2";
import { colors } from "../colors";
import Bottom3 from "./Bottom3";
import { useFonts } from "expo-font";

export default function ({ tittleCard, navigation }) {
  const styles = makeStyles(colors);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{tittleCard}</Text>
        <View
          style={{
            flexDirection: "row",
            height: "18%",
            width: "98%",
            justifyContent: "space-evenly",
          }}
        >
          <Bottom2
            onPress={() => {
              navigation.navigate("map");
            }}
            tittleCard={"Recorrido"}
          />
          <Bottom3
            onPress={() => {
              navigation.navigate("map");
            }}
            tittleCard={"Información"}
          />
        </View>

        <Image
          source={require("../assets/Ruta.png")}
          resizeMode={"contain"}
          style={{ width: "70%", height: "50%", marginTop: 10 }}
        />
      </View>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: colors.blanco,
      borderRadius: 18,
      height: "80%%",
      width: "90%",
      marginLeft: 10,
    },
    titleStyle: {
      fontSize: 35,
      color: colors.rojo,
      fontFamily: "Montserrat",
    },
  });
};
