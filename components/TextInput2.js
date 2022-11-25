import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function () {
  const styles = makeStyles(colors);
  return (
    <View style={{ width: "45%" }}>
      <TextInput style={styles.container}></TextInput>
    </View>
  );
}
const makeStyles = (colors) => {
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      height: 35,
      width: wp("29%"),
      borderRadius: 28,
      borderColor: "gray",
    },
  });
};
