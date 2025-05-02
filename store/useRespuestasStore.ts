import { Resp } from "@/interfaces/interfaces"
import { create } from "zustand"

export type RespOuput=Resp[]
export type RespState={
    respuestas: Resp[]
    setRespuesta: (respuesta: Resp) => any
    delRespuesta: (id: number) => any
    resetRespuesta: (id: number) => any
}

export const useRespuestasStore=create<RespState>()((set, get) => ({

    respuestas: [],
    setRespuesta: (respuesta) => {
        set((state) => ({ respuestas: [...state.respuestas, respuesta] }))
    },

    delRespuesta: (id) => {
        set((state) => ({ respuestas: state.respuestas.filter(r => r.seleccion!==id) }))
    },

    resetRespuesta: (id) => {
        set((state) => ({ respuestas: state.respuestas.filter(r => r.pregunta!==id) }))
    }
}))