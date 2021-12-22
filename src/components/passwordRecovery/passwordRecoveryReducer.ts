import {Dispatch} from "redux";
import {recoveryAPI} from "./passwordRecovery-api";

const initialState = {
    passwordRecoveryError: '',
    status: 'idle',
    emailValidate: ''
} as passwordRecoveryType

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "PASSWORD_RECOVERY/RECOVERY_ERROR":
            return {...state, passwordRecoveryError: action.value};
        case "PASSWORD_RECOVERY/RECOVERY_STATUS":
            return {...state, status: action.value};
        case "PASSWORD_RECOVERY/EMAIL_VALIDATE":
            return {...state, emailValidate: action.value};
        default:
            return state;
    }
};

// actions
export const passwordRecoveryError = (value: string) => ({
    type: "PASSWORD_RECOVERY/RECOVERY_ERROR",
    value
} as const)

export const passwordRecoveryStatus = (value: recoveryStatusType) => ({
    type: "PASSWORD_RECOVERY/RECOVERY_STATUS",
    value
} as const)

export const passwordRecoveryEmailValidate = (value: string) => ({
    type: "PASSWORD_RECOVERY/EMAIL_VALIDATE",
    value
} as const)

// thunks

export const recoveryPassword = (data: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(passwordRecoveryStatus("loading"));
        await recoveryAPI.forgot(data);
        dispatch(passwordRecoveryStatus("succeeded"));
    } catch (e: any) {
        dispatch(passwordRecoveryStatus("failed"));
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        console.log(error)
        dispatch(passwordRecoveryError(error))
    }
};

// types
type InitialStateType = typeof initialState;

export type passwordRecoveryType = {
    passwordRecoveryError: string
    status: recoveryStatusType
    emailValidate: string
}

export type AppActionType = ReturnType<typeof passwordRecoveryError>
    | ReturnType<typeof passwordRecoveryStatus>
    | ReturnType<typeof passwordRecoveryEmailValidate>

export type recoveryStatusType = "idle" | "loading" | "succeeded" | "failed";
