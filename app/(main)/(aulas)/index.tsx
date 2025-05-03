import { getAsignaturasDeEstudiantePorAulas } from '@/actions/aula-actions'
import CardAula from '@/components/Aula'
import Indicador from '@/components/Indicador'
import ThemeButton from '@/components/ThemeButton'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Aula } from '@/interfaces/interfaces'
import { useAuthStore } from '@/store/useAuthStore'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

const HomeScreenAula=() => {
    const user=useAuthStore(state => state.user)
    const [aulas, setAulas]=useState<Aula[]>()
    const [loading, setLoading]=useState(false)


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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    if (loading) {
        return <Indicador />
    }

    const ingresar=async (id: string, aula_id: string, teacher: string, asignatura: string) => {
        router.push({ pathname: "/(main)/(aulas)/asignatura", params: { id, aula_id, teacher, asignatura } })
    }

    const evaluacion=async (asignatura_id: string, teacher_id: string) => {
        router.push({ pathname: "/(main)/(aulas)/evaluacion", params: { asignatura_id, teacher_id } })
    }

    return (

        <ThemedView style={{ paddingTop: 10, marginHorizontal: 20, flex: 1, backgroundColor: '#fafaf4' }}>
            <ThemedText type='default' style={{ textAlign: 'center', marginBottom: 10, fontSize: 24 }}>{user?.name}</ThemedText>
            <FlatList
                data={aulas}
                renderItem={({ item }) => <CardAula aula={item} ingresar={ingresar} evaluacion={evaluacion} />
                }
            />

            <ThemedView style={{ marginBottom: 30 }}>

                <ThemeButton onPress={() => router.push('/(main)/(aulas)/config')}>configurar</ThemeButton>

            </ThemedView>

        </ThemedView>

    )
}

export default HomeScreenAula

