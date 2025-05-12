import Indicador from "@/components/Indicador"
import ThemeButton from "@/components/ThemeButton"
import { ThemedView } from "@/components/ThemedView"
import { router, useLocalSearchParams } from "expo-router"
import React from "react"
import { View } from "react-native"

const EvaluacionesScreen=() => {
    const params=useLocalSearchParams()
    const { teacher_id, asignatura_id }=params

    //const [loading, setLoading]=useState(false)
    // const [examen, setExamen]=useState<Examen>()

    // const getExamen=async () => {

    //     if (teacher_id&&asignatura_id) {

    //         setLoading(true)
    //         const { data }=await getExamenAPresentar(asignatura_id as string, teacher_id as string)
    //         setExamen(data)
    //         //console.log(data)
    //         setLoading(false)

    //     }
    // }

    // useEffect(() => {

    //     // getExamen()
    // }, [asignatura_id, teacher_id])

    if (!teacher_id||!asignatura_id) {
        return <Indicador />
    }
    //console.log(examen?.asignatura)
    return (
        <ThemedView style={{ flex: 1 }}>
            <ThemedView
                style={{ marginHorizontal: 10, padding: 5, marginVertical: 20, flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}
            >
                {/* <View style={{ height: 10 }} />

                <View style={{ height: 20 }} /> */}
                {/* <ThemeButton
                    onPress={() =>
                        router.push({
                            pathname: "/(main)/(evaluacion)/examen_teacher_asignatura",
                            params: { asignatura_id, teacher_id }
                        })
                    }
                >
                    Presentar Examen
                </ThemeButton> */}
                <View style={{ height: 10 }} />
                <ThemeButton
                    onPress={() =>
                        router.push({
                            pathname: "/(main)/(trash)/(evaluacion)/examen_teacher_formulario",
                            params: { asignatura_id, teacher_id }
                        })
                    }
                >
                    Presentar Examen
                </ThemeButton>
                <View style={{ height: 10 }} />
                <ThemeButton onPress={() => router.back()}>Regresar</ThemeButton>
            </ThemedView>
        </ThemedView>
    )
}

export default EvaluacionesScreen
