import { View, ViewStyle } from "react-native";

export function ViewContainer({ children, style }: { children: React.ReactNode, style?: ViewStyle }) {
  return (
    <View style={{ width: "100%", paddingHorizontal: 20, ...style }}>{children}</View>
  )
}
