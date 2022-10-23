import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreens";
import MapsScreen from "../screens/MapsScreen";


const Tab = createBottomTabNavigator();

function Mytabs() {
  return (
    <Tab.Navigator
      initialRouteName="Mapa"
      screenOptions={{ tabBarActiveTintColor: "#e84b1b" }}
    >
      <Tab.Screen
        name="EstadoRutas"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Avisos"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Mytabs />
    </NavigationContainer>
  );
}
