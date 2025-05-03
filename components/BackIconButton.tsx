import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { TouchableOpacity } from 'react-native'
const BackIconButton=() => {
  const primaryColor=useThemeColor({}, 'primary')



  return (
    <TouchableOpacity style={{ marginRight: 8 }} onPress={router.back}>
      <Ionicons name="arrow-back-circle-outline" size={24} color={primaryColor} />
    </TouchableOpacity>
  )
}
export default BackIconButton
