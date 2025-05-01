
import * as SecureStore from 'expo-secure-store'
import { Alert } from 'react-native'

export class SecureStorageAdapter {
    static async setItem(key: string, value: string) {

        console.log('guardando token', key, value)
        try {
            await SecureStore.setItemAsync(key, value)

        } catch (error) {
            Alert.alert('error al salvar datos')
        }
    }

    static async getItem(key: string) {

        try {
            return await SecureStore.getItemAsync(key)
        } catch (error) {
            Alert.alert('error al obtener datos')
            return null

        }
    }

    static async deleteItem(key: string) {
        try {
            await SecureStore.deleteItemAsync(key)
        } catch (error) {
            Alert.alert('error al borrar datos')
        }
    }

    static async setdeleteItem(key: string) {
        try {
            await SecureStore.deleteItemAsync(key)
        } catch (error) {
            Alert.alert('error al borrar datos')
        }
    }
}