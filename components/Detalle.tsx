import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pregunta } from '@/interfaces/interfaces'
import { ThemedText } from './ThemedText'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Item from './Item'
import Indicador from './Indicador'

type Props={
    preguntas: Pregunta[]|undefined
    pregunta: Pregunta
    filtro: number,
    index: number
}
type Sel={
 'question_id':number,
       'id':number   
}

    

const Detalle=({ preguntas, filtro, pregunta, index, }: Props) => {

    const [isActive, setIsActive]=useState<Sel[]>([{
        question_id:0,
        id:0   }])
    const [opciones, setOpciones]=useState<Pregunta[]>()


   
   
    //console.log(JSON.stringify(opciones, null, 2))

    const handlePress=(i: number,item:Pregunta) => {
        const temp = isActive.filter(sel=>sel.question_id!=item.question_id)
         console.log(temp)
        // setIsActive(prev=>temp)
      //setIsActive([...isActive,{"id":i,"question_id":item.question_id}])
      //console.log(isActive)        
    }

    useEffect(() => {
        const getOpciones=() => {
            if (preguntas) {
                const temp1: Pregunta[]=preguntas.filter((pregunta, index, arreglo) => pregunta.question_id==filtro)
                const temp2:Pregunta[] = Array.from(new Set(temp1.map(a => a.question_id)))
                .map(question_id => {
                  return temp1.find(a => a.question_id === filtro)
                })

                setOpciones(temp2)
                //console.log(filtro,pregunta.question_id,filtro)
               
            }
        }
        getOpciones()
    }, [index])

    if (!preguntas) {
        <Indicador />
    }

    return (


        <View style={{ marginVertical: 10, marginHorizontal: 10, padding: 10 }}>
            <ThemedText style={{ marginTop: 10, marginBottom: 20 }}>{(index+1)}.- {pregunta.question}</ThemedText>
            <Text>xx</Text>
            <FlatList data={opciones}
                nestedScrollEnabled
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>

                    <View>

                        <View style={[{ borderWidth: 1, marginBottom: 30, padding: 10, borderColor: '#dcdcdc' },]}>
                            <TouchableOpacity onPress={() => handlePress(item.option_id,item)} >
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialIcons name={isActive? 'radio-button-checked':'radio-button-unchecked'} size={24} olor='#64748b' />
                                    <ThemedText style={{color:'black'}}>{item.answer}</ThemedText>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                }
            />
        </View>

    )

}

export default Detalle

const styles=StyleSheet.create({
    isActive: {
        backgroundColor: '#f0e68c'
    }
})