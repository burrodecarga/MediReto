import ThemeButton from '@/components/ThemeButton'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ThemeLink from '@/components/ThemeLink'
import ThemeTextInput from '@/components/ThemeTextInput'
import { useAuthStore } from '@/store/useAuthStore'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, StyleSheet, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const LoginScreen=() => {
    const { height }=useWindowDimensions()
    const [isPosting, setIsPosting]=useState(false)
    const [form, setForm]=useState({
        email: 'es@gmail.com',
        password: 'password'
    })

    const { login }=useAuthStore()

    const onLogin=async () => {
        const { email, password }=form

        //console.log({ email, password })

        if (email.length===0||password.length===0) {
            return
        }

        setIsPosting(true)
        const wasSuccessful=await login(email, password)
        console.log('resultado:'+wasSuccessful)
        setIsPosting(false)

        if (wasSuccessful) {
            router.replace('/')
            return
        }

        Alert.alert('Error', 'Usuario o contraseña no son correctos')
    }

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={{ flex: 1 }}>
            <ScrollView style={{ paddingHorizontal: 40 }}>
                <View style={{ paddingTop: height*0.35 }}>

                    <ThemedText type='title'>Ingresar</ThemedText>
                    <ThemedText style={{ color: 'gray' }}>Por favor ingrese sus datos para continuar</ThemedText>
                </View>
                <View style={{ marginTop: 20 }} />
                <ThemeTextInput
                    placeholder='correo electrónico'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    icon='mail-outline'
                    value={form.email}
                    onChangeText={(value) => setForm({ ...form, email: value })}
                />

                <ThemeTextInput
                    placeholder='contraseña'
                    autoCapitalize='none'
                    secureTextEntry
                    icon='lock-closed-outline'
                    value={form.password}
                    onChangeText={(value) => setForm({ ...form, password: value })}
                />
                <View style={{ marginTop: 10 }} />
                <ThemeButton icon='arrow-forward-outline' onPress={onLogin} style={{ backgroundColor: isPosting? 'red':'blue' }} disabled={isPosting}>Ingresar</ThemeButton>

                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <ThemedText>¿No está registrado? </ThemedText>
                        <ThemeLink href="/auth/register" style={{}}>
                            Registrarse
                        </ThemeLink>
                    </View>
                </View>
                <ThemedView style={{ marginBottom: 30 }}>

                    <ThemeButton onPress={() => router.push('/auth/config')}>configurar</ThemeButton>

                </ThemedView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen


const styles=StyleSheet.create({})