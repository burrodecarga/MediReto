import { authLogin, authRegister, User } from '@/actions/auth-actions'
import { AuthState } from '@/interfaces/interfaces'
import { create } from 'zustand'
import { delDataObj } from '../trash/async-storage'
import { SecureStorageAdapter } from '../trash/secure-storage'
import { getDataObj, storeDataObj } from './async-storage'





export const useAuthStore=create<AuthState>()((set, get) => ({
    // Properties
    status: 'checking',
    token: undefined,
    user: undefined,

    // Actions
    changeStatus: async (token?: string, user?: User) => {
        if (!token||!user) {
            set({ status: 'unauthenticated', token: undefined, user: undefined })
            await SecureStorageAdapter.deleteItem('token')
            return false
        }

        await SecureStorageAdapter.setItem('token', token)
        if (user) {
            storeDataObj('user', user)
            set({
                status: 'authenticated',
                token: token,
                user: user,
            })
        }
        return true
    },

    login: async (email: string, password: string) => {
        const resp=await authLogin(email, password)
        return get().changeStatus(resp?.token, resp?.user)
    },

    register: async (name: string, last_name: string, cedula: string, phone: string, email: string, password: string) => {
        const resp=await authRegister(name, last_name, cedula, phone, email, password)
        return resp
    },

    checkStatus: async () => {
        const token=await SecureStorageAdapter.getItem('token')
        const getUser=await getDataObj('user')

        //console.log('SECURE STORAGE', token, getUser)
        const resp={
            token: token,
            user: getUser
        }

        //console.log('CHECK', getUser, token, resp)
        get().changeStatus(resp.token!, resp?.user)
    },

    logout: async () => {
        SecureStorageAdapter.deleteItem('token')
        set({ status: 'unauthenticated', token: undefined, user: undefined })
        try {

            delDataObj('user')
        } catch (error) {
            console.log(error)
        }
    },


}))
