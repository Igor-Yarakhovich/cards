import {Dispatch} from "redux";
import {packAPI, PacksResponseType, PackUserType} from "./packsPage-api";
import {setStatusAC, SetStatusType} from "../login/loginReducer";
import {AppRootStateType} from "../../app/store";
import {ThunkAction} from 'redux-thunk';


const initialState = {
    data: null as null | PacksResponseType,
    packUserId: ''
};

type InitialStateType = typeof initialState;

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "packs/SET-PACK-USER-ID":
            return {...state, packUserId: action.packUserId}
        case "packs/DELETE-PACK-USER-ID":
            return {
                ...state,
                data: {
                    cardPacks: state.data?.cardPacks.filter(cardPack => cardPack._id !== action.packId) as PackUserType[]
                } as PacksResponseType
            }
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

export const deletePackUserIdAC = (packId: string) =>
    ({type: "packs/DELETE-PACK-USER-ID", packId} as const)

// types
export type SetPacksDataType = ReturnType<typeof setPacksDataAC>
export type SetPackUserIdType = ReturnType<typeof setPackUserIdAC>
export type DeletePackUserIdType = ReturnType<typeof deletePackUserIdAC>

export type ActionType = SetPacksDataType
    | SetStatusType
    | SetPackUserIdType
    | DeletePackUserIdType

// thunks
export const getMyPacksTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAC('loading'))
    packAPI.getPack(userId)
        .then(res => {
            dispatch(setStatusAC('succeeded'))
            dispatch(setPacksDataAC(res.data))
            dispatch(setPackUserIdAC(userId))
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
}

export const addPacksTC = (): ThunkAction<void, AppRootStateType, unknown, ActionType> => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packAPI.createPack()
        .then(res => {
            dispatch(setStatusAC('succeeded'))
            dispatch(getMyPacksTC(res.data.newCardsPack.user_id))
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
}

export const deleteMyPacksTC = (packId: string):ThunkAction<void, AppRootStateType, unknown, ActionType> => (dispatch) => {
    dispatch(setStatusAC('loading'))
    packAPI.deletePack(packId)
        .then(res => {
            dispatch(setStatusAC('succeeded'))
            dispatch(deletePackUserIdAC(packId))
            dispatch(getMyPacksTC(''))
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch(setStatusAC('idle'))
        })
}
