export type AuthStatus='authenticated'|'unauthenticated'|'checking'

export type AulaType={
    id: number
    name: string
    periodo: string
    slug: string
    asignatura: string
    status: number
    teacher: string
    inicio: string
    fin: string
    asignatura_id: number
    teacher_id: number
    created_at: Date
    updated_at: Date
}

export type Option={
    id: number
    is_true: number
    answer: string
    question_id: number
    created_at: Date
    updated_at: Date
}


export type RespuestaOption={
    option: Option|undefined

}


export type ExamenForm={
    studen_id: string
    examen_id: string
    preguntas: string
    respuestas: string
}