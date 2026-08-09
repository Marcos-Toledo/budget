import {View, Text} from "react-native"
import { Checkbox } from "@/components/Checkbox"

export function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ola, mundo!</Text>
      <Checkbox />
    </View>
  )
}
