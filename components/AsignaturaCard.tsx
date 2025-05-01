import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Asignatura } from '@/interfaces/interfaces'
import { ThemedView } from './ThemedView'
import ThemeLink from './ThemeLink'
import ThemeButton from './ThemeButton'
import { useThemeColor } from '@/hooks/useThemeColor'

interface Props {
    item: Asignatura,
    verLeccion: (id: string) => void

}
const AsignaturaCard = ({ item, verLeccion }: Props) => {
    const primary = useThemeColor({}, 'primary')

    return (
        <ScrollView>
            <ThemedView style={{ flex: 1, padding: 4, marginHorizontal: 10, marginVertical: 15, borderColor: primary, borderBottomWidth: 1 }}>
                <Text style={{ textTransform: 'uppercase', fontWeight: '700' }}>{item.name}</Text>
                <ThemedView>
                    <Text>{item.description}</Text>
                </ThemedView>
                <ThemeButton onPress={() => verLeccion(item.id.toString())} style={{ backgroundColor: primary, borderColor: primary, borderWidth: 1, padding: 5, borderRadius: 5, marginVertical: 20 }}>Ver lecciones</ThemeButton>
            </ThemedView>
        </ScrollView>
    )
}

export default AsignaturaCard

const styles = StyleSheet.create({})