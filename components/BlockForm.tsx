import { Proto, Resp } from "@/interfaces/interfaces"
import { useRespuestasStore } from "@/store/useRespuestasStore"
import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"



type Props={
  item: Proto
  index: number

}
const BlockForm=({ item, index }: Props) => {


  const [isActive, setIsActive]=useState(0)

  //const height=Dimensions.get('window').height

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

  useEffect(() => {
    respuestas.map(r => r.respuesta===item.seleccted&&setIsActive(item.seleccted))
  }, [item, respuestas])

  //console.log(respuestas, respuestas.length, isActive)

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={{ fontWeight: '700', fontSize: 15, backgroundColor: '#dcdcdc', height: 'auto', paddingHorizontal: 6, paddingVertical: 10, textAlign: 'justify' }}>
        {(index+1)+'.-'}{item.question}
      </ThemedText>
      <View style={{ marginHorizontal: 1, padding: 0, marginVertical: 10, height: 'auto' }}>
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
        {item.option_4!.length>10&&<TouchableOpacity onPress={() => handleRespuesta(item.option_4_value!, 0)} style={[styles.button, isActive===item.option_4_value? styles.select:null]} >
          <ThemedText style={{ fontSize: 13, }}>{item.option_4}</ThemedText>
        </TouchableOpacity>}

        <TouchableOpacity style={styles.reset} onPress={() => handleRespuesta(item.question_id, 1)}><ThemedText style={{ textAlign: 'center' }}>Limpiar Selección</ThemedText></TouchableOpacity>
      </View>
    </ThemedView>
  )
}

export default BlockForm

const styles=StyleSheet.create({
  container: {
    padding: 4,
    marginHorizontal: 10,
    // borderColor: '#a9a9a9', borderWidth: 1,
    marginBottom: 25
  },

  button: {
    borderRadius: 2,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 0,
    paddingVertical: 12,
    marginBottom: 10,
    backgroundColor: "white",
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  select: {
    backgroundColor: '#56e778'
  },
  reset: {
    marginHorizontal: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginBottom: 'auto',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#a9a9a9"
  },
  textReset: {
    color: '#f4fcff'
  }


})
