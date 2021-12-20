import React, {FormEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {passwordRecoveryError, recoveryPassword, recoveryStatusType} from "./passwordRecoveryReducer";
import {NavLink} from "react-router-dom";
import email from './../../assets/images/email.png'
import {Preloader} from "../../assets/Preloader/Preloader";
import styles from './PasswordRecovery.module.css'


export const PasswordRecovery: React.FC = () => {
    const [data, setData] = useState({
        email: '',
        from: 'test-front-admin <ai73a@yandex.by>',
        message: `<div style="background-color: lime; padding: 15px;">

        <a href='https://igor-yarakhovich.github.io/cards/#/setPassword/$token$'>

        Password recover link
        </a></div>`
    });

    const status = useSelector<AppRootStateType, recoveryStatusType>(state => state.passwordRecovery.status)
    const error = useSelector<AppRootStateType, string>(state => state.passwordRecovery.passwordRecoveryError)

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(recoveryPassword(data));
        e.preventDefault();
        data.email = ''
    };

    const errorClass = error ? styles.error : ''

    const setDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, email: e.target.value})
    }

    if (status === "succeeded") {

        dispatch(passwordRecoveryError(''))
        return <div className={styles.email}>
            <h2>Check your email and follow the link</h2>
            <img alt='' className={styles.emailPhoto} src={email}/>
        </div>
    }

    if (status === "loading") {
        return <Preloader/>
    }

    return (
        <div>
            <h1> IT-incubator</h1>
            <h2>Forgot your password?</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    value={data.email}
                    onChange={setDataHandler}
                />
                <button
                    color='dark-blue'
                    type={"submit"}
                >
                    send
                </button>
            </form>
            <p>Enter your email address and we will send you further instructions</p>
            <div className={errorClass}>{error}</div>
            <NavLink to={'/login'}>Try logging in</NavLink>
        </div>
    )
}