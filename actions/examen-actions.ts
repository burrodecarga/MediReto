import { urlApi } from "@/api/urlApi"
import { Proto, Resp } from "@/interfaces/interfaces"
import axios, { AxiosRequestConfig } from 'axios'



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

export const set_examen=async (
    $examen_id: string,
    $teacher_id: string,
    $student_name: string,
    $student_id: string,
    $preguntas: Proto[],
    $respuestas: Resp[],
    $acertadas: string,
    $desacertadas: string,
    $no_contestadas: string

) => {
    {
        try {
            const config: AxiosRequestConfig={
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const response=await axios.post(
                'http://192.168.1.9:8000/api/v1/set_examen'
                , {
                    param: {
                        examen_id: $examen_id,
                        teacher_id: $teacher_id,
                        student_name: $student_name,
                        student_id: $student_id,
                        preguntas: $preguntas,
                        respuestas: $respuestas,
                        acertadas: $acertadas,
                        desacertadas: $desacertadas,
                        no_contestadas: $no_contestadas,
                    },
                    config
                }
            )

            //console.warn('Response:', response.data)
            return response.data
        } catch (error: any) {
            console.error('Error sending array:', error.message)
        }
    }
}
