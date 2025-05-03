import { setItem } from 'expo-secure-store'
import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Indicador from './Indicador'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'

const Ping=() => {
    const [ip, setIp]=useState('http://192.168.1.3:8000')
    const [loading, setLoading]=useState(false)
    const [result, setResult]=useState('')


    const setDireccion=(str: string) => {
        setItem('url', str)
    }

    const enviarPing=(ip: string) => {
        setLoading(true)
        fetch(ip)
            .then((response) => {
                if (response.status===200) {
                    setResult('Enviado y Ping recibido')
                    console.log('success')
                    setTimeout(() => {
                        setResult('')
                    }, 2000)
                } else {

                    console.log('error')
                }
            })
            .catch((error) => {
                setResult('Enviado y NO recibido')
                console.log('network error: '+error)
                setTimeout(() => {
                    setResult('')
                }, 2000)

            })
        setLoading(false)
    }

    if (loading) {
        return <Indicador />
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginVertical: 10, borderColor: 'blue', borderRadius: 8, borderWidth: 1 }}>
            <ThemedView style={{}}>

                <ThemedText type='subtitle'>Ping</ThemedText>
                <TextInput
                    style={{ marginVertical: 5, marginHorizontal: 5, width: '100%', height: 'auto', padding: 10, borderWidth: 1, borderColor: 'blue' }}
                    value={ip}
                    onChangeText={text => setIp(text)}
                />
                <TouchableOpacity onPress={() => enviarPing(ip)} style={{ padding: 10, borderWidth: 1, borderColor: 'blue', borderRadius: 10, backgroundColor: loading? 'red':'white', }} disabled={loading} ><ThemedText>Enviar</ThemedText></TouchableOpacity>
            </ThemedView>
            <ThemedText type='subtitle'>{result}</ThemedText>
            <TouchableOpacity onPress={() => setDireccion(ip)} style={{ padding: 10, borderWidth: 1, borderColor: 'blue', borderRadius: 10, backgroundColor: loading? 'red':'white', }} disabled={loading} ><ThemedText>Set Dirección como URL de API</ThemedText></TouchableOpacity>
        </View>
    )
}

export default Ping

const styles=StyleSheet.create({})