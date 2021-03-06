import {instance} from "../../app/instance";


// api
export const recoveryAPI = {
    forgot(data: ForgotType) {
        return instance.post<ForgotResponseType>("auth/forgot", data);
    },
    setNewPassword(data: SetType) {
        return instance.post<ResponseType>("auth/set-new-password", data);
    },
};


// types
export type ForgotType = {
    email: string
    from: string
    message: string
};
export type ResponseType = {
    info: string
    error: string
}

export type ForgotResponseType = ResponseType & {
    answer: boolean
    html: boolean
    success: boolean
};
export type SetType = {
    password: string
    resetPasswordToken: string
};