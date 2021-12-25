import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0/',
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

// api
export const meAPI = {
    me() {
        return instance.post <UserData>('auth/me')
    },
    setNewName(name: string) {
        return instance.put <{ name: string }, AxiosResponse<NewNameResponseType>>('auth/me', {name})
    },
    logOut() {
        return instance.delete<LogOutType>('auth/me')
    }
}

export type LogOutType = {
    info: string,
    error: string
}
export type NewNameResponseType = NewResponseType & { error?: string }
export type NewResponseType = {
    updatedUser: UserData
}
export type UserData = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}