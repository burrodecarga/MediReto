import { useThemeColor } from '@/hooks/useThemeColor'
import { Asignatura } from '@/interfaces/interfaces'
import React from 'react'
import { ScrollView, Text } from 'react-native'
import ThemeButton from './ThemeButton'
import { ThemedView } from './ThemedView'

interface Props {
    item: Asignatura,
    verLeccion: (id: string) => void

}
const AsignaturaCard=({ item, verLeccion }: Props) => {
    const primary=useThemeColor({}, 'primary')

    return (
        <ScrollView>
            <ThemedView style={{ flex: 1, padding: 4, marginHorizontal: 10, marginVertical: 15, borderColor: primary, borderBottomWidth: 1 }}>
                <Text style={{ textTransform: 'uppercase', fontWeight: '700' }}>{item.name}</Text>
                <ThemedView>
                    <Text>{item.description}</Text>
                </ThemedView>
                <ThemeButton onPress={() => verLeccion(item.id.toString())} style={{ backgroundColor: primary, borderColor: primary, borderWidth: 1, padding: 5, borderRadius: 5, marginVertical: 20, alignItems: 'center' }}>Ver lecciones</ThemeButton>
            </ThemedView>
        </ScrollView>
    )
}

export default AsignaturaCard

