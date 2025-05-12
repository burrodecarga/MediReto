import { urlApi } from "@/api/urlApi"

export const getAsignaturasDeEstudiantePorAulas=async ($id: string) => {

    try {
        //console.log('getAsignaturasDeEstudiantePorAulas')
        const { data }=await urlApi.get('/aulas', {
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


export const getAsignaturaDeEstudiantePorAula=async ($id: string) => {

    try {
        const { data }=await urlApi.get('/asignaturaDeEstudiantePorAula', {
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



export const getStudentAsignatura=async ($id: string) => {

    try {
        const { data }=await urlApi.get('/asignatura', {
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


export const inscribirAsignatura=async ($student_id: string, $asignatura_id: string) => {
    try {
        const { data }=await urlApi.get('/inscribir_asignatura', {
            params: {
                student_id: $student_id,
                asignatura_id: $asignatura_id
            }
        })

        return data

    } catch (error) {
        console.log(error)
    }
}
