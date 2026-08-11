import {View, Text, FlatList } from "react-native"

import { ViewContainer } from "@/components/ViewContainer"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { CardList, Document } from "@/components/CardList"

import { typography } from "@/styles/typography"
import { colors } from "@/styles/colors"

import { data } from "@/data"

const { titleLg, textSm } = typography
const { principal, base } = colors

export function Home() {
  return (
    <View style={{ paddingTop: 47 }}>
      <ViewContainer style={{
          paddingVertical: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          borderBottomWidth: 1,
          borderBottomColor: base["gray-200"]
        }}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...titleLg, color: principal["purple-base"] }}>Orçamentos</Text>
          <Text style={{ ...textSm, color: base["gray-500"] }}>Você tem 1 em rascunho</Text>
        </View>
        <Button label="Novo" type="primary" icon="plus" />
      </ViewContainer>

      <ViewContainer style={{ paddingVertical: 24, flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Input placeholder="Título ou cliente" icon="search" />
        <Button type="secondary" icon="filterSettings" style={{ flex: 0 }} />
      </ViewContainer>

      <ViewContainer>
        <FlatList
          data={data as Document[]}
          renderItem={({ item }: { item: Document }) => <CardList item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingBottom: 400,
          }}
          showsVerticalScrollIndicator={false}
        />
      </ViewContainer>
    </View>
  )
}
