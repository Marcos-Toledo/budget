import { TouchableOpacity, Text } from "react-native";
import { SpriteIcon } from "@/components/Icon"

import { styles } from "./styles";

type Types = {
  primary: { color: string }
  secondary: { color: string }
  danger: { color: string }
}

type Props = {
  label: string
  type: "primary" | "secondary" | "danger" | Types
}

export function Button({ label, type }: Props) {
  return (
    <TouchableOpacity style={[styles.container, styles[`${type}`]]} activeOpacity={0.8}>
      <SpriteIcon name="sendUpRight" color={styles[`${type}`].color} />
      <Text style={[styles.label, styles[`${type}`]]}>{label}</Text>
    </TouchableOpacity>
  )
}
