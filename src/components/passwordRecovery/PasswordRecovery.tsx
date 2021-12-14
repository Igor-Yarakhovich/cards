import React, {FormEvent, useState} from "react";
import SuperInputText from "../superComponents/superInputText/SuperInputText";
import SuperButton from "../superComponents/superButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {passwordRecoveryError, recoveryPassword, recoveryStatusType} from "./passwordRecoveryReducer";
import {Dispatch} from "redux";
import {NavLink} from "react-router-dom";


export const PasswordRecovery: React.FC = () => {
    const [data, setData] = useState({
        email: '',
        from: 'test-front-admin <ai73a@yandex.by>',
        message: `<div style="background-color: lime; padding: 15px;">
        <a href=igor-yarakhovich.github.io/cards/#/passwordNew/$token$'>
        Password recover link
        </a></div>`
    });

    const status = useSelector<AppRootStateType, recoveryStatusType>(state => state.passwordRecovery.status)
    const error = useSelector<AppRootStateType, string>(state => state.passwordRecovery.passwordRecoveryError);

    const dispatch: Dispatch<any> = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(recoveryPassword(data));
        e.preventDefault();
    };

    if (status === "succeeded") {

        dispatch(passwordRecoveryError(''))
        return <h2>Check your email and follow the link</h2>
    }

    // if (status === "loading") {
    //     return <Preloader/>
    // }

    return (
        <div>
            <h1> IT-incubator</h1>
            <h2>Forgot your password?</h2>
            <form onSubmit={handleSubmit}>
                <SuperInputText
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={e => setData({...data, email: e.target.value})}/>
                <SuperButton
                    color='dark-blue'
                    type={"submit"}>
                    send
                </SuperButton>
            </form>
            <p>Enter your email address and we will send you further instructions</p>
            <div>{error}</div>
            <NavLink to={'/login'}>Try logging in</NavLink>
        </div>
    )

}