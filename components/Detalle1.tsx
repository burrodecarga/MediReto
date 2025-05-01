import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Pregunta } from '@/interfaces/interfaces'

type Props={
    preguntas: Pregunta[]|undefined
    filtro: number
}
const Detalle=({ preguntas, filtro }: Props) => {

    const opciones: Pregunta[]|undefined=preguntas?.filter(pregunta => pregunta.question_id==filtro)
    //console.log(JSON.stringify(opciones, null, 2))
    return (


        <View>
            <FlatList data={opciones}
                nestedScrollEnabled
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <View style={{ borderWidth: 1, marginBottom: 30 }}>
                    <TouchableOpacity>
                        <Text>{item.answer}</Text>
                    </TouchableOpacity>
                </View>}
            />
        </View>

    )

}

export default Detalle

const styles=StyleSheet.create({})