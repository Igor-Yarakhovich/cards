import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {appReducer} from "./appReducer";
import {loginReducer} from "../components/login/loginReducer";
import {registrationReducer} from "../components/registration/registrationReducer";
import {profileReducer} from "../components/profile/profileReducer";
import {page404Reducer} from "../components/page404/page404Reducer";
import {setPasswordReducer} from "../components/setPassword/setPasswordReducer";
import {passwordRecoveryReducer} from "../components/passwordRecovery/passwordRecoveryReducer";
import {packsReducer} from "../components/packs/packsReducer";
import {cardsReducer} from "../components/cards/cardsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    page404: page404Reducer,
    passwordRecovery: passwordRecoveryReducer,
    setPassword: setPasswordReducer,
    packs:packsReducer,
    cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppRootStateType,
    unknown,
    AnyAction>

// @ts-ignore
window.store = store;