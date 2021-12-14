import React, {FormEvent, useState} from "react";
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

    if (status === "succeeded") {
        dispatch(setPasswordError(''))
        return <Navigate to={{
            pathname: '/login'
        }}
        />
    }

    return (
        <div>
            <h1> IT-incubator</h1>
            <form onSubmit={handleSubmit}>
                <SuperInputText
                    type="password"
                    id="password"
                    value={data.password}
                    onChange={e => setData({resetPasswordToken: token, password: e.target.value})}
                />
                <SuperButton
                    color='dark-blue'
                    type={"submit"}>
                    send
                </SuperButton>
                <p>Create new password and we will send you further instructions to email</p>
                <div>{error}</div>

            </form>
        </div>
    )
}