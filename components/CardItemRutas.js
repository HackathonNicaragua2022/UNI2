import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Bottom2 from "./Bottom2";
import { colors } from "../colors";
import Bottom3 from "./Bottom3";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ({ tittleCard, navigation }) {
  const styles = makeStyles(colors);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{tittleCard}</Text>
        <Image
          source={require("../assets/Ruta.png")}
          resizeMode={"contain"}
          style={{ width: wp(50), height: hp("12%"), marginTop: hp(0.1) }}
        />
        <View
          style={{
            flexDirection: "row",
            height: hp("4.6%"),
            width: wp("80%"),
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
      height: hp("24%"),
      width: wp("80%"),
      marginVertical: hp(1),
    },
    titleStyle: {
      fontSize: hp(4),
      color: colors.rojo,
      fontFamily: "Montserrat",
    },
  });
};
