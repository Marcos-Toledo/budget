import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

const { feedback, base } = colors

export const styles = StyleSheet.create({
  container: {
    ...typography.titleXs,
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  sent: {
    color: feedback["info-dark"],
    backgroundColor: feedback["info-light"]
  },
  "sent-icon": {
    color: feedback["info-base"]
  },
  draft: {
    color: base["gray-500"],
    backgroundColor: base["gray-300"]
  },
  "draft-icon": {
    color: base["gray-400"]
  },
  approved: {
    color: feedback["success-dark"],
    backgroundColor: feedback["success-light"]
  },
  "approved-icon": {
    color: feedback["success-base"]
  },
  reject: {
    color: feedback["danger-dark"],
    backgroundColor: feedback["danger-light"]
  },
  "reject-icon": {
    color: feedback["danger-base"]
  },
})
