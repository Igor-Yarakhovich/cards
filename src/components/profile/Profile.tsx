import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import gomer from "../login/gomer.jpg"
import {initialiseTC, logOutTC, newNameTC} from "./profileReducer";
import {Preloader} from "../../assets/Preloader/Preloader";
import {ErrorType} from "../login/loginReducer";
import {EditableSpan} from "./editableSpan";
import {Navigate} from "react-router-dom";

export const Profile: React.FC = () => {
    const dispatch = useDispatch()
    const email = useSelector<AppRootStateType, string>(state => state.profile.data.email)
    const photo = useSelector<AppRootStateType, string | undefined>(state => state.profile.data.avatar)
    const name = useSelector<AppRootStateType, string>(state => state.profile.data.name)
    const status = useSelector<AppRootStateType, string>(state => state.login.status)
    const error = useSelector<AppRootStateType, ErrorType>(state => state.login.error)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const initialised = useSelector<AppRootStateType, boolean>(state => state.profile.initialised)

    useEffect(() => {
        dispatch(initialiseTC())
    }, [])


    const startValueHandler = useCallback((title: string) => {
        dispatch(newNameTC(title))
    }, [dispatch])

    const logOutHandler = () => {
        dispatch(logOutTC())
    }
    if (!initialised) {
        return <Preloader/>
    }

    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }

    return (
        <div>
            <h1>Personal information</h1>
            {error ? error : (status === 'loading') && <Preloader/>}
            <div> {photo ? photo : <img src={gomer}/>}</div>
            <div>email: {email}  </div>
            <div>name: <EditableSpan value={name} onChange={startValueHandler}/></div>
            <button onClick={logOutHandler}>LogOut</button>
        </div>
    )
}