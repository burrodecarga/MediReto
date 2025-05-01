import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Leccion } from '@/interfaces/interfaces'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import VideoCard from './VideoCard'

type Props = {
    item: Leccion
}

const LeccionesCard = ({ item }: Props) => {
    return (
        <ThemedView style={{ marginHorizontal: 10, padding: 10 }}>
            <VideoCard />
            <ThemedText type='subtitle'>{item.name}</ThemedText>
            <ThemedText>{item.description}</ThemedText>
        </ThemedView>
    )
}

export default LeccionesCard

const styles = StyleSheet.create({})