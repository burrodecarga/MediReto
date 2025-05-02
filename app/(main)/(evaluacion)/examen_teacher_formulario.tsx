import { get_preguntas_por_block } from '@/actions/examen-actions'
import BlockForm from '@/components/BlockForm'
import Indicador from '@/components/Indicador'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Proto } from '@/interfaces/interfaces'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, StyleSheet } from 'react-native'

const ExamenScreenFormulario=() => {
    const [loading, setLoading]=useState(false)
    const [preguntas, setPreguntas]=useState<Proto[]>()
    const params=useLocalSearchParams()
    const { asignatura_id, teacher_id }=params
    const height=Dimensions.get('window').height





    useEffect(() => {
        const getExamen=async () => {
            if (asignatura_id&&teacher_id) {
                //console.log('SALIENDO DE EXAMEN SCREEN ASIGNATURA_iD : '+asignatura_id, 'TEACHER_ID : '+teacher_id)
                setLoading(true)
                //const data=await get_preguntas_por_block(asignatura_id as string, teacher_id as string)
                const data=await get_preguntas_por_block(asignatura_id as string, teacher_id as string)

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
        <SafeAreaView style={{ flex: 1, marginTop: 0.05*height }}>
            <ThemedView >
                <Stack.Screen options={{ headerShown: true }} />
                <ThemedView>
                    <ThemedText type='subtitle' style={{ textAlign: 'center', marginVertical: 10 }}>EVALUACIÓN </ThemedText>
                </ThemedView>
                <ThemedView>

                </ThemedView>
                <FlatList
                    initialNumToRender={20}
                    data={preguntas}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => <BlockForm
                        item={item}
                        index={index}
                    />} />


            </ThemedView>
        </SafeAreaView>
    )
}

export default ExamenScreenFormulario

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#f9fafb',
        textAlign: 'center',
        paddingHorizontal: 25
    },

    mainHeader: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#06b6d4'+'ee',
        textTransform: 'uppercase'

    },
    header: {
        marginBottom: 15,
        fontSize: 16,
        color: '#374151'
    }
})