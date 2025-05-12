import { useThemeColor } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
const BottonIconButton=() => {
  const primaryColor=useThemeColor({}, 'primary')



  return (
    <TouchableOpacity style={{ marginRight: 8 }} onPress={() => { }}>
      <Ionicons name="arrow-down-circle-outline" size={24} color={primaryColor} />
    </TouchableOpacity>
  )
}
export default BottonIconButton
