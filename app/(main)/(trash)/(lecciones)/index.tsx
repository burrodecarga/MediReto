import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Indicador from '@/components/Indicador'
import { getLeccionesDeModulo } from '@/actions/leccion-actions'
import LeccionesCard from '@/components/LeccionesCard'
import { ThemedText } from '@/components/ThemedText'
import VideoCard from '@/components/VideoCard'

const LeccionesScreen = () => {
    const [loading, setLoading] = useState(false)
    const [lecciones, setLecciones] = useState()
    const params = useLocalSearchParams()
    const { id } = params

    const getLeccionesInfo = async (id: string) => {
        setLoading(true)
        const { data } = await getLeccionesDeModulo(id)
        setLecciones(data)
        //console.log(data)
        setLoading(false)
    }



    useEffect(() => {
        if (id) {
            getLeccionesInfo(id as string)
        }
    }, [id])

    if (loading) {
        return <Indicador />
    }

    return (
        <View>
            <ThemedText type='subtitle' style={{ alignItems: 'center', justifyContent: 'center', padding: 5, marginHorizontal: 10 }}>Lecciones del Módulo</ThemedText>
            <FlatList
                data={lecciones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <LeccionesCard item={item} />
                }
            />
        </View>
    )
}

export default LeccionesScreen

const styles = StyleSheet.create({})