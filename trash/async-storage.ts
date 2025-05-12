import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData=async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
        //saving error
    }
}

export const storeDataObj=async (key: string, value: object) => {
    try {
        const jsonValue=JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log('ERROR DE SALVADO', e)// saving error
    }
}


export const getData=async (key: string) => {
    try {
        const value=await AsyncStorage.getItem(key)
        console.log('AQUI')
        if (value!==null) {          // value previously stored    
        }
    } catch (e) {
        console.log(e)
        // error reading value
    }
}

export const getDataObj=async (key: string) => {
    try {
        const jsonValue=await AsyncStorage.getItem(key)
        return jsonValue!=null? JSON.parse(jsonValue):null
    } catch (e) {
        // error reading value
    }
}

export const delDataObj=async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // error reading value
    }
}