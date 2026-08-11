import { TouchableOpacity, Text, ViewStyle } from "react-native";
import { SpriteIcon } from "@/components/Icon"
import { IconName } from "@/components/Icon/icons"

import { styles } from "./styles";

type Types = {
  primary: { color: string }
  secondary: { color: string }
  danger: { color: string }
}

type Props = {
  icon?: IconName
  label?: string
  type: "primary" | "secondary" | "danger" | Types
  style?: ViewStyle
}

export function Button({ label, type, icon = "calendar", style }: Props) {
  return (
    <TouchableOpacity style={[styles.container, style, styles[`${type}`]]} activeOpacity={0.8}>
      <SpriteIcon name={icon} color={styles[`${type}`].color} />
      {label && (
        <Text style={[styles.label, styles[`${type}`]]}>{label}</Text>
      )}
    </TouchableOpacity>
  )
}
