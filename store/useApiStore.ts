import { create } from "zustand"

type IpState={
    url: string
    setUrl: (url: string) => void
}

export const useApiStore=create<IpState>()((set, get) => ({
    url: 'http://192.168.1.3:8000/api/v1/',

    setUrl(url) {
        set((state) => ({ url: url }))
    },

}))
