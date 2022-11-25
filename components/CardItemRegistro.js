import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import TextInput from "./TextInput";
import TextInput2 from "./TextInput2";
import BottomPerfilRuta from "./BottomPerfilRuta";
import BottomLogin from "./BottomLogin";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ({
  tittleCard1,
  navigation,
  tittleCard2,
  tittleCard3,
  tittleCard4,
  tittleCard5,
  tittleCard6,
  tittleCard7,
}) {
  const styles = makeStyles(colors);

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{tittleCard1}</Text>
        <TextInput />
        <Text style={styles.titleStyle}>{tittleCard2}</Text>
        <TextInput />
        <Text style={styles.titleStyle}>{tittleCard3}</Text>
        <TextInput />
        <Text style={styles.titleStyle}>{tittleCard4}</Text>
        <TextInput />

        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text style={styles.titleStyle2}>{tittleCard5}</Text>
          <Text style={styles.titleStyle2}>{tittleCard6}</Text>
        </View>

        <View
          style={{
            width: wp("70%"),
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TextInput2 />
          <TextInput2 />
        </View>
        <Text style={styles.titleStyle3}>{tittleCard7}</Text>
        <BottomPerfilRuta />
        <View style={{ height: "35%", width: "99%", marginLeft: 35 }}>
          <BottomLogin tittle={"Registrarse"} />
        </View>
      </View>
    );
  }
}
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "baseline",
      justifyContent: "flex-start",
      backgroundColor: colors.blanco,
      borderRadius: 50,
      height: hp("73%"),
      width: wp("85%"),
      marginTop: hp("2%"),
      paddingLeft: wp("10%"),
    },
    titleStyle: {
      fontSize: hp("3%"),
      color: colors.rojo,
      paddingLeft: 20,
      paddingTop: 10,
      fontFamily: "Montserrat",
    },

    titleStyle2: {
      color: colors.rojo,
      paddingTop: 10,
      fontSize: hp("3%"),
      paddingVertical: 10,
      marginHorizontal: 10,
      fontFamily: "Montserrat",
    },
    titleStyle3: {
      fontSize: hp("3%"),
      color: colors.rojo,
      paddingLeft: 50,
      paddingTop: 10,
      fontFamily: "Montserrat",
    },
  });
};
