import axios from "axios";

export type RegisterDataType = {
    email: string
    password: string
};
type RegisterResponseType = {
    addedUser: {}
    error?: string
}

const instance = axios.create({
    baseURL:"https://neko-back.herokuapp.com/2.0/",
    withCredentials:true
})

export const registrationAPI = {
    register(data: RegisterDataType) {
        return instance.post<RegisterResponseType>("auth/register", data);
    },
};