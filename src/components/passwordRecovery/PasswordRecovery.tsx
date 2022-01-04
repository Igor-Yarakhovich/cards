import React, {FormEvent, useEffect, useState} from "react";
import style from './PasswordRecovery.module.css';
import styles from './PasswordRecovery.module.css';
import SuperInputText from "../superComponents/superInputText/SuperInputText";
import SuperButton from "../superComponents/superButton/SuperButton";

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {
    passwordRecoveryEmailValidate,
    passwordRecoveryError,
    recoveryPassword,
    recoveryStatusType
} from "./passwordRecoveryReducer";
import {NavLink} from "react-router-dom";
import {Preloader} from "../../assets/Preloader/Preloader";
import CheckEmail from "../checkEmail/CheckEmail";


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
    const emailValidate = useSelector<AppRootStateType, string>(state => state.passwordRecovery.emailValidate)
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(passwordRecoveryError(''))
            }, 4000)
        }
        if (emailValidate) {
            setTimeout(() => {
                dispatch(passwordRecoveryEmailValidate(''))
            }, 4000)
        }
    }, [emailValidate, error, dispatch])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        const isValidate = validateEmail()
        if (isValidate) {
            dispatch(recoveryPassword(data));
            e.preventDefault();
        } else {
            setData({...data, email: ''})
        }
    };

    const validateEmail = () => {
        if (!data.email) {
            dispatch(passwordRecoveryEmailValidate('Required email'))
            return false
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            dispatch(passwordRecoveryEmailValidate('Invalid email address'))
            return false
        } else {
            dispatch(passwordRecoveryEmailValidate(''))
            return true
        }
    }

    const errorClass = error ? styles.error : '' || emailValidate ? styles.error : ''

    const setDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, email: e.target.value})
    }

    if (status === "succeeded") {
        dispatch(passwordRecoveryError(''))
        return <CheckEmail email={data.email}/>
    }

    if (status === "loading") {
        return <Preloader/>
    }

    return (
        <div className={style.passwordRecovery}>
            <div className={style.passwordRecoveryWrapper}>
                <h2 className={style.passwordRecoveryTitle}>IT-incubator</h2>
                <h3 className={style.passwordRecoverySubTitle}>Forgot your password?</h3>
                <form onSubmit={handleSubmit}>
                    <SuperInputText
                        className={style.passwordRecoveryEmail}
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={setDataHandler}/>
                    <p className={style.passwordRecoveryText}>Enter your email address and we will send you further
                        instructions</p>
                    <SuperButton
                        className={style.passwordRecoveryButton}
                        color='dark-blue'
                        type={"submit"}
                    >
                        Send Instructions
                    </SuperButton>
                </form>
                <div className={style.passwordRecoveryBottom}>

                    <p className={style.passwordRecoveryTextButton}>Did you remember your password?</p>
                    <div>{error}</div>
                    <NavLink className={style.passwordRecoveryLink} to={'/login'}>Try logging in</NavLink>
                </div>

            </div>

        </div>
    )
}