import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuthStore } from '@/store/useAuthStore'
import Indicador from '@/components/Indicador'
import LogoutIconButton from '@/components/LogoutIconButton'
import HomeIconButton from '@/components/HomeIconButton'

const MainLayout=() => {

    const { status, checkStatus }=useAuthStore()

    useEffect(() => { //
        checkStatus()

    }, [])

    console.log(status)
    if (status==='checking') {

        return (<Indicador />)
    }

    if (status==='unauthenticated') {

        return <Redirect href={'/auth/login'} />
    }
    return (
        <Stack>
            <Stack.Screen name='(aulas)'
                options={{ title: 'Proyecto Aula ', headerTitleAlign: 'center', headerLeft: () => <LogoutIconButton />, headerRight: () => <HomeIconButton /> }
                }
            />
            <Stack.Screen name='(evaluaciones)'
                options={{ title: 'Proyecto Aula ', headerTitleAlign: 'center', headerLeft: () => <LogoutIconButton />, headerRight: () => <HomeIconButton /> }
                }
            />
        </Stack>
    )
}

export default MainLayout

const styles=StyleSheet.create({})