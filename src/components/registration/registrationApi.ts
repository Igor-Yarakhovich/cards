import {instance} from "../../app/instance";


export type RegisterDataType = {
    email: string
    password: string
};
type RegisterResponseType = {
    addedUser: {}
    error?: string
}

export const registrationAPI = {
    register(data: RegisterDataType) {
        return instance.post<RegisterResponseType>("auth/register", data);
    },
};