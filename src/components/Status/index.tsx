import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export enum StatusEnum {
  sent = "Enviado",
  draft = "Rascunho",
  approved = "Aprovado",
  reject = "Recusado"
}

type StatusProps = {
  status: "sent" | "draft" | "approved" | "reject",
}

export function Status({ status }: StatusProps) {
  return (
    <View style={[styles.container, styles[status]]}>
      <MaterialIcons name="circle" size={12} style={styles[`${status}-icon`]} />
      <Text>{StatusEnum[status]}</Text>
    </View>
  )
}
