
import Indicador from '@/components/Indicador'
import ThemedButton from '@/components/ThemedButton'
import { ThemedText } from '@/components/ThemedText'
import ThemedTextInput from '@/components/ThemedTextInput'
import ThemeLink from '@/components/ThemeLink'
import { useThemeColor } from '@/hooks/useThemeColor'
import { useAuthStore } from '@/store/useAuthStore'
import { router } from 'expo-router'
import { useState } from 'react'
import {
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    useWindowDimensions,
    View,
} from 'react-native'

const RegisterScreen=() => {
    const [isPosting, setIsPosting]=useState(false)
    const { height }=useWindowDimensions()
    const backgroundColor=useThemeColor({}, 'background')
    const [form, setForm]=useState({
        name: 'edwin rafael',
        last_name: 'henriquez hidalgo',
        cedula: '4999400',
        phone: '0414753555',
        email: 'nes@gmail.com',
        password: '12345'
    })


    const { register }=useAuthStore()

    const onRegister=async () => {
        const { name, last_name, cedula, phone, email, password }=form

        //console.log({ email, password })

        if (email.length===0||password.length===0||name.length===0||last_name.length===0||cedula.length===0||phone.length===0) {
            return
        }

        setIsPosting(true)
        const data=await register(name, last_name, cedula, phone, email, password)
        console.log('resultado:'+data)
        setIsPosting(false)

        if (data) {
            router.replace('/auth/login')
            return
        }

        Alert.alert('Error', 'Error en Registro')
    }

    if (isPosting) {
        return <Indicador />
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <ScrollView
                style={{
                    paddingHorizontal: 40,
                    backgroundColor: backgroundColor,
                }}
            >
                <View
                    style={{
                        paddingTop: height*0.1,
                    }}
                >
                    <ThemedText type="title">Crear cuenta</ThemedText>
                    <ThemedText style={{ color: 'grey' }}>
                        Por favor crea una cuenta para continuar
                    </ThemedText>
                </View>

                {/* Email y Password */}
                <View style={{ marginTop: 20 }}>
                    <ThemedTextInput
                        placeholder="Apellido"
                        autoCapitalize="words"
                        icon="person-outline"
                        value={form.last_name}
                        onChangeText={(value) => setForm({ ...form, last_name: value })}
                    />


                    <ThemedTextInput
                        placeholder="Nombre"
                        autoCapitalize="words"
                        icon="person-outline"
                        value={form.name}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />
                    <ThemedTextInput
                        placeholder="Cédula de identidad"
                        keyboardType='numeric'
                        icon="card-outline"
                        value={form.cedula.toString()}
                        onChangeText={(value) => setForm({ ...form, cedula: String(value) })}
                    />

                    <ThemedTextInput
                        placeholder="Teléfono"
                        autoCapitalize="words"
                        icon="phone-portrait-outline"
                        value={form.phone}
                        onChangeText={(value) => setForm({ ...form, phone: value })}
                    />


                    <ThemedTextInput
                        placeholder="Correo electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        icon="mail-outline"
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />

                    <ThemedTextInput
                        placeholder="Contraseña"
                        secureTextEntry
                        autoCapitalize="none"
                        icon="lock-closed-outline"
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />
                </View>

                {/* Spacer */}
                <View style={{ marginTop: 10 }} />

                {/* Botón */}
                <ThemedButton icon="arrow-forward-outline" onPress={onRegister}>Crear cuenta</ThemedButton>

                {/* Spacer */}
                <View style={{ marginTop: 50 }} />

                {/* Enlace a registro */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ThemedText>¿Ya tienes cuenta?</ThemedText>
                    <ThemeLink href="/auth/login" style={{ marginHorizontal: 5 }}>
                        Ingresar
                    </ThemeLink>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
export default RegisterScreen
