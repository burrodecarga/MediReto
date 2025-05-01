import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { getAsignaturaDeEstudiantePorAula, getStudentAsignatura } from '@/actions/aula-actions'
import Indicador from '@/components/Indicador'
import { Asignatura, Aula } from '@/interfaces/interfaces'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import AsignaturaCard from '@/components/AsignaturaCard'
import { AulaType } from '@/interfaces/types/types'

const AsignaturasScreen=() => {
    const [loading, setLoading]=useState(false)
    const [modulos, setModulos]=useState<Asignatura[]>()
    const [aulaI, setAulaI]=useState<Aula>()
    const params=useLocalSearchParams()
    const { id, aula_id }=params


    const getAsignaturaDeEstudiantePorAulaI=async (id: string) => {
        setLoading(true)
        const { data }=await getAsignaturaDeEstudiantePorAula(id)
        setAulaI(data)
        //console.log(data, id)
        setLoading(false)
    }


    const getAsignaturaInfo=async (id: string) => {
        setLoading(true)
        const { data }=await getStudentAsignatura(id)
        setModulos(data)
        //console.log(data)
        setLoading(false)
    }

    useEffect(() => {
        if (aula_id) {
            getAsignaturaDeEstudiantePorAulaI(aula_id as string)
        }

        if (id) {
            getAsignaturaInfo(id as string)
        }
    }, [id])

    if (loading) {
        return <Indicador />
    }

    const verLeccion=(id: string) => {
        //console.log(id)
        router.push({ pathname: "/(main)/(aulas)/(asignaturas)/(lecciones)/lecciones", params: { id } })
    }
    return (
        <ThemedView>
            <ThemedView style={{ padding: 10, marginHorizontal: 10, borderBottomWidth: 1 }}>
                <ThemedText style={{ textTransform: 'uppercase', fontWeight: '700' }}>{aulaI?.asignatura}</ThemedText>
                <ThemedText>Prof.: {aulaI?.teacher}</ThemedText>
                <ThemedText>{aulaI?.name}</ThemedText>
            </ThemedView>

            <FlatList
                data={modulos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <AsignaturaCard item={item} verLeccion={verLeccion} />
                }
            />
        </ThemedView>
    )
}

export default AsignaturasScreen

const styles=StyleSheet.create({})