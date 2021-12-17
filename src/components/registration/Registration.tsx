import React, {ChangeEvent} from 'react';
import style from './Registration.module.css'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
    getRegistration,
    setConfirmPassword,
    setEmail, setError,
    setHideConfirmPassword,
    setHidePassword, setIsRegistration,
    setPassword
} from './registrationReducer';
import {AppRootStateType} from '../../app/store';
import {useNavigate} from 'react-router-dom';


export const Registration = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
    const {
        email,
        password,
        confirmPassword,
        hidePassword,
        hideConfirmPassword, error, isLoading, isRegistration
    } = useAppSelector(state => state.registration)


    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value))
        dispatch(setError(''))
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.currentTarget.value))
        dispatch(setError(''))
    }
    const onChangeConfirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setConfirmPassword(e.currentTarget.value))
        dispatch(setError(''))
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
    const OnClickCancelHandler = () => {
        dispatch(setIsRegistration(false))
        dispatch(setError(''))
        dispatch(setEmail(''))
        dispatch(setPassword(''))
        dispatch(setConfirmPassword(''))
        return navigate('/login')
    }
    const OnClickRegistrationHandler = () => {
        if (email && password && password === confirmPassword) {
            dispatch(getRegistration({email, password: confirmPassword}))
        } else {
            dispatch(setError('not valid email/password '))
        }
    }
    if (isRegistration) {
        navigate('/login')
    }
    return (
        <div className={style.main}>
            <div><h2>It-incubator</h2></div>
            <div><h3>Sign-up</h3></div>
            <div><input type="" placeholder={'Email'} value={email} onChange={onChangeEmailHandler}/></div>
            <div><input type={hidePassword} placeholder={'Password'} value={password}
                        onChange={onChangePasswordHandler}/>
                <button onClick={onClickHidePasswordHandler}>hide</button>
            </div>
            <div><input type={hideConfirmPassword} placeholder={'Confirm password'} value={confirmPassword}
                        onChange={onChangeConfirmPasswordHandler}/>
                <button onClick={onClickHideConfirmPasswordHandler}>hide</button>
            </div>

            <div style={{color: 'red'}}>{error}</div>
            {isLoading && <div>загрузка....</div>}
            <div>
                <button disabled={isLoading} onClick={OnClickCancelHandler}>Cancel</button>
                <button disabled={isLoading} onClick={OnClickRegistrationHandler}>Register</button>
            </div>
        </div>
    )
}







