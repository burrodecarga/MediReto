import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { getExamenAPresentar } from '@/actions/leccion-actions'
import { ThemedText } from '@/components/ThemedText'
import Indicador from '@/components/Indicador'
import { Examen } from '@/interfaces/interfaces'
import { ThemedView } from '@/components/ThemedView'
import ThemeButton from '@/components/ThemeButton'

const EvaluacionesScreen=() => {
    const params=useLocalSearchParams()
    const { teacher_id, asignatura_id }=params


    //const [loading, setLoading]=useState(false)
    // const [examen, setExamen]=useState<Examen>()





    // const getExamen=async () => {

    //     if (teacher_id&&asignatura_id) {

    //         setLoading(true)
    //         const { data }=await getExamenAPresentar(asignatura_id as string, teacher_id as string)
    //         setExamen(data)
    //         //console.log(data)
    //         setLoading(false)

    //     }
    // }



    // useEffect(() => {

    //     // getExamen()
    // }, [asignatura_id, teacher_id])

    if (!teacher_id||!asignatura_id) {
        return <Indicador />
    }
    //console.log(examen?.asignatura)
    return (
        <ThemedView>
            <ThemedView style={{ marginHorizontal: 10, padding: 5, marginVertical: 20 }}>
                {/* <ThemedText type='subtitle' style={{ textTransform: 'uppercase' }}>{examen?.asignatura}</ThemedText>
                <ThemedText>{examen?.name}</ThemedText>
                <ThemedText style={{ fontStyle: 'italic', fontSize: 12 }}>{examen?.description}</ThemedText>
                <ThemedText style={{ fontStyle: 'italic', fontSize: 12 }}>{examen?.level}</ThemedText> */}
                <View style={{ height: 10 }} />

                <View style={{ height: 20 }} />
                <ThemeButton onPress={() => router.push({ pathname: "/(main)/(evaluacion)/examen_teacher_asignatura", params: { asignatura_id, teacher_id } })}>Presentar Examen</ThemeButton>
                <View style={{ height: 10 }} />
                <ThemeButton onPress={() => router.back()}>Regresar</ThemeButton>
            </ThemedView>
            <FlatList
                data={[]}
                renderItem={({ item }) => <Text>YYYY</Text>}
            />
        </ThemedView>
    )
}

export default EvaluacionesScreen

const styles=StyleSheet.create({})