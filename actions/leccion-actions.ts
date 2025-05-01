import { urlApi } from "@/api/urlApi"

export const getLeccionesDeModulo=async ($id: string) => {

    try {
        const { data }=await urlApi.get('/lecciones', {
            params: {
                id: $id
            }
        })

        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getExamenAPresentar=async ($id: string, $jd: string) => {

    try {
        const { data }=await urlApi.get('/evaluacion', {
            params: {
                id: $id,
                jd: $jd
            }
        })

        return data
    } catch (error) {
        console.log(error)
        return []
    }
}




export const getRespuestasApregunta=async ($id: string) => {

    try {
        const { data }=await urlApi.get('/respuestas', {
            params: {
                id: $id,
            }
        })

        return data
    } catch (error) {
        console.log(error)
        return []
    }
}






