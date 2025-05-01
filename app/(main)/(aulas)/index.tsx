import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor'
import { getStudentAsignatura, getAsignaturasDeEstudiantePorAulas } from '@/actions/aula-actions'
import { useAuthStore } from '@/store/useAuthStore'
import { Aula } from '@/interfaces/interfaces'
import CardAula from '@/components/Aula'
import Indicador from '@/components/Indicador'
import { useStudentAsignaturaStore } from '@/store/useAsignaturaStore'
import { router } from 'expo-router'

const HomeScreenAula=() => {
    const primary=useThemeColor({}, 'primary')
    const user=useAuthStore(state => state.user)
    const [aulas, setAulas]=useState<Aula[]>()
    const [loading, setLoading]=useState(false)
    const [asignatura, setAsignatura]=useState()


    const cargarAulas=async () => {
        if (user) {
            setLoading(true)
            const { data }: any=await getAsignaturasDeEstudiantePorAulas(user.id as string)
            //console.log(data)
            setAulas(data)
            setLoading(false)
        }
    }
    useEffect(() => {
        cargarAulas()

    }, [user])

    if (loading) {
        return <Indicador />
    }

    const ingresar=async (id: string, aula_id: string) => {

        //console.log(aula_id)
        router.push({ pathname: "/(main)/(aulas)/(asignaturas)/asignaturas", params: { id, aula_id } })
    }

    const evaluacion=async (asignatura_id: string, teacher_id: string) => {

        router.push({ pathname: "/(main)/(evaluaciones)", params: { asignatura_id, teacher_id } })
    }

    return (
        <View style={{ paddingTop: 100, marginHorizontal: 20, flex: 1 }}>
            <ThemedText type='default' style={{ textAlign: 'center', marginBottom: 10, fontSize: 24 }}>{user?.name}</ThemedText>
            <FlatList
                data={aulas}
                renderItem={({ item }) => <CardAula aula={item} ingresar={ingresar} evaluacion={evaluacion} />
                }
            />
        </View>
    )
}

export default HomeScreenAula

const styles=StyleSheet.create({})