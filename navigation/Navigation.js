import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreens";
import ConfigScreen from "../screens/ConfigScreen";
import MapsScreen from "../screens/MapsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const stack = createStackNavigator();

function SettingNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="setting"
        component={SettingScreen}
      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="config"
        component={ConfigScreen}
      />
    </stack.Navigator>
  );
}
function MapsNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="maps"
        component={MapsScreen}
      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="config"
        component={ConfigScreen}
      />
    </stack.Navigator>
  );
}
function HomeNavigation() {
  return (
    <stack.Navigator>
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="home"
        component={HomeScreen}
      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="config"
        component={ConfigScreen}
      />
      <stack.Screen
        options={{
          headerShown: false,
        }}
        name="map"
        component={MapsNavigation}
      />
    </stack.Navigator>
  );
}

function Mytabs() {
  return (
    <Tab.Navigator
      initialRouteName="Mapa"
      screenOptions={{ tabBarActiveTintColor: "#e84b1b" }}
    >
      <Tab.Screen
        name="EstadoRutas"
        component={HomeNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Avisos"
        component={SettingNavigation}
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
