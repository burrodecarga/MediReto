import { Proto, Resp } from "@/interfaces/interfaces"
import { useRespuestasStore } from "@/store/useRespuestasStore"
import React, { useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native"
import { ThemedText } from "./ThemedText"



type Props={
  item: Proto
  index: number

}
const BlockForm=({ item, index }: Props) => {


  const [isActive, setIsActive]=useState(0)

  const height=Dimensions.get('window').height

  const { respuestas, setRespuesta, resetRespuesta }=useRespuestasStore()

  const handleRespuesta=(id: number, action: number) => {
    if (action===1) {
      resetRespuesta(item.question_id)
      setIsActive(0)

    } else {

      const newRespuesta: Resp={
        id: id,
        pregunta: item.question_id,
        respuesta: item.option_id,
        seleccion: id,
        puntos: id===item.option_id? 1:0
      }
      resetRespuesta(item.question_id)
      setRespuesta(newRespuesta)
      setIsActive(id)
    }
  }

  console.log(respuestas, respuestas.length, isActive)

  return (
    <View style={{ padding: 10, marginHorizontal: 10, }}>
      <ThemedText style={{ fontWeight: '700', fontSize: 15, backgroundColor: '#dcdcdc', height: 'auto', paddingHorizontal: 6, paddingVertical: 10, textAlign: 'justify', }}>
        {(index+1)+'.-'}{item.question}
      </ThemedText>
      <View style={{ marginHorizontal: 1, padding: 0, marginVertical: 10, height: height*0.6 }}>
        <TouchableOpacity onPress={() => handleRespuesta(item.option_0_value, 0)} style={[styles.button, isActive===item.option_0_value? styles.select:null]} >
          <ThemedText style={{ fontSize: 13, }}>{item.option_0}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRespuesta(item.option_1_value, 0)} style={[styles.button, isActive===item.option_1_value? styles.select:null]} >
          <ThemedText style={{ fontSize: 13, }}>{item.option_1}</ThemedText>
        </TouchableOpacity>
        {item.option_2!.length>10&&<TouchableOpacity onPress={() => handleRespuesta(item.option_2_value!, 0)} style={[styles.button, isActive===item.option_2_value? styles.select:null]} >
          <ThemedText style={{ fontSize: 13, }}>{item.option_2}</ThemedText>
        </TouchableOpacity>}
        {item.option_3!.length>10&&<TouchableOpacity onPress={() => handleRespuesta(item.option_3_value!, 0)} style={[styles.button, isActive===item.option_3_value? styles.select:null]} >
          <ThemedText style={{ fontSize: 13, }}>{item.option_3}</ThemedText>
        </TouchableOpacity>}
        {item.option_4!.length>10&&<TouchableOpacity onPress={() => handleRespuesta(item.option_4_value!, 0)} style={[styles.button, isActive==item.option_4_value? styles.select:null]} >
          <ThemedText style={{ fontSize: 13, }}>{item.option_4}</ThemedText>
        </TouchableOpacity>}
      </View>
      <TouchableOpacity onPress={() => handleRespuesta(item.question_id, 1)}><ThemedText>Reset</ThemedText></TouchableOpacity>
    </View>
  )
}

export default BlockForm

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
