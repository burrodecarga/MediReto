import { urlApi } from "@/api/urlApi"




export const get_preguntas_por_examen=async ($id: string) => {

    try {
        console.log('PREGUNTAS POR EXAMEN ID : '+$id)
        const { data }=await urlApi.get('/get_preguntas_por_examen', {
            params: {
                examen_id: $id,
            }
        })

        console.log('get_preguntas_por_examen', $id, data)
        return data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const get_preguntas_por_asignatura=async ($asignatura_id: string, $teacher_id: string) => {
    
    try {
        console.log('ID-ASIGNATURA:'+$asignatura_id+'- JD-TEACHER-'+$teacher_id)
        const { data }=await urlApi.get('/get_preguntas_por_asignatura', {
            params: {
                asignatura_id: $asignatura_id,
                teacher_id: $teacher_id,
            }
        })

        return data
    } catch (error) {
        console.log(error)
        return []
    }

}

export const get_preguntas_por_block=async ($asignatura_id: string, $teacher_id: string) => {
    
    try {
        console.log('ID-ASIGNATURA:'+$asignatura_id+'- JD-TEACHER-'+$teacher_id)
        const { data }=await urlApi.get('/get_preguntas_por_block', {
            params: {
                asignatura_id: $asignatura_id,
                teacher_id: $teacher_id,
            }
        })

        return data
    } catch (error) {
        console.log(error)
        return []
    }

}
