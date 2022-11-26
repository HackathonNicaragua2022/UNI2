import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../colors";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const StackScreen = ({ tittleCard }) => {
  const styles = makeStyles(colors);
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <Text style={styles.tittle}>Ruta 5</Text>
          <Image
            source={require("../assets/Ruta.png")}
            resizeMode={"contain"}
            style={{ width: wp(50), height: hp("22%"), marginTop: hp(0.1) }}
          />
        </View>
        <View style={styles.containerRating}>
          <Text style={styles.tittleRating}>Valoracion</Text>
        </View>
      </View>
    );
  }
};

const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      height: hp("90%"),
      backgroundColor: colors.naranja,
      alignItems: "center",
    },
    containerCard: {
      backgroundColor: colors.blanco,
      borderRadius: 28,
      height: hp(42),
      marginTop: hp(3),
      width: wp(80),
      alignItems: "center",
    },

    containerRating: {
      height: hp(15),
      justifyContent: "center",
      top: hp(20),
    },

    tittle: {
      color: colors.naranja,
      fontSize: hp(4),
      fontFamily: "Montserrat",
      paddingTop: hp(3),
    },

    tittleRating: {
      color: colors.blanco,
      fontFamily: "Montserrat",
      fontSize: hp(4),
    },
  });
};
export default StackScreen;
