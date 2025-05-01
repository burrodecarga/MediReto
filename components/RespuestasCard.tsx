import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getRespuestasApregunta } from '@/actions/leccion-actions'
import { Question } from '@/interfaces/interfaces'
import Indicador from './Indicador'
import RadioButton from './RadioButton2'
import { RespuestaOption } from '@/interfaces/types/types'
import { ThemedView } from './ThemedView'
import { TextInput } from 'react-native-gesture-handler'
import { ThemedText } from './ThemedText'

type Props={
    question: Question
}

type RespuestasProps={
    id: number
    is_true: number
    answer: string
    question_id: number
    created_at: Date
    updated_at: Date
}
const RespuestasCard=({ question }: Props) => {
    const [loading, setLoading]=useState(false)
    const [respuestas, setRespuestas]=useState<RespuestasProps[]>()


    const getRespuestas=async () => {
        if (question.id) {
            const id=String(question.id)
            setLoading(true)
            const { data }=await getRespuestasApregunta(id)
            setRespuestas(data)
            console.log(data)
            setLoading(false)

        }
    }

    useEffect(() => {
        getRespuestas()
    }, [question.id])

    if (loading) {
        return <Indicador />
    }




    return <FlatList
        data={respuestas}

        renderItem={({ item }) => (<View style={{ marginHorizontal: 10, paddingHorizontal: 10 }}>
            <ThemedView style={{ padding: 10, marginHorizontal: 10, flexDirection: 'row', gap: 3, justifyContent: 'flex-start', alignItems: 'center' }}>
                <TextInput value='xx' />
                <ThemedText style={{ flexWrap: 'wrap' }}>{item.answer}</ThemedText>

            </ThemedView>
        </View>)} />

}

export default RespuestasCard

