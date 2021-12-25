import {instance} from "../../app/instance";
import {AxiosResponse} from "axios";


// api

export const authAPI = {
    login(dat: FormikErrorType) {
        return instance.post <FormikErrorType, AxiosResponse<ResponseType>>('auth/login', dat)
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