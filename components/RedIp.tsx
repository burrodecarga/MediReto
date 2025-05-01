import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Network from 'expo-network'

type Props = {
    getIp?: () => string
    getInfo?: () => Network.NetworkState | undefined
}
const RedIp = ({ getIp, getInfo }: Props) => {
    const [ipAddress, setIpAddress] = useState('')
    const [statusRed, setStatusRed] = useState<Network.NetworkState>()

    const getStatus = async () => {
        const networkState = await Network.getNetworkStateAsync()
        console.log(`Current network type: ${networkState.type}`)
        setStatusRed(networkState)
        const ip = await Network.getIpAddressAsync()
        setIpAddress(ip)
    }

    useEffect(() => {


        getStatus()
    }, [])



    return (
        <View>
            <Text>ip: xx{ipAddress}xx</Text>
            <Text>tipo: {statusRed?.type}</Text>
            <Text>{JSON.stringify(statusRed, null, 2)}</Text>
            <Text>{statusRed?.isInternetReachable ? 'Internet' : 'Sin Internet'}</Text>
        </View>
    )
}

export default RedIp

const styles = StyleSheet.create({})