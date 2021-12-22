import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import avatar from "../../assets/images/avatar.png"
import {initialiseTC, logOutTC, newNameTC} from "./profileReducer";

import {Preloader} from "../../assets/Preloader/Preloader";
import {ErrorType, setAppErrorAC} from "../login/loginReducer";

import {EditableSpan} from "./editableSpan";
import {Login} from "../login/Login";
import {Navigate} from "react-router-dom";

export const Profile: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialiseTC())
    }, [dispatch])

    const email = useSelector<AppRootStateType, string>(state => state.profile.data.email)
    const photo = useSelector<AppRootStateType, string | undefined>(state => state.profile.data.avatar)
    const name = useSelector<AppRootStateType, string>(state => state.profile.data.name)
    const status = useSelector<AppRootStateType, string>(state => state.login.status)
    const error = useSelector<AppRootStateType, ErrorType>(state => state.login.error)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const initialised = useSelector<AppRootStateType, boolean>(state => state.profile.initialised)

    const startValueHandler = useCallback((title: string) => {
        dispatch(newNameTC(title))
    }, [dispatch])

    useEffect(()=>{
        if(error){
            setTimeout(()=>{
                setAppErrorAC(null)
            },4000)
        }
    },[error])

    const logOutHandler = () => {
        dispatch(logOutTC())
    }

    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }

    if (!initialised ) {
        return <Preloader/>
    }

    return (
        <div>
            <h1>Personal information</h1>
            {error && initialised ? error : (status === 'loading') }
            <div> {photo ? <img alt='' src={photo}/> : <img alt='' src={avatar}/>}</div>
            <div>email: {email}  </div>
            <div>name: <EditableSpan value={name} onChange={startValueHandler}/></div>
            <button onClick={logOutHandler}>LogOut</button>
        </div>
    )
}