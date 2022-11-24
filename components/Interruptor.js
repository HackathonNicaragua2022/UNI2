import React from "react";
import { View, Switch } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { colors } from "../colors";

export default function Interruptor() {
  return (
    <View>
      <Switch
        trackColor={{ false: colors.blanco, true: colors.blanco }}
        thumbColor={colors.naranja}
        ios_backgroundColor={colors.blanco}
      />
    </View>
  );
}
