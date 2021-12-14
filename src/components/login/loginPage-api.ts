import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

// api
export const authAPI = {
    login(data: FormikErrorType) {
        return instance.post <FormikErrorType, AxiosResponse<ResponseType>>('auth/login', data)
    }
}
export type FormikErrorType = {
    email: string,
    password: string,
    rememberMe: boolean
}
export type ResponseType = {

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