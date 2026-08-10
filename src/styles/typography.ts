import { StyleSheet } from "react-native"

// 1. Função utilitária que calcula os 140% (multiplica por 1.4)
const createFont = (fontFamily: string, fontSize: number) => ({
  fontFamily,
  fontSize,
  lineHeight: Math.round(fontSize * 1.4 * 10) / 10, // Garante números limpos como 22.4
})

// 2. Aplicação direta no seu objeto de tipografia
export const typography = StyleSheet.create({
  titleLg: createFont("Lato_700Bold", 18),
  titleMd: createFont("Lato_700Bold", 16),
  titleSm: createFont("Lato_700Bold", 14),
  titleXs: createFont("Lato_700Bold", 12),

  textMd: createFont("Lato_400Regular", 16),
  textSm: createFont("Lato_400Regular", 14),
  textXs: createFont("Lato_400Regular", 12),
})
