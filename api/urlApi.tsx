
//http://127.0.0.1:8000/api/v1/login

import { SecureStorageAdapter } from "@/store/secure-storage"

import axios from "axios"
import { getItem } from "expo-secure-store"

const url=getItem('url')



const urlApi=axios.create({
    //baseURL: 'http://192.168.1.3:8000/api/v1/'
    baseURL: url+'/api/v1/'

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

