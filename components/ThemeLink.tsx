import React from 'react'
import { Link, LinkProps } from 'expo-router'
import { useThemeColor } from '../hooks/useThemeColor'
interface Props extends LinkProps { }

const ThemeLink = ({ href, style, ...rest }: Props) => {
    const primaryColor = useThemeColor({}, 'primary')
    const textColor = useThemeColor({}, 'text')
    return (
        <Link
            href={href}
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

export default ThemeLink

