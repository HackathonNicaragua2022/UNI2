import * as React from "react";
import * as Location from "expo-location";
import { View, StyleSheet } from "react-native";
import { colors } from "../colors";
import MapView, { Marker } from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const rutaImage = require("../assets/autobus-escolar-3.png");
const userImage = require("../assets/persona-2.png");
const MapsScreen = ({ navigation }) => {
  const styles = makeStyles();
  const [origin, setOrigin] = React.useState({
    latitude: 12.102492,
    longitude: -85.3687,
  });

  const [destination, setDestination] = React.useState({
    latitude: 12.103593,
    longitude: -85.375625,
  });

  React.useEffect(() => {
    getLocationPermision();
  }, []);

  async function getLocationPermision() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("permiso denegado");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setOrigin(current);
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapview}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.019,
        }}
      >
        <Marker
          draggable={false}
          coordinate={origin}
          image={userImage}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
          draggable={true}
          coordinate={destination}
          image={rutaImage}
          onDragEnd={(direction) =>
            setDestination(direction.nativeEvent.coordinate)
          }
        />
      </MapView>
    </View>
  );
};
const makeStyles = (color) => {
  return StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      backgroundColor: colors.naranja,
      height: "100%",
    },
    mapview: {
      height: hp("100%"),
      width: wp("100%"),
    },
  });
};

export default MapsScreen;
