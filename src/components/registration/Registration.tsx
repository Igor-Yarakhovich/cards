import React, {ChangeEvent} from 'react';
import style from './Registration.module.css'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
    setConfirmPassword,
    setEmail,
    setHideConfirmPassword,
    setHidePassword,
    setPassword
} from './registrationReducer';
import {AppRootStateType} from '../../app/store';


export const Registration: React.FC = () => {
    const dispatch = useDispatch()
    const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
    const {
        email,
        password,
        confirmPassword,
        hidePassword,
        hideConfirmPassword
    } = useAppSelector(state => state.registration)


    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value))
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.currentTarget.value))
    }
    const onChangeConfirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setConfirmPassword(e.currentTarget.value))
    }
    const onClickHidePasswordHandler = () => {
        if (hidePassword === 'password')
            dispatch(setHidePassword('text'))
        else dispatch(setHidePassword('password'))

    }
    const onClickHideConfirmPasswordHandler = () => {
        if (hideConfirmPassword === 'password')
            dispatch(setHideConfirmPassword('text'))
        else dispatch(setHideConfirmPassword('password'))
    }

    return (
        <div className={style.main}>
            <div><h2>It-incubator</h2></div>
            <div><h3>Sign-up</h3></div>
            <div><input type="" placeholder={'Email'} value={email} onChange={onChangeEmailHandler}/></div>
            <div><input type={hidePassword} placeholder={'Password'} value={password}
                        onChange={onChangePasswordHandler}/>
                <button onClick={onClickHidePasswordHandler}>глаз</button>
            </div>
            <div><input type={hideConfirmPassword} placeholder={'Confirm password'} value={confirmPassword}
                        onChange={onChangeConfirmPasswordHandler}/>
                <button onClick={onClickHideConfirmPasswordHandler}>глаз</button>
            </div>
            <div>

                <button disabled={false}>Cancel</button>
                <button disabled={false}>Register</button>
            </div>
        </div>
    )
}

