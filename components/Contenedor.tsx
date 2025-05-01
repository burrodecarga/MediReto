import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pregunta, Prototipo } from '@/interfaces/interfaces'
import Detalle from './Detalle'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

type Props={
    preguntas: Pregunta[]|undefined
    index?: number

}
const Contenedor=({ preguntas, index, }: Props) => {
    return (

        <>
            {preguntas?.map(pregunta => {
                const str=(pregunta.answer.slice(0, 15)).trim()
                return (

                    <View key={pregunta.id}>
                        <ThemedView style={{ marginHorizontal: 10, padding: 10, marginVertical: 5, backgroundColor: '#f1f2f4' }} key={pregunta.id+'-'+pregunta.question_id+str}>
                            <ThemedText>{pregunta.question}</ThemedText>
                        </ThemedView>
                        <ThemedView style={{ marginHorizontal: 10, padding: 10, marginVertical: 10 }}>
                            <Detalle preguntas={preguntas} filtro={pregunta.question_id} />
                        </ThemedView>
                    </View>
                )
            })}
        </>

    )
}

export default Contenedor

const styles=StyleSheet.create({})