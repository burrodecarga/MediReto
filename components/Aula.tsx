import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Aula } from '@/interfaces/interfaces'
import { useThemeColor } from '@/hooks/useThemeColor'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'
import ThemeButton from './ThemeButton'

type Props={
    aula: Aula,
    ingresar: (id: string, aula_id: string) => void
    evaluacion: (asignatura_id: string, teacher_id: string) => void
}
const CardAula=({ aula, ingresar, evaluacion }: Props) => {
    const { asignatura, teacher, periodo, status, asignatura_id, teacher_id }=aula
    const primaryColor=useThemeColor({}, 'primary')


    return (
        <ThemedView style={{ paddingHorizontal: 5, paddingVertical: 8, borderColor: primaryColor, marginVertical: 10, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <ThemedText type='subtitle' style={{ textTransform: 'uppercase' }}>{aula.asignatura}</ThemedText>
            <View style={{ height: 10 }} />
            <ThemedText type='default' style={{ textTransform: 'capitalize' }}>Prof: {aula.teacher}</ThemedText>
            <View style={{ height: 5 }} />
            <ThemedText type='default' style={{ fontSize: 13 }}>{periodo}</ThemedText>
            <ThemedText type='default' style={{ fontSize: 11 }}>{aula.name}</ThemedText>
            <ThemedText type='default' style={{ fontSize: 11 }}>{status==1? 'curso activo':'curso inactivo'}</ThemedText>
            <ThemedView style={{ flexDirection: 'row', gap: 10, }}>

                <ThemeButton onPress={() => ingresar(String(asignatura_id), aula.id.toString())}>Ingresar</ThemeButton>
                <ThemeButton onPress={() => evaluacion(aula.asignatura_id.toString(), aula.teacher_id.toString())}>Evaluación</ThemeButton>
            </ThemedView>
        </ThemedView>
    )
}

export default CardAula

const styles=StyleSheet.create({})