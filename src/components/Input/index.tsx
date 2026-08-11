import { useState, useEffect } from "react";
import { TextInput, View, Text } from 'react-native';

import { SpriteIcon } from "../Icon";
import { IconName } from "../Icon/icons";

import { colors } from "@/styles/colors";
import { styles } from "./styles";

const { base, principal, feedback } = colors

type Props = {
  icon?: IconName
  label?: string 
  placeholder?: string
  hasError?: boolean
}

export function Input({ placeholder = "Digite aqui...", hasError = false, icon = "calendar", label }: Props) {
  const [text, setText] = useState("")
  const [isFocused, setIsfocused] = useState(false)
  const [isError, setIsError] = useState(false)

  const hasText = text.length > 0
  const currentColor = 
    isError
    ? feedback["danger-base"]
    :(isFocused || hasText)
    ? principal["purple-base"]
    : base["gray-600"]

    const currentBorderColor = 
    isError
    ? feedback["danger-base"]
    :(isFocused || hasText)
    ? principal["purple-base"]
    : base["gray-300"]

  useEffect(() => {
    if (hasError) {
      setIsError(true)
    }

    setIsError(false)
  }, [hasError])

  return (
    <View style={[styles.container, { borderColor: currentBorderColor }]}>
      <SpriteIcon
        name={icon}
        color={currentColor}
      />
      {label && (
        <Text style={[styles.text, { color: currentColor }]}>R$</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(value) => setText(value)}
        onFocus={() => setIsfocused(true)}
        onBlur={() => setIsfocused(false)}
        value={text}
      />
    </View>
  )
}
