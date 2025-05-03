import HomeIconButton from '@/components/HomeIconButton'
import Indicador from '@/components/Indicador'
import LogoutIconButton from '@/components/LogoutIconButton'
import { useAuthStore } from '@/store/useAuthStore'
import { Redirect, Stack } from 'expo-router'
import React, { useEffect } from 'react'

const MainLayout=() => {

    const { status, checkStatus }=useAuthStore()

    useEffect(() => { //
        checkStatus()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(status)
    if (status==='checking') {

        return (<Indicador />)
    }

    if (status==='unauthenticated') {

        return <Redirect href={'/auth/login'} />
    }
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(aulas)'
                options={{ title: 'Proyecto Aula ', headerTitleAlign: 'center', headerLeft: () => <LogoutIconButton />, headerRight: () => <HomeIconButton />, headerShown: false }
                }
            />

        </Stack>
    )
}

export default MainLayout

