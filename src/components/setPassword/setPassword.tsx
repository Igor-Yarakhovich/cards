import React, {FormEvent, useState} from "react";
import style from './SetPassword.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {StatusType} from "../../app/appReducer";
import {Dispatch} from "redux";
import {getPassword, setPasswordError} from "./setPasswordReducer";
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

    const dispatch: Dispatch<any> = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getPassword(data))
    };

    const {token} = useParams<string>();
    console.log(token)

    if (status === "succeeded") {
        dispatch(setPasswordError(''))
        return <Navigate to={{
            pathname: '/login'
        }}
        />
    }

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
                     
                    <p className={style.setPasswordText}>Create new password and we will send you further instructions to email</p>

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