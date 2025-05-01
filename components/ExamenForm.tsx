import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pregunta } from '@/interfaces/interfaces'
import Indicador from './Indicador'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import { Pressable } from 'react-native-gesture-handler'
type Props={
    pregunta: Pregunta
    etiqueta: string
    index: number
}
const ExamenForm=({ pregunta, etiqueta, index }: Props) => {


    if (pregunta===undefined) {
        <Indicador />
    }




    return (
        <ThemedView style={{ padding: 10, marginHorizontal: 10 }} key={pregunta.id}>
            <ThemedText>{(index+1)}.- {etiqueta}</ThemedText>
        </ThemedView>




    )
}

export default ExamenForm

const styles=StyleSheet.create({})