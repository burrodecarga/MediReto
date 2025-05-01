
//http://127.0.0.1:8000/api/v1/login

import { SecureStorageAdapter } from "@/store/secure-storage"
import * as Network from 'expo-network'
import axios from "axios"
import useEstadoDeRed from "@/hooks/useEstadoDeRed"
import { useState } from "react"

let ip
const ipAddress=async () => {
    await Network.getIpAddressAsync().then(function (address) {
        console.log('Dentro', address)
        return address
    })
}

const getIp=() => {
    const restult=ipAddress()
    return restult
}


export const ping=() => fetch('http://192.168.1.6')
    .then((response) => {
        if (response.status===200) {
            console.log('success')
        } else {
            console.log('error')
        }
    })
    .catch((error) => {
        console.log('network error: '+error)
    })

ping()

const urlApi=axios.create({
    baseURL: 'http://192.168.1.6:8000/api/v1/'
})


//interceptor para cambiar request o response

urlApi.interceptors.request.use(async (config) => {

    //verificar si tenemos token en el secure storage
    const token=await SecureStorageAdapter.getItem('token')

    if (token) {
        config.headers.Authorization=`Bearer ${token}`
    }

    return config
})

export { urlApi }