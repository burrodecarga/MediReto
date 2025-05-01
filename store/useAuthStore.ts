import { AuthState, User } from '@/interfaces/interfaces'
import { create } from 'zustand'
import { SecureStorageAdapter } from './secure-storage'
import { authLogin } from '@/actions/auth-actions'
import { delDataObj, getDataObj, storeDataObj } from './async-storage'





export const useAuthStore = create<AuthState>()((set, get) => ({
    // Properties
    status: 'checking',
    token: undefined,
    user: undefined,

    // Actions
    changeStatus: async (token?: string, user?: User) => {
        if (!token || !user) {
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
        const resp = await authLogin(email, password)
        return get().changeStatus(resp?.token, resp?.user)
    },

    checkStatus: async () => {
        const token = await SecureStorageAdapter.getItem('token')
        const getUser = await getDataObj('user')

        //console.log('SECURE STORAGE', token, getUser)
        const resp = {
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
