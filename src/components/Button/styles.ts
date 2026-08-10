import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

const { principal, base, feedback } = colors
const { titleSm } = typography

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderRadius: 99,
    borderColor: base["gray-300"],
    backgroundColor: base["gray-100"]
  },
  label: {
    ...titleSm,
    paddingHorizontal: 8,
  },
  primary: {
    color: base["white"],
    borderColor: principal["purple-base"],
    backgroundColor: principal["purple-base"]
  },
  secondary: {
    color: principal["purple-base"],
  },
  danger: {
    color: feedback["danger-base"]
  }
})
