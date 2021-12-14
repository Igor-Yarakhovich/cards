import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import gomer from "../login/gomer.jpg"
import {setNameAC} from "../login/loginReducer";
import {EditableSpan} from "../login/editableSpan";

export const Profile: React.FC = () => {
    const dispatch = useDispatch()
    const email = useSelector<AppRootStateType, string>(state => state.login.data.email)
    const photo = useSelector<AppRootStateType, string | undefined>(state => state.login.data.avatar)
    const name = useSelector<AppRootStateType, string>(state => state.login.data.name)

    const startValueHandler = useCallback((title: string) => {
        dispatch(setNameAC(title))
    }, [dispatch, name])

    return (
        <div>
            <h1>Personal information</h1>
            <div> {photo ? photo : <img src={gomer}/>}</div>
            <div>email: {email}  </div>
            <div>name: <EditableSpan value={name} onChange={startValueHandler}/></div>
        </div>
    )
}