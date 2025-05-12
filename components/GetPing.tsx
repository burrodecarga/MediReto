import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Platform } from 'react-native'
import Indicador from './Indicador'
import ThemedButton from './ThemedButton'
import { ThemedText } from './ThemedText'
import ThemedTextInput from './ThemedTextInput'
import { ThemedView } from './ThemedView'


const GetPing=() => {
    const [ip, setIp]=useState('192.168.1.3')
    const [port, setPort]=useState('8081')
    const [url, setUrl]=useState('')
    const [loading, setLoading]=useState(false)
    const [result, setResult]=useState('')
    const [save, setSave]=useState(false)




    const saveAddress=async () => {
        let address='http://'+ip+':'+port
        if (Platform.OS==='web') {
            await AsyncStorage.setItem('url', address)
        } else {

            await AsyncStorage.setItem('url', address)
        }
        Alert.alert('direccion asignada a servidor', address)
    }

    const enviarPing=async (ip: string) => {
        setSave(false)
        setLoading(true)
        fetch(ip)
            .then((response) => {
                if (response.status===200) {
                    console.log('success', ip)
                    setResult('Ping Enviado y Recibido')
                    setTimeout(() => {
                        setResult('')
                    }, 3000)
                    setSave(true)
                } else {
                    console.log('error')

                }
            })
            .catch((error) => {
                console.log('network error: '+error, 'ip', ip)
                setResult('Ping Enviado y No Recibido')
                setTimeout(() => {
                    setResult('')
                }, 3000)
                setSave(false)
                // Alert.alert('Error en Conexión, revise', ip)
            })
        setLoading(false)
    }

    if (loading) {
        return <Indicador />
    }

    const probarConexion=() => {
        setUrl('')
        let address='http://'+ip+':'+port
        setUrl(address.trim())
        enviarPing(address)
    }

    if (loading) {
        return <Indicador />
    }

    return (
        <ThemedView style={{ padding: 5 }}>
            <ThemedText type='subtitle' style={{ textAlign: 'center' }}>Configuración de Servidor</ThemedText>

            <ThemedTextInput
                icon='git-pull-request'
                value={ip}
                onChangeText={text => setIp(text)}
            />
            <ThemedTextInput
                icon='code-download-outline'
                value={port}
                onChangeText={text => setPort(text)}
            />

            <ThemedTextInput
                icon='cloud-done-outline'
                value={url}
                onChangeText={() => { }}
            />
            <ThemedText style={{ textAlign: 'center', marginVertical: 5 }}>{result}</ThemedText>
            <ThemedButton loading={loading} icon='paper-plane-outline' onPress={() => probarConexion()}>Probar Conexión</ThemedButton>
            <ThemedView style={{ height: 10 }} />
            {save&&<ThemedButton loading={loading} icon='paper-plane-outline' onPress={() => saveAddress()}>Asignar Dirección a Servidor Conexión</ThemedButton>}
        </ThemedView>
    )
}

export default GetPing

