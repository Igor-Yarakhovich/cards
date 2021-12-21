import React, {FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {StatusType} from "../../app/appReducer";
import {getPassword, setPasswordError, setPasswordValidate} from "./setPasswordReducer";
import {Navigate, useParams} from "react-router-dom";
import styles from "../setPassword/setPassword.module.css";

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
        <div>
            <h1> IT-incubator</h1>
            <h2>Create new password</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    id="password"
                    value={data.password}
                    onChange={e => setData({resetPasswordToken: token, password: e.target.value})}
                />
                <button
                    color='dark-blue'
                    type={"submit"}>
                    send
                </button>
                <p>Create new password and we will send you further instructions to email</p>
                <div className={errorClass}>{error}</div>
                <div className={errorClass}>{passwordValidate}</div>

            </form>
        </div>
    )
}