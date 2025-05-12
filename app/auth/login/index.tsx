import ThemedButton from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import ThemeLink from '@/components/ThemeLink'
import ThemeTextInput from '@/components/ThemeTextInput'
import { useThemeColor } from '@/hooks/useThemeColor'
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
        password: '123'
    })

    const { login }=useAuthStore()

    const primary=useThemeColor({}, 'primary')

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
                <View style={{ paddingTop: height*0.15 }}>

                    <ThemedText type='title' style={{ borderWidth: 1, padding: 10, borderColor: primary, textAlign: 'center', marginBottom: 30, color: primary }}>MEDIRETO</ThemedText>
                    <ThemedText type='title' style={{ color: primary }}>Ingresar</ThemedText>
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
                    //secureTextEntry
                    icon='lock-closed-outline'
                    value={form.password}
                    onChangeText={(value) => setForm({ ...form, password: value })}
                />
                <View style={{ marginTop: 10 }} />
                <ThemedButton icon='arrow-forward-outline' onPress={onLogin} style={{ backgroundColor: isPosting? 'green':primary, flexDirection: 'row', padding: 10, borderRadius: 5, justifyContent: 'center' }} disabled={isPosting}>Ingresar</ThemedButton>

                <View style={{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <ThemedText>¿No está registrado? </ThemedText>
                        <ThemeLink href="/auth/register" style={{}}>
                            Registrarse
                        </ThemeLink>
                    </View>
                </View>
                <ThemedView style={{ marginVertical: 100 }}>

                    <ThemedButton icon='cog' onPress={() => router.push('/auth/config')} style={{ backgroundColor: primary, flexDirection: 'row', padding: 10, borderRadius: 5, justifyContent: 'center' }} >Configurar</ThemedButton>


                </ThemedView>
                <ThemedText style={{ fontSize: 11, color: primary }}>Basado en Idea de: Dr. Abrahan Jimenez</ThemedText>

                <ThemedText style={{ fontSize: 11, color: primary, marginBottom: 10 }}>Desarrollo: Edwin Henriquez, edwinhenriquezh@gmail.com</ThemedText>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen


const styles=StyleSheet.create({})