import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import Indicador from '@/components/Indicador'
import { ThemedView } from '@/components/ThemedView'
import { Question } from '@/interfaces/interfaces'
import ExamenCard from '@/components/ExamenCard'
import { get_preguntas_por_examen } from '@/actions/examen-actions'

const ExamenScreen=() => {
    const [loading, setLoading]=useState(false)
    const [preguntas, setPreguntas]=useState<Question[]>()
    const params=useLocalSearchParams()
    const { id }=params


    const getExamen=async () => {
        console.log(params)
        if (id) {
            setLoading(true)
            const { data }=await get_preguntas_por_examen(id as string)
            setPreguntas(data)
            console.log(data)
            setLoading(false)

        }
    }

    useEffect(() => {
        getExamen()
    }, [id,])

    if (loading) {
        return <Indicador />
    }

    return (
        <ThemedView >
            <Stack.Screen options={{ headerShown: true }} />

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

const styles=StyleSheet.create({})