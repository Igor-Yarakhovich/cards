import {Dispatch} from "redux";
import {authAPI, FormikErrorType, ResponseType} from "./loginPage-api";
import {setDataAC, SetDataType} from "../profile/profileReducer";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded'

const initialState = {
    isLoggedIn: false,
    status: 'idle',
    error: null as ErrorType,
    /*data: {} as ResponseType*/
};
export type ErrorType = string | null
type InitialStateType = typeof initialState;

export const loginReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        /*case "login/SET-DATA":
            return {...state, data: action.data}*/
        case "login/SET-STATUS":
            return {...state, status: action.status}
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state;
    }
};

// actions

/*export const setDataAC = (data: ResponseType) =>
    ({type: 'login/SET-DATA', data} as const)*/
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setStatusAC = (status: RequestStatusType) =>
    ({type: 'login/SET-STATUS', status} as const)
export const setAppErrorAC = (error: string | null) =>
    ({type: 'APP/SET-ERROR', error} as const)
// types
export type SetIsLoggedInType = ReturnType<typeof setIsLoggedInAC>
export type SetStatusType = ReturnType<typeof setStatusAC>
/*export type SetDataType = ReturnType<typeof setDataAC>*/
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type ActionType = SetDataType | SetIsLoggedInType | SetStatusType | SetAppErrorActionType
// thunks
export const loginTC = (dat: FormikErrorType) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setStatusAC('loading'))
    authAPI.login(dat)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setStatusAC('succeeded'))
            dispatch(setDataAC(res.data))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
            dispatch(setAppErrorAC(null))
        })
}
