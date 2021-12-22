import {Dispatch} from "redux";
import {packAPI, PacksResponseType} from "./packsPage-api";
import {setStatusAC, SetStatusType} from "../login/loginReducer";


const initialState = {
    data: null as null | PacksResponseType,
    packUserId: ''
};

type InitialStateType = typeof initialState;

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "packs/SET-PACK-USER-ID":
            return {...state, packUserId: action.packUserId}
        case "packs/SET-DATA":
            return {...state, data: action.data}
        default:
            return state;
    }
};

// actions

export const setPacksDataAC = (data: PacksResponseType) =>
    ({type: 'packs/SET-DATA', data} as const)
export const setPackUserIdAC = (packUserId: string) =>
    ({type: "packs/SET-PACK-USER-ID", packUserId} as const)

// types
export type SetPacksDataType = ReturnType<typeof setPacksDataAC>
export type SetPackUserIdType = ReturnType<typeof setPackUserIdAC>


export type ActionType = SetPacksDataType
    | SetStatusType
    | SetPackUserIdType

// thunks
export const getPacksTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    packAPI.getPack()
        .then(res => {
            dispatch(setStatusAC('succeeded'))
            dispatch(setPacksDataAC(res.data))
        })
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
}
