import { Leccion } from '@/interfaces/interfaces'
import React from 'react'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'
import YoutubeCard from './YoutubeCard'

type Props={
    item: Leccion
}

const LeccionesCard=({ item }: Props) => {
    return (
        <ThemedView style={{ marginHorizontal: 10, padding: 10 }}>
            <YoutubeCard />
            <ThemedText type='subtitle'>{item.name}</ThemedText>
            <ThemedText>{item.description}</ThemedText>
        </ThemedView>
    )
}

export default LeccionesCard

