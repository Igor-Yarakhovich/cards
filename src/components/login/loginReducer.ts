import {Dispatch} from "redux";
import {authAPI, FormikErrorType} from "./loginPage-api";

const initialState = {
    isLoggedIn: false
};
type InitialStateType = typeof initialState;
export const loginReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state;
    }
};

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)
// types
export type ActionType = ReturnType<typeof setIsLoggedInAC>
// thunks
export const loginTC = (data: FormikErrorType) => (dispatch: Dispatch<ActionType>) => {
    authAPI.login(data)
        .then(res => {
            debugger
            if (res.data) {
                dispatch(setIsLoggedInAC(true))
            }
                    })}
