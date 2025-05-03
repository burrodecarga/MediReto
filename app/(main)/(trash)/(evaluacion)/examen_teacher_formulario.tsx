import { get_preguntas_por_block } from "@/actions/examen-actions"
import BlockForm from "@/components/BlockForm"
import Indicador from "@/components/Indicador"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Proto } from "@/interfaces/interfaces"
import { useRespuestasStore } from "@/store/useRespuestasStore"
import { Stack, useLocalSearchParams } from "expo-router"
import React, { useEffect, useState } from "react"
import { Dimensions, FlatList, SafeAreaView, TouchableOpacity } from "react-native"

const ExamenScreenFormulario=() => {
    const [loading, setLoading]=useState(false)
    const [preguntas, setPreguntas]=useState<Proto[]>()
    const params=useLocalSearchParams()
    const { asignatura_id, teacher_id }=params
    const height=Dimensions.get("window").height

    const { respuestas }=useRespuestasStore()

    useEffect(() => {
        const getExamen=async () => {
            if (asignatura_id&&teacher_id) {
                //console.log('SALIENDO DE EXAMEN SCREEN ASIGNATURA_iD : '+asignatura_id, 'TEACHER_ID : '+teacher_id)
                setLoading(true)
                //const data=await get_preguntas_por_block(asignatura_id as string, teacher_id as string)
                const data=await get_preguntas_por_block(
                    asignatura_id as string,
                    teacher_id as string
                )

                //console.log('RESPUESTA', JSON.stringify(data, null, 2))
                setPreguntas(data)
                setLoading(false)
            }
        }

        getExamen()
    }, [asignatura_id, teacher_id])

    if (loading) {
        return <Indicador />
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 0.1*height }}>
            <Stack.Screen options={{ headerShown: false }} />
            <ThemedView style={{ backgroundColor: "white" }}>
                <ThemedView>
                    <ThemedText
                        type='subtitle'
                        style={{ textAlign: "center", marginVertical: 10 }}
                    >
                        EVALUACIÓN{"  resp: "}{respuestas.length} / {preguntas?.length}
                    </ThemedText>
                </ThemedView>
                <FlatList
                    style={{ marginBottom: 60 }}
                    initialNumToRender={20}
                    data={preguntas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <BlockForm item={item} index={index} />
                    )}
                />
            </ThemedView>
            <ThemedView>
                <TouchableOpacity style={{ padding: 12, backgroundColor: '#32cd32' }}><ThemedText>Enviar Examen</ThemedText></TouchableOpacity>
            </ThemedView>
        </SafeAreaView>
    )
}

export default ExamenScreenFormulario;

