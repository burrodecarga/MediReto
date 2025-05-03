import * as Network from 'expo-network'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props={
    getIp?: () => string
    getInfo?: () => Network.NetworkState|undefined
}
const RedIp=({ getIp, getInfo }: Props) => {
    const [ipAddress, setIpAddress]=useState('')
    const [statusRed, setStatusRed]=useState<Network.NetworkState>()

    const getStatus=async () => {
        const networkState=await Network.getNetworkStateAsync()
        console.log(`Current network type: ${networkState.type}`)
        setStatusRed(networkState)
        const ip=await Network.getIpAddressAsync()
        setIpAddress(ip)
    }



    useEffect(() => {


        getStatus()
    }, [])



    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 8, borderWidth: 1, borderColor: 'blue', backgroundColor: 'white', marginHorizontal: 'auto', width: '100%' }}>
            <Text style={{ fontWeight: 600, padding: 6, }}>ip: {ipAddress}</Text>
            <Text>tipo: {statusRed?.type}</Text>
            {/* <Text>{JSON.stringify(statusRed, null, 2)}</Text> */}
            <Text>{statusRed?.isInternetReachable? 'Internet':'Sin Internet'}</Text>
        </View>
    )
}

export default RedIp

const styles=StyleSheet.create({})