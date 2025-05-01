import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Question } from '@/interfaces/interfaces'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import RespuestasCard from './RespuestasCard'

type Props={
    question: Question
    index: number
}
const ExamenCard=({ question, index }: Props) => {


    return (
        <ScrollView>
            <ThemedView style={{ padding: 10, marginHorizontal: 10, flexDirection: 'row', gap: 3 }}>
                <ThemedText>{index+1} -</ThemedText>
                <ThemedText>{question.question}</ThemedText>
            </ThemedView>
            <RespuestasCard question={question} />
        </ScrollView>
    )
}

export default ExamenCard

const styles=StyleSheet.create({})