import { get_preguntas_por_block } from '@/actions/examen-actions'
import Block from '@/components/Block'
import Indicador from '@/components/Indicador'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Proto, Resp } from '@/interfaces/interfaces'
import { Stack, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, SafeAreaView, StyleSheet } from 'react-native'

const ExamenScreen=() => {
    const [loading, setLoading]=useState(false)
    const [preguntas, setPreguntas]=useState<Proto[]>()
    const [respuestas, setRespuestas]=useState<Resp[]>([{
        id: 0,
        pregunta: 0,
        respuesta: 0,
        seleccion: 0,
        puntos: 0,
    }])
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


    const onSubmit=(data: any) => {
        console.log(data)
    }


    return (
        <SafeAreaView style={{ flex: 1, marginTop: 0.05*height }}>
            <ThemedView >
                <Stack.Screen options={{ headerShown: true }} />
                <ThemedView>
                    <ThemedText type='subtitle' style={{ textAlign: 'center', marginVertical: 10 }}>EVALUACIÓN </ThemedText>
                </ThemedView>

                <FlatList
                    initialNumToRender={20}
                    data={preguntas}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => <Block
                        item={item}
                        index={index}
                        respuestas={respuestas}
                        setRespuestas={setRespuestas}

                    />} />

            </ThemedView>
        </SafeAreaView>
    )
}

export default ExamenScreen

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