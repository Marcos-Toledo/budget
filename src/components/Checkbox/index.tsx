import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles";

export function Checkbox({ label }: { label?: "label" | string }) {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => setIsChecked(!isChecked)}
    >
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        <MaterialIcons name="check" size={16} style={styles.icon} />
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}
