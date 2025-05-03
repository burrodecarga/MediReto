import { Proto, Resp } from "@/interfaces/interfaces"
import React, { useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native"
import { ThemedText } from "./ThemedText"

type Props={
  item: Proto
  index: number
  respuestas: Resp[]
  setRespuestas: (prevState: Resp[]) => void
}
const Block=({ item, index, respuestas, setRespuestas }: Props) => {

  const [isActive, setIsActive]=useState(0)

  const height=Dimensions.get('window').height


  const deleteRespuesta=(id: number) => {
    setIsActive(0)
    const temp=respuestas.filter(res => res.id!==id)
    setRespuestas(temp)
  }

  const addRespuesta=(r: any) => {
    console.log('XXXXXXXXXXXXXXXX', r, 'XXXXXXXXXXXXXXXX')

  }

  const handlePress=(seleccion: number) => {
    if (item) {

      const newRespuesta: Resp={
        id: item.question_id,
        pregunta: item.question_id,
        respuesta: item.option_id,
        seleccion: seleccion,
        puntos: seleccion===item.option_id? 1:0
      }
      deleteRespuesta(item.question_id)
      addRespuesta(newRespuesta)
      setIsActive(prev => seleccion)
    }
  }
  //console.log(JSON.stringify(respuestas, null, 2))
  console.log(respuestas.length)

  //console.log()

  const reset=(seleccion: number) => {
    setRespuestas(
      respuestas.filter((res) => {
        //console.log(res.id, id, res.id!=id)
        return res.id!=seleccion
      })
    )
    setIsActive(prev => 0)
  }
  return (
    <View style={{ padding: 10, marginHorizontal: 10, }}>
      <ThemedText style={{ fontWeight: '700', fontSize: 15, backgroundColor: '#dcdcdc', height: 'auto', paddingHorizontal: 6, paddingVertical: 10, textAlign: 'justify', }}>
        {(index+1)+'.-'}{item.question}
      </ThemedText>
      <View style={{ marginHorizontal: 1, padding: 0, marginVertical: 10, height: height*0.6 }}>
        <TouchableOpacity onLongPress={() => reset(item.option_id)} style={[styles.button, isActive===item.option_0_value? styles.select:null]} onPress={() => handlePress(item.option_0_value)}>
          <ThemedText style={{ fontSize: 13, }}>{item.option_0}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, isActive===item.option_1_value? styles.select:null]} onPress={() => handlePress(item.option_1_value)}>
          <ThemedText style={{ fontSize: 13, }}>{item.option_1}</ThemedText>
        </TouchableOpacity>
        {item.option_2!.length>10&&<TouchableOpacity style={[styles.button, isActive===item.option_2_value? styles.select:null]} onPress={() => handlePress(item.option_2_value? item.option_2_value:0)}>
          <ThemedText style={{ fontSize: 13, }}>{item.option_2}</ThemedText>
        </TouchableOpacity>}
        {item.option_3!.length>10&&<TouchableOpacity style={[styles.button, isActive===item.option_3_value? styles.select:null]} onPress={() => handlePress(item.option_3_value? item.option_3_value:0)}>
          <ThemedText style={{ fontSize: 13, }}>{item.option_3}</ThemedText>
        </TouchableOpacity>}
        {item.option_4!.length>10&&<TouchableOpacity style={[styles.button, isActive===item.option_4_value? styles.select:null]} onPress={() => handlePress(item.option_4_value? item.option_4_value:0)}>
          <ThemedText style={{ fontSize: 13, }}>{item.option_4}</ThemedText>
        </TouchableOpacity>}
      </View>
    </View>
  )
}

export default Block

const styles=StyleSheet.create({
  button: {
    borderRadius: 2,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "aquamarine",
    paddingHorizontal: 0,
    paddingVertical: 5,
    marginBottom: 10,
    backgroundColor: "aliceblue",
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  select: {
    backgroundColor: 'aqua'
  }


})
