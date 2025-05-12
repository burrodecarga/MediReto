import Ping from '@/components/GetPing'
import HomeIconButton from '@/components/HomeIconButton'
import RedIp from '@/components/RedIp'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Text, useWindowDimensions, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default function ConfigScreen() {
    const [url, setUrl]=useState('')
    const { height }=useWindowDimensions()

    console.log(url)

    useEffect(() => {
        const getUrl=async () => {
            const address=await AsyncStorage.getItem('url')
            if (address) { setUrl(address) } else { setUrl('0.0.0.0') }
        }
        getUrl()
    }, [url])
    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={{ flex: 1 }}>
            <ScrollView style={{ paddingHorizontal: 10 }}>
                <View style={{ gap: 5, justifyContent: 'space-around', marginHorizontal: 10, marginVertical: 10, padding: 20, height: height*0.9 }}>
                    <View style={{ padding: 15, borderRadius: 10, borderWidth: 1, borderColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                        <HomeIconButton />
                    </View>
                    <View style={{ height: height*0.15 }}>
                        <RedIp />
                    </View>

                    <View style={{ height: height*0.15, padding: 15, borderRadius: 10, borderWidth: 1, borderColor: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 700 }}>DIRECCIÓN DE SERVIDOR</Text>
                        <Text style={{ fontWeight: 600 }}>{url}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Ping />
                    </View>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>

    )
}

