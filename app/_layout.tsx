import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import HomeIconButton from '@/components/HomeIconButton'
import LogoutIconButton from '@/components/LogoutIconButton'
import { useColorScheme } from '@/hooks/useColorScheme.web'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {

  const colorScheme=useColorScheme()
  const [loaded]=useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
    KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
    KanitThin: require('../assets/fonts/Kanit-Thin.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider value={colorScheme==='dark'? DarkTheme:DefaultTheme}>
        <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
          <Stack screenOptions={{ headerShown: false }}>

            <Stack.Screen name="(main)" options={{ title: 'Asignaturas', headerTitleAlign: 'center', headerLeft: () => <LogoutIconButton />, headerRight: () => <HomeIconButton />, headerShown: false }
            } />
          </Stack>
          <StatusBar style="auto" />
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  )

}


