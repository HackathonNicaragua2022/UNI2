import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { colors } from "../colors";
import BottomLogin from "./BottomLogin";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithEmailAndPasword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebase";

export default function ({ tittleCard1, navigation, tittleCard2 }) {
  const styles = makeStyles(colors);
  const [email, setEmail] = React.useState("");
  const [pasword, setPasword] = React.useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const perfilRuta = () => {
    signInWithEmailAndPassword(auth, email, pasword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("ads");
      })
      .catch((error) => {
        console.log(error);
        alert("contraseña incorrecta");
      });
  };
  const [fontsLoaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.otf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{tittleCard1}</Text>
        <TextInput
          style={styles.containerTextInput}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <Text style={styles.titleStyle}>{tittleCard2}</Text>
        <TextInput
          style={styles.containerTextInput}
          onChangeText={(text) => setPasword(text)}
        ></TextInput>
        <BottomLogin
          tittle={"Iniciar Sesión"}
          onPress={() => {
            perfilRuta();
          }}
        />
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
      height: hp("43%"),
      width: wp("85%"),
      marginTop: hp("2%"),
      paddingLeft: wp("10%"),
      top: hp(6),
    },
    containerTextInput: {
      borderWidth: 1,
      height: hp(4),
      width: wp(65),
      borderRadius: 28,
      borderColor: "gray",
      fontSize: hp(1.5),
      fontFamily: "Montserrat",
      textAlign: "center",
    },
    titleStyle: {
      fontSize: hp("3%"),
      color: colors.rojo,
      paddingLeft: hp(2.5),
      paddingTop: hp(1),
      fontFamily: "Montserrat",
      marginBottom: hp(3),
    },
  });
};
