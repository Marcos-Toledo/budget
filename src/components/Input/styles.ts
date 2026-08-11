import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

const { base } = colors
const { titleMd, textMd } = typography

export const styles = StyleSheet.create({
  container: {
    color: base["gray-600"],
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 99,
    borderColor: base["gray-300"],
    backgroundColor: base["gray-100"]
  },
  text: {
    ...titleMd,
  },
  input: {
    ...textMd,
    lineHeight: 0
  },
});
