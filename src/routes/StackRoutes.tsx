import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"

import { Home } from "@/app/Home"

export type StackRouteList = {
  home: undefined
  budget: undefined | { id: string }
}

export type StackRoutesProps<T extends keyof StackRouteList> = NativeStackScreenProps<StackRouteList, T>

const Stack = createNativeStackNavigator<StackRouteList>()

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}
