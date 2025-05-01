import { urlApi } from "@/api/urlApi"
import { Alert } from "react-native"


export interface LoginResponse {
    user: User
    token: string
}

export interface User {
    name: string
    email: string
}


const returnUserTokens=(data: LoginResponse): { user: User, token: string } => {
    const { token, user }=data

    return {
        token,
        user
    }
}


export const authLogin=async (email: string, password: string) => {

    email=email.toLowerCase()
    //console.log('usando /login', email, password)
    try {
        const { data }=await urlApi.post<LoginResponse>('/login', { email, password })
        return returnUserTokens(data)
    } catch (error) {
        console.log(error)
        //throw new Error('credenciales Inválidas')
        return null

    }
}

export const authCheckStatus=async () => {

    try {
        const { data }=await urlApi.get<LoginResponse>('/check-status')
        return returnUserTokens(data)
    } catch (error) {
        return null
    }
}


export const authPrueba=async () => {


    fetch("http://192.168.1.11:8000/api/v1/test", {
        method: "GET",
        // headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        // },

    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson)

            Alert.alert("logged")

        })
        .catch((error) => {
            console.log('erroc message')
        })
}