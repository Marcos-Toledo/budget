import {View, Text} from "react-native"
import { typography } from "@/styles/typography"
import { Input } from "@/components/Input"

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ ...typography.textXs }}>Ola, mundo!</Text>
      <Input />
    </View>
  )
}
