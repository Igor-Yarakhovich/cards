type InitialStateType = typeof initialState;
export type AppActionType =
    ReturnType<typeof setEmail>
    | ReturnType<typeof setPassword>
    | ReturnType<typeof setConfirmPassword>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setHidePassword>
    | ReturnType<typeof setHideConfirmPassword>
const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    isLoading: false,
    hidePassword: 'text',
    hideConfirmPassword: 'text'
};

export const registrationReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case 'Registration/SET-EMAIL': {
            const copyState = {...state}
            copyState.email = action.payload.email
            return copyState
        }
        case 'Registration/SET-Password': {
            const copyState = {...state}
            copyState.password = action.payload.password
            return copyState
        }
        case 'Registration/SET-ConfirmPassword': {
            const copyState = {...state}
            copyState.confirmPassword = action.payload.confirmPassword
            return copyState
        }
        case 'Registration/SET-Error': {
            const copyState = {...state}
            copyState.error = action.payload.error
            return copyState
        }
        case 'Registration/SET-IsLoading': {
            const copyState = {...state}
            copyState.isLoading = action.payload.isLoading
            return copyState
        }
        case 'Registration/SET-HidePassword': {
            const copyState = {...state}
            copyState.hidePassword = action.payload.hidePassword
            return copyState
        }
        case 'Registration/SET-HideConfirmPassword': {
            const copyState = {...state}
            copyState.hideConfirmPassword = action.payload.hideConfirmPassword
            return copyState
        }
        default:
            return state;
    }
};


export const setEmail = (email: string) => ({
    type: 'Registration/SET-EMAIL',
    payload: {
        email
    }
} as const)
export const setPassword = (password: string) => ({
    type: 'Registration/SET-Password',
    payload: {
        password
    }
} as const)
export const setConfirmPassword = (confirmPassword: string) => ({
    type: 'Registration/SET-ConfirmPassword',
    payload: {
        confirmPassword
    }
} as const)
export const setError = (error: string) => ({
    type: 'Registration/SET-Error',
    payload: {
        error
    }
} as const)
export const setIsLoading = (isLoading: boolean) => ({
    type: 'Registration/SET-IsLoading',
    payload: {
        isLoading
    }
} as const)
export const setHidePassword = (hidePassword: string) => ({
    type: 'Registration/SET-HidePassword',
    payload: {
        hidePassword
    }
} as const)
export const setHideConfirmPassword = (hideConfirmPassword: string) => ({
    type: 'Registration/SET-HideConfirmPassword',
    payload: {
        hideConfirmPassword
    }
} as const)