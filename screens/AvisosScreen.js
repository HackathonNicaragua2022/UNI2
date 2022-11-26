import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useFonts } from "expo-font";

const AvisosScreen = () => {
  const styles = makeStyles(colors);

  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.tittle}>Crear anuncio</Text>
        <TextInput
          style={styles.textInput}
          placeholder={"Titulo del anuncio"}
          placeholderTextColor={colors.amarilloSecundario}
        />
        <TextInput
          style={styles.textInput2}
          placeholder={"Escriba el anuncio"}
          placeholderTextColor={colors.amarilloSecundario}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Publicar</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
const makeStyles = (color) => {
  return StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor: colors.morado,
      borderRadius: 28,
      height: hp(5),
      marginTop: hp(4),
      width: wp(80),
      justifyContent: "center",
      borderWidth: 1,
    },
    container: {
      height: hp("100%"),
      backgroundColor: colors.naranja,
      alignItems: "center",
    },

    textButton: {
      color: colors.blanco,
      fontFamily: "Montserrat",
      fontSize: hp(3),
    },

    textInput: {
      backgroundColor: colors.blanco,
      borderRadius: hp(5),
      borderWidth: 1,
      height: hp(6),
      width: wp(70),
      fontSize: hp(3.4),
      textAlign: "center",
    },

    textInput2: {
      textAlign: "center",
      backgroundColor: colors.blanco,
      borderRadius: hp(3),
      borderWidth: 1,
      fontSize: hp(3.4),
      height: hp(5),
      marginTop: hp(4),
      width: wp(70),
    },
    tittle: {
      color: colors.blanco,
      fontFamily: "Montserrat",
      fontSize: hp(4),
    },
  });
};
export default AvisosScreen;
