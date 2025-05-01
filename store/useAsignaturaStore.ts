import { Aula, User, StudenAsinaturaState } from '@/interfaces/interfaces'
import { create } from 'zustand'





export const useStudentAsignaturaStore = create<StudenAsinaturaState>()((set, get) => ({
    // Properties
    id: null,
    asignatura: '',
    teacher: '',
    inicio: '',
    fin: '',
    asignatura_id: '',
    teacher_id: '',
    modulos: [],
    // Actions
    setStudentAsignatura: async () => {

        return
    }
}))



