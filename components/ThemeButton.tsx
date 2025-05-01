import { Button, ButtonProps, Pressable, PressableProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useThemeColor } from '@/hooks/useThemeColor'
interface Props extends PressableProps {
    icon?: keyof typeof Ionicons.glyphMap
    children: string

}
const ThemeButton = ({ icon, children, ...rest }: Props) => {
    const primaryColor = useThemeColor({}, 'primary')
    const textColor = useThemeColor({}, 'text')

    return (

        <Pressable
            style={({ pressed }) => [{
                backgroundColor: pressed ? primaryColor + '50' : primaryColor,
            }, styles.button]}{...rest}
        >
            <Text style={{ color: 'white' }}>
                {children}</Text>
            {icon && (
                <Ionicons
                    name={icon}
                    size={24}
                    color='white'
                    style={{
                        marginHorizontal: 12

                    }}
                />

            )}

        </Pressable>

    )
}

export default ThemeButton

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    }
})