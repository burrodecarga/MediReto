import { getStudentAsignatura } from '@/actions/aula-actions'
import AsignaturaCard from '@/components/AsignaturaCard'
import Indicador from '@/components/Indicador'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Asignatura } from '@/interfaces/interfaces'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

const AsignaturasScreen=() => {
    const [loading, setLoading]=useState(false)
    const [modulos, setModulos]=useState<Asignatura[]>()
    //const [aulaI, setAulaI]=useState<Aula>()
    const params=useLocalSearchParams()
    const { id, aula_id, teacher, asignatura }=params


    const getAsignaturaDeEstudiantePorAulaI=async (id: string) => {
        setLoading(true)
        //const { data }=await getAsignaturaDeEstudiantePorAula(id)
        //setAulaI(data)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    if (loading) {
        return <Indicador />
    }

    const verLeccion=(id: string) => {
        //console.log(id)
        router.push({ pathname: "/(main)/(aulas)/lecciones", params: { id } })
    }
    return (
        <ThemedView>
            <ThemedView style={{ padding: 10, marginHorizontal: 10, borderBottomWidth: 1 }}>
                <ThemedText style={{ textTransform: 'uppercase', fontWeight: '700' }}>{asignatura&&asignatura}</ThemedText>
                <ThemedText>Prof.: {teacher&&teacher}</ThemedText>
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

