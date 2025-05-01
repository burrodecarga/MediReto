import * as Network from 'expo-network'
import { useEffect, useState } from 'react'


const useEstadoDeRed=(value: string) => {

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
    }, [value])




    return {
        ipAddress,
        statusRed
    }
}

export default useEstadoDeRed

