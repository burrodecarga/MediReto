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