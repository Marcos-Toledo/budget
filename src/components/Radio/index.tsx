import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles";

export function Radio({ label }: { label?: string }) {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => setIsChecked(!isChecked)}
    >
      <View style={[styles.radio, isChecked && styles.checked]}>
        <MaterialIcons name="circle" size={8} style={styles.icon} />
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}
