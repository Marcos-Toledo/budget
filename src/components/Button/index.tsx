import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons/";
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
    <TouchableOpacity style={[styles.container, styles[`${type}`]]}>
      <SpriteIcon name="sendUpRight" color={styles[`${type}`].color} strokeWidth={1.5} />
      <Text style={[styles.label, styles[`${type}`]]}>{label}</Text>
    </TouchableOpacity>
  )
}
