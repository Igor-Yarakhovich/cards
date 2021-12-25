import {Dispatch} from "redux";
import {
    setAppErrorAC, SetAppErrorActionType,
    setIsLoggedInAC,
    SetIsLoggedInType,
    setStatusAC,
    SetStatusType
} from "../login/loginReducer";
import {meAPI} from "./profilePage-api";
import {ResponseType} from "../login/loginPage-api";

const initialState = {
    data: {} as ResponseType,
    initialised: false
};

export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "profile/SET-DATA":
            return {...state, data: action.data}
        case "profile/SET-NAME":
            return {...state, data: {...state.data, name: action.name}}
        case "profile/SET-INITIALISED":
            return {...state, initialised: action.initialised}
        default:
            return state;
    }
};

// actions
export const isInitialisedAC = (initialised: boolean) =>
    ({type: 'profile/SET-INITIALISED', initialised} as const)
export const setNameAC = (name: string) =>
    ({type: 'profile/SET-NAME', name} as const)
export const setDataAC = (data: ResponseType) =>
    ({type: 'profile/SET-DATA', data} as const)
// thunks
export const initialiseTC = () => (dispatch: Dispatch<ActionType>) => {
    dispatch(setStatusAC('loading'))
    meAPI.me()
        .then(res => {
            if (res.data) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setStatusAC('succeeded'))
                dispatch(setDataAC(res.data))
                dispatch(isInitialisedAC(true))
                dispatch(setAppErrorAC(null))
            }
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))

        })
        .finally(() => {
                dispatch(setStatusAC('idle'))
            }
        )
}
export const newNameTC = (name: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setStatusAC('loading'))
    meAPI.setNewName(name)
        .then(res => {
            if (res.data) {
                dispatch(setStatusAC('succeeded'))
                dispatch(setNameAC(res.data.updatedUser.name))
            }
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
        })
        .finally(() => {
                dispatch(setStatusAC('idle'))
            }
        )
}
export const logOutTC = () => (dispatch: Dispatch<ActionType>) => {
    dispatch(setStatusAC('loading'))
    meAPI.logOut()
        .then(res => {
            if (res.data) {
                dispatch(setIsLoggedInAC(false))
            }
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console');
            dispatch(setAppErrorAC(error))
        })
        .finally(() => {
                dispatch(setStatusAC('idle'))
            }
        )
}
// types
export type SetInitialisedType = ReturnType<typeof isInitialisedAC>
export type SetDataType = ReturnType<typeof setDataAC>
export type SetNameType = ReturnType<typeof setNameAC>
type InitialStateType = typeof initialState;
export type ActionType =
    SetInitialisedType
    | SetDataType
    | SetNameType
    | SetIsLoggedInType
    | SetStatusType
    | SetAppErrorActionType
