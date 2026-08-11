import { View, Text, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export enum StatusEnum {
  sent = "Enviado",
  draft = "Rascunho",
  approved = "Aprovado",
  reject = "Recusado"
}

export type StatusProps = {
  status: "sent" | "draft" | "approved" | "reject",
  style?: ViewStyle
}

export function Status({ status, style }: StatusProps) {
  return (
    <View style={[styles.container, style, styles[status]]}>
      <MaterialIcons name="circle" size={12} style={styles[`${status}-icon`]} />
      <Text>{StatusEnum[status]}</Text>
    </View>
  )
}
