import BackIconButton from '@/components/BackIconButton'
import BottonIconButton from '@/components/BottonIconButton'
import HomeIconButton from '@/components/HomeIconButton'
import LogoutIconButton from '@/components/LogoutIconButton'
import TopIconButton from '@/components/TopIconButton'
import { Stack } from 'expo-router'
import React, { Component } from 'react'

export class AulasLayout extends Component {
    render() {
        return (
            <Stack>
                <Stack.Screen name="index" options={{ title: 'Asignaturas', headerTitleAlign: 'center', headerLeft: () => <LogoutIconButton />, headerRight: () => <HomeIconButton />, headerShown: true }
                } />
                <Stack.Screen name="asignatura" options={{ title: 'Asignatura', headerTitleAlign: 'center', headerLeft: () => <BackIconButton />, headerRight: () => <HomeIconButton />, headerShown: true }
                } />
                <Stack.Screen name="evaluaciones" options={{ title: 'Evaluaciones', headerTitleAlign: 'center', headerLeft: () => <BackIconButton />, headerRight: () => <HomeIconButton />, headerShown: true }
                } />

                <Stack.Screen name="evaluacion" options={{ title: 'Evaluación', headerTitleAlign: 'center', headerLeft: () => <TopIconButton />, headerRight: () => <BottonIconButton />, headerShown: true }
                } />

                <Stack.Screen name="lecciones" options={{ title: 'Lecciones', headerTitleAlign: 'center', headerLeft: () => <BackIconButton />, headerRight: () => <HomeIconButton />, headerShown: true }
                } />
            </Stack>
        )
    }
}

export default AulasLayout