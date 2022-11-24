import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../colors";

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
      width: "100%",
      borderRadius: 28,
      borderColor: "gray",
    },
  });
};
