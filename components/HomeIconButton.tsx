import { View, Text } from 'react-native'
import { useAuthStore } from '../store/useAuthStore'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'
import { router } from 'expo-router'
const HomeIconButton = () => {
  const primaryColor = useThemeColor({}, 'primary')


  return (
    <TouchableOpacity style={{ marginRight: 8 }} onPress={() => router.push('/(main)/(aulas)')}>
      <Ionicons name="home-outline" size={24} color={primaryColor} />
    </TouchableOpacity>
  )
}
export default HomeIconButton
