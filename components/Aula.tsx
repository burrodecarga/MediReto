import { useThemeColor } from '@/hooks/useThemeColor'
import { Aula } from '@/interfaces/interfaces'
import React from 'react'
import { View } from 'react-native'
import ThemeButton from './ThemeButton'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'

type Props={
    aula: Aula,
    ingresar: (id: string, aula_id: string, teacher: string, asignatura: string) => void
    evaluacion: (asignatura_id: string, teacher_id: string) => void
}
const CardAula=({ aula, ingresar, evaluacion }: Props) => {
    const { periodo, status, asignatura_id }=aula
    const primaryColor=useThemeColor({}, 'primary')


    return (
        <ThemedView style={{ paddingHorizontal: 5, paddingVertical: 8, borderColor: primaryColor, marginVertical: 10, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText type='subtitle' style={{ textTransform: 'uppercase' }}>{aula.asignatura}</ThemedText>
            <View style={{ height: 10 }} />
            <ThemedText type='default' style={{ textTransform: 'capitalize' }}>Prof: {aula.teacher}</ThemedText>
            <View style={{ height: 5 }} />
            <ThemedText type='default' style={{ fontSize: 13 }}>{periodo}</ThemedText>
            <ThemedText type='default' style={{ fontSize: 11 }}>{aula.name}</ThemedText>
            <ThemedText type='default' style={{ fontSize: 11 }}>{status===1? 'curso activo':'curso inactivo'}</ThemedText>
            <ThemedView style={{ flexDirection: 'row', gap: 10, }}>

                <ThemeButton onPress={() => ingresar(String(asignatura_id), aula.id.toString(), aula.teacher, aula.asignatura)}>Ingresar en Aula Virtual</ThemeButton>
                <ThemeButton onPress={() => evaluacion(aula.asignatura_id.toString(), aula.teacher_id.toString())}>Evaluación</ThemeButton>
            </ThemedView>
        </ThemedView>
    )
}

export default CardAula

