import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NetworkInfo } from 'react-native-network-info'

const GetIpAddress=() => {

    const [ipAddress, setIpAddress]=useState<string|null>()

    useEffect(() => {
        const fetchIpAddress=async () => {
            const ip=await NetworkInfo.getIPV4Address()
            setIpAddress(ip)
        }

        fetchIpAddress()
    }, [])
    return (
        <View>
            <Text>Ip:{ipAddress}</Text>
        </View>
    )
}


export default GetIpAddress

const styles=StyleSheet.create({})