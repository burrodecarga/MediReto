import { Link, } from 'expo-router'

import { useThemeColor } from '../hooks/useThemeColor'
import { LinkProps } from '@react-navigation/native'

interface Props extends LinkProps<string|object> { }

const ThemedLink=({ style, ...rest }: Props) => {
  const primaryColor=useThemeColor({}, 'primary')

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}
    />
  )
}
export default ThemedLink
