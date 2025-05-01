import { AuthStatus } from "./types/types"

export interface AuthState {
    status: AuthStatus
    token?: string
    user?: User

    login: (email: string, password: string) => Promise<boolean>
    checkStatus: () => Promise<void>
    logout: () => Promise<void>

    changeStatus: (token?: string, user?: User) => Promise<boolean>
}

export interface User {
    id?: string
    email: string
    name: string
    token?: string
    cedula?: number
    lastname?: string
    fullname?: string
    isActive?: boolean
    role?: string[]
}



export interface Aula {
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
    pivot?: Pivot
}

export interface Pivot {
    student_id: number
    aula_id: number
    created_at: Date
    updated_at: Date
}


export interface StudentAsignaturaState {
    id: number|null
    periodo: string
    asignaturas: []

}


export interface StudenAsinaturaState {
    id: number|null|string
    asignatura: string
    teacher: string
    inicio: string
    fin: string
    asignatura_id: number|null|string
    teacher_id: number|null|string
    modulos?: []

    setStudentAsignatura: () => {}
}



export interface Asignatura {
    id: number
    name: string
    description: string
    asignatura_id: number
    created_at: Date
    updated_at: Date
}

export interface Leccion {
    id: number
    name: string
    description: string
    video?: null
    modulo_id: number
    created_at?: Date
    updated_at?: Date
}



export interface Examen {
    id: number
    name: string
    description: string
    type: string
    level: string
    asignatura_id: number
    modulo_id: null
    asignatura: string
    modulo: null
    lesson: null
    lesson_id: null
    teacher_id: number
    activo: number
    created_at: Date
    updated_at: Date
}



export interface Question {
    id: number
    question: string
    type: Type
    level: string
    asignatura_id: number
    modulo_id: number
    asignatura: Asignatura
    modulo: string
    lesson: string
    lesson_id: number
    created_at: Date
    updated_at: Date
}

export enum Type {
    Multiple="multiple",
    Simple="simple",
}



export interface Option {
    id: number
    is_true: number
    answer: string
    question_id: number
    created_at: Date
    updated_at: Date
}

export interface Options {
    options: Option[]
}



export interface Pregunta {
    id: number
    examen_id: number
    asignatura_id: number
    teacher_id: number
    question_id: number
    option_id: number
    question: string
    answer: Answer
    is_true: number
    created_at: Date
    updated_at: Date
}




export enum Answer {
    OpciónCorrectaMarcadaComoTrue=" Opción Correcta marcada como true",
    OpciónIncorrectaOFalsa="Opción incorrecta o falsa",
    RespuestaCorrectaMarcadaComoTrue=" Respuesta Correcta marcada como true",
    RespuestaFalsa="respuesta falsa",
    RespuestaFalsaOIncorrecta="respuesta falsa o incorrecta",
}



export interface Prototipo {
    id: number
    examen_id: number
    asignatura_id: number
    teacher_id: number
    question_id: number
    question: string
    option_0: string
    option_1: string
    option_2?: string|null
    option_3?: string|null
    option_4?: string|null
    created_at?: Date
    updated_at?: Date
}




export interface Proto {
    id: number
    examen_id: number
    asignatura_id: number
    teacher_id: number
    question_id: number
    option_id: number
    true: number
    seleccted: number
    answer: string
    question?: string
    option_0: string
    option_1: string
    option_2?: string
    option_3?: string
    option_4?: string
    created_at?: Date
    updated_at?: Date
    option_0_value: number
    option_1_value: number
    option_2_value?: number
    option_3_value?: number
    option_4_value?: number
}

export interface Resp {
    id: number
    pregunta: number
    respuesta: number
    seleccion: number
    puntos: number

}



export interface Detalle {
    id: number
    examen_id: number
    asignatura_id: number
    teacher_id: number
    question_id: number
    option_id: number
    question: string
    answer: string
    is_true: number
    created_at: Date
    updated_at: Date
}























