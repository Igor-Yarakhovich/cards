import {Dispatch} from "redux";
import {recoveryAPI} from "../passwordRecovery/passwordRecovery-api";

const initialState = {
    setPasswordError: '',
    status: 'idle'
} as setPasswordType;

export const setPasswordReducer = (state: InitialStateType = initialState, action: AppActionType): setPasswordType => {
    switch (action.type) {
        case "SET-PASSWORD/SET-ERROR":
            return {...state, setPasswordError: action.value};
        case "SET-PASSWORD/SET-STATUS":
            return {...state, status: action.value};
        default:
            return state;
    }
};

// actions
export const setPasswordError = (value: string) => ({type: "SET-PASSWORD/SET-ERROR", value} as const)
export const setStatus = (value: setStatusType) => ({type: "SET-PASSWORD/SET-STATUS", value} as const)

// thunks
export const getPassword = (data: any) => async (dispatch: Dispatch) => {
    try {
        dispatch(setStatus("loading"));
        let res = await recoveryAPI.setNewPassword(data);
        dispatch(setStatus("succeeded"));
    } catch (e: any) {
        dispatch(setStatus("failed"));
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setPasswordError(error))
    }
};
// types
export type setPasswordType = {
    setPasswordError: string
    status: setStatusType
};

type InitialStateType = typeof initialState;

export type AppActionType = ReturnType<typeof setPasswordError>
    | ReturnType<typeof setStatus>

export type setStatusType = "idle" | "loading" | "succeeded" | "failed";
