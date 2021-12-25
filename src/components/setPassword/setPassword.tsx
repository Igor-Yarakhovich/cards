import React, {FormEvent, useEffect, useState} from "react";
import style from './setPassword.module.css';
import styles from './setPassword.module.css';

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {StatusType} from "../../app/appReducer";
import {getPassword, setPasswordError, setPasswordValidate} from "./setPasswordReducer";
import {Navigate, useParams} from "react-router-dom";
import SuperInputText from "../superComponents/superInputText/SuperInputText";
import SuperButton from "../superComponents/superButton/SuperButton";

type UseStateType = {
    password: string,
    resetPasswordToken: string | undefined
}

export const SetPassword: React.FC = () => {

    const [data, setData] = useState<UseStateType>({
        password: '',
        resetPasswordToken: ''
    });

    const status = useSelector<AppRootStateType, StatusType>(state => state.setPassword.status);
    const error = useSelector<AppRootStateType, string | null>(state => state.setPassword.setPasswordError);
    const passwordValidate = useSelector<AppRootStateType, string>(state => state.setPassword.passwordValidate);

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                dispatch(setPasswordError(''))
            }, 4000)
        }
        if (passwordValidate) {
            setTimeout(() => {
                dispatch(setPasswordValidate(''))
            }, 4000)
        }
    }, [passwordValidate, error, dispatch])

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        const isValidate = validatePassword()
        if (isValidate) {
            e.preventDefault();
            dispatch(getPassword(data))
        } else {
            setData({...data, password: ''})
        }
    };

    const validatePassword = () => {
        if (!data.password) {
            dispatch(setPasswordValidate('Required password'))
            return false
        } else if (data.password.length > 15) {
            dispatch(setPasswordValidate('Your password should be not longer then 15 characters'));
            return false
        } else {
            dispatch(setPasswordValidate(''))
            return true
        }
    }

    const {token} = useParams<string>();

    if (status === "succeeded") {
        dispatch(setPasswordError(''))
        return <Navigate to={{
            pathname: '/login'
        }}
        />
    }

    const errorClass = error ? styles.error : '' || passwordValidate ? styles.error : ''

    return (

        <div className={style.setPassword}>
            <div className={style.setPasswordWrapper}>
                <h2 className={style.setPasswordTitle}> IT-incubator</h2>
                <h3 className={style.setPasswordSubTitle}>Create new password</h3>
                <form onSubmit={handleSubmit}>

                    <SuperInputText
                        className={style.passwordRecoveryPassword}
                        placeholder="Password"
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={e => setData({resetPasswordToken: token, password: e.target.value})}
                    />

                    <p className={style.setPasswordText}>Create new password and we will send you further instructions
                        to email</p>

                    <SuperButton
                        className={style.setPasswordBtn}
                        color='dark-blue'
                        type={"submit"}>
                        Create new password
                    </SuperButton>

                    <div>{error}</div>

                </form>
            </div>
        </div>
    )
}