import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import * as SplashScreen from "expo-splash-screen"
import { Lato_400Regular, Lato_700Bold, useFonts } from "@expo-google-fonts/lato"
import { StackRoutes } from "./StackRoutes"

SplashScreen.preventAutoHideAsync()

export function Routes() {
  const [loaded, error] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
