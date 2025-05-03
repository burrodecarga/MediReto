import { get_preguntas_por_examen } from '@/actions/examen-actions'
import ExamenCard from '@/components/ExamenCard'
import Indicador from '@/components/Indicador'
import { ThemedView } from '@/components/ThemedView'
import { Question } from '@/interfaces/interfaces'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'

const ExamenScreen=() => {
    const [loading, setLoading]=useState(false)
    const [preguntas, setPreguntas]=useState<Question[]>()
    const [parametro, setParametro]=useState('')
    const params=useLocalSearchParams()
    const { id }=params

    id&&setParametro(id as string)


    useEffect(() => {
        const getExamen=async () => {
            //console.log(params)
            if (id) {
                setLoading(true)
                const { data }=await get_preguntas_por_examen(id as string)
                setPreguntas(data)
                console.log(data)
                setLoading(false)

            }
        }

        getExamen()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parametro])

    if (loading) {
        return <Indicador />
    }

    return (
        <ThemedView >
            <Stack screenOptions={{ headerShown: false }} />

            <Text>ExamenScreen{id}</Text>
            <FlatList
                data={preguntas}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => <ExamenCard question={item} index={index} />}
            />

        </ThemedView>
    )
}

export default ExamenScreen

