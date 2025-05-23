import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
const HomeIconButton=() => {
  const primaryColor=useThemeColor({}, 'primary')


  return (
    <TouchableOpacity style={{ paddingRight: 8 }} onPress={() => router.push('/(main)/(aulas)')}>
      <Ionicons name="home-outline" size={24} color={primaryColor} />
    </TouchableOpacity>
  )
}
export default HomeIconButton
