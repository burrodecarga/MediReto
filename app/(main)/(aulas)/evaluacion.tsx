import { get_preguntas_por_block, set_examen } from "@/actions/examen-actions"
import BlockForm from "@/components/BlockForm"
import Indicador from "@/components/Indicador"
import ListEmpty from "@/components/ListEmpty"
import ListFooter from "@/components/ListFooter"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { Proto } from "@/interfaces/interfaces"
import { useAuthStore } from "@/store/useAuthStore"
import { useRespuestasStore } from "@/store/useRespuestasStore"
import { router, Stack, useLocalSearchParams } from "expo-router"
import React, { useEffect, useState } from "react"
import { Alert, FlatList, SafeAreaView } from "react-native"

const ExamenScreenFormulario=() => {
    const [loading, setLoading]=useState(false)
    const [preguntas, setPreguntas]=useState<Proto[]>()
    const params=useLocalSearchParams()
    const { asignatura_id, teacher_id }=params
    //const height=Dimensions.get("window").height

    const { respuestas, resetRespuestas }=useRespuestasStore()
    const { user }=useAuthStore()


    const confirm=() => {
        // Works on both iOS and Android
        Alert.alert(
            "Enviar Examen a revisión?",
            "Debe confirmar o negar esta acción.",
            [
                {
                    text: "No, deseo continuar en examen",
                    onPress: () => console.log("No, continue editing")
                },
                {
                    text: "Si, enviar examen a revisión",
                    onPress: () => sendExamen(),
                    style: "cancel"
                }
            ],
            { cancelable: false }
        )
        //sendExamen()
    }


    const sendExamen=async () => {
        //Alert.alert('XX')
        const examen_id=preguntas&&preguntas[0].examen_id.toString()
        const student_id=user&&user.id?.toString() as string
        const student_name=user&&user.name?.toString() as string
        if (preguntas&&teacher_id) {
            let pre_acertadas=respuestas.reduce((acumulador, nota) => acumulador+nota.puntos, 0)
            let pre_desacertadas=respuestas.length-pre_acertadas
            let pre_no_contestadas=preguntas.length-respuestas.length
            let acertadas=pre_acertadas.toString()
            let desacertadas=pre_desacertadas.toString()
            let no_contestadas=pre_no_contestadas.toString()


            //console.log('TEACHER', teacher_id)

            await set_examen(
                examen_id as string,
                teacher_id as string,
                student_name as string,
                student_id as string,
                preguntas,
                respuestas,
                acertadas,
                desacertadas,
                no_contestadas,
            )
            //console.log(JSON.parse(data), null, 2)
            //console.log('ENVIADO')
            router.replace('/(main)/(aulas)')

        }
    }

    useEffect(() => {
        const getExamen=async () => {
            if (asignatura_id&&teacher_id) {
                //console.log('SALIENDO DE EXAMEN SCREEN ASIGNATURA_iD : '+asignatura_id, 'TEACHER_ID : '+teacher_id)
                setLoading(true)
                //const data=await get_preguntas_por_block(asignatura_id as string, teacher_id as string)
                const data=await get_preguntas_por_block(
                    asignatura_id as string,
                    teacher_id as string
                )
                //console.log('RESPUESTA', JSON.stringify(data, null, 2))
                setPreguntas(data)
                setLoading(false)
            }
        }

        getExamen()
    }, [asignatura_id, teacher_id])


    useEffect(() => { resetRespuestas() }, [])

    if (loading) {
        return <Indicador />
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 0, }}>
            <Stack.Screen options={{ headerShown: false }} />
            <ThemedView style={{ backgroundColor: "white" }}>
                <ThemedView>
                    <ThemedText
                        type='subtitle'
                        style={{ textAlign: "center", marginVertical: 10 }}
                    >
                        EVALUACIÓN{"  resp: "}{respuestas.length} / {preguntas?.length}
                    </ThemedText>
                </ThemedView>
                <ThemedView>
                    <FlatList
                        ItemSeparatorComponent={() => <ThemedText style={{ justifyContent: 'center', alignItems: 'center' }}>.</ThemedText>}
                        ListFooterComponent={() => preguntas&&preguntas.length>0&&<ListFooter confirm={confirm} />}
                        ListEmptyComponent={() => <ListEmpty />}
                        showsVerticalScrollIndicator
                        contentContainerStyle={{}}
                        initialNumToRender={35}
                        data={preguntas}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <BlockForm item={item} index={index} />
                        )}
                    />
                </ThemedView>
            </ThemedView>
        </SafeAreaView>
    )
}

export default ExamenScreenFormulario;

