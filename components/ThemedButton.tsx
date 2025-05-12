import { Ionicons } from '@expo/vector-icons'
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native'
import { useThemeColor } from '../hooks/useThemeColor'

interface Props extends PressableProps {
  children: string
  icon?: keyof typeof Ionicons.glyphMap,
  loading?: boolean
}

const ThemedButton=({ children, icon, loading, ...rest }: Props) => {
  const primaryColor=useThemeColor({}, 'primary')

  return (
    <Pressable
      disabled={loading}
      style={({ pressed }) => [
        {
          backgroundColor: pressed? primaryColor+'40':primaryColor,
        },
        styles.button,
      ]}
      {...rest}
    >
      <Text style={{ color: 'white' }}>{children}</Text>

      {icon&&(
        <Ionicons
          name={icon}
          size={24}
          color="white"
          style={{ marginHorizontal: 5 }}
        />
      )}
    </Pressable>
  )
}
export default ThemedButton

const styles=StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

  },
})
