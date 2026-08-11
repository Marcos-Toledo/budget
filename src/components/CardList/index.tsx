import { View, Text } from "react-native"

import { Status } from "../Status"

import { typography } from "@/styles/typography"
import { colors } from "@/styles/colors"

import { formatValue } from "@/utils/formatCurrency"

const { titleMd, textSm, textXs } = typography
const { base } = colors

type DocumentItems = {
  id: string,
  description: string,
  qty: number,
  price: number
}

export type Document = {
  id: string,
  client: string,
  title: string,
  items: DocumentItems[],
  status: "sent" | "draft" | "approved" | "reject",
  createdAt: string,
  updatedAt: string
}

type Props = {
  item: Document
}

export function CardList({ item }: Props) {
  const { client, title, status, items } = item

  const total = items.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)

  return (
    <View style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: base["gray-200"],
        backgroundColor: base["gray-100"],
        marginBottom: 8
      }}>
      <View style={{ flex: 2, gap: 10, alignItems: "stretch" }}>
        <Text style={{ ...titleMd, color: base["gray-700"] }}>{title}</Text>
        <Text style={{ ...textSm, color: base["gray-600"] }}>{client}</Text>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end", height: "100%" }}>
        <Status status={status} style={{ position:"absolute", top: -8, right: -8 }} />
        <Text style={{ ...textXs }}>
          R$: <Text style={{ ...titleMd }}>{formatValue(total)}</Text>
        </Text>
      </View>
    </View>
  )
}
