import { Stack } from 'expo-router'
import React from 'react'

export default function AsignaturasLayout() {
    return (
        <Stack screenOptions={{ headerShown: true }}>
            <Stack.Screen name="index" options={{ title: 'Asignaturas', headerShown: true }} />
        </Stack>
    )
}

