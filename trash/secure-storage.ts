
//import AsyncStorage from '@react-native-async-storage/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'
import { Alert, Platform } from 'react-native'

export class SecureStorageAdapter {
    static async setItem(key: string, value: string) {

        console.log('guardando token', key, value)
        try {

            if (Platform.OS==='web') {
                //await AsyncStorage.setItem(key, value)
            } else {


                await SecureStore.setItemAsync(key, value)
            }

        } catch (error) {
            console.log(error)
            Alert.alert('error al salvar datos')
        }
    }

    static async getItem(key: string) {
        console.log('Obteniendo key', key)
        try {
            if (Platform.OS==='web') {
                return await AsyncStorage.getItem(key)
            } else {

                return await SecureStore.getItemAsync(key)
            }
        } catch (error) {
            console.log(error)
            Alert.alert('error al obtener datos')
            return null

        }
    }

    static async deleteItem(key: string) {
        try {
            if (Platform.OS==='web') {
                await AsyncStorage.removeItem(key)
            } else {
                await SecureStore.deleteItemAsync(key)
            }
        } catch (error) {
            console.log(error)
            Alert.alert('error al borrar datos')
        }
    }

    static async setdeleteItem(key: string) {
        try {
            if (Platform.OS==='web') {
                await AsyncStorage.removeItem(key)
            } else {
                await SecureStore.deleteItemAsync(key)
            }
        } catch (error) {
            console.log(error)
            Alert.alert('error al borrar datos')
        }
    }
}