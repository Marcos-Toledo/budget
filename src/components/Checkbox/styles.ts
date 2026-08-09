import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

const { base, principal } = colors

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: base["gray-400"],
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  },
  checked: {
    borderColor: principal["purple-base"],
    backgroundColor: principal["purple-base"]
  },
  icon: {
    color: base["gray-100"]
  }
})
