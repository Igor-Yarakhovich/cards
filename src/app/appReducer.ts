const initialState = {};

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-STATUS":
            return state;
        default:
            return state;
    }
};

// actions
const setAppStatusAC = () => ({type: "APP/SET-STATUS"} as const)

// thunks

// types
type InitialStateType = typeof initialState;
export type AppActionType = ReturnType<typeof setAppStatusAC>

export type StatusType = "idle" | "loading" | "succeeded" | "failed";
