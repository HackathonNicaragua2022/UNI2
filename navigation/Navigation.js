import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreens";
import ConfigScreen from "../screens/ConfigScreen";
import MapsScreen from "../screens/MapsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../colors";
import RegistroScreen from "../screens/RegistroScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
          headerStyle: {
            backgroundColor: colors.naranja,
          },
          headerTintColor: colors.blanco,
          headerTitleStyle: {
            fontSize: 33,
          },
          headerBackTitleStyle: {
            fontSize: 25,
          },
          headerTitle: "Ajustes",
          headerBackTitle: "Avisos",
        }}
        name="config"
        component={ConfigScreen}
      />
      <stack.Screen
        name="registro"
        component={RegistroScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.naranja,
          },
          headerTintColor: colors.blanco,
          headerTitleStyle: {
            fontSize: 33,
          },
          headerBackTitleStyle: {
            fontSize: 25,
          },
          headerTitle: "Registro",
        }}
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
      screenOptions={{
        tabBarActiveBackgroundColor: colors.blanco,
        tabBarInactiveBackgroundColor: colors.naranja,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.naranja,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="EstadoRutas"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="bus-alt" size={34} color={colors.rojo} />
          ),
          headerStyle: {
            backgroundColor: colors.naranja,
          },
          headerTintColor: colors.blanco,
          headerTitleStyle: {
            fontSize: 33,
          },
          headerBackTitleStyle: {
            fontSize: 25,
          },
          headerTitle: "Registro",
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapsNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="route" size={32} color={colors.rojo} />
          ),
        }}
      />
      <Tab.Screen
        name="Avisos"
        component={SettingNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="bus-alert" size={34} color={colors.rojo} />
          ),
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
