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
        <div className={style.registration}>             
            <div className={style.registrationWrapper}>
                <h2 className={style.registrationTitle}>It-incubator</h2>
                <h3 className={style.registrationSubTitle}>Sign Up</h3>

                <form>
                    <div className={style.registrationEmailWrap}>
                        <label className={style.registrationLabel}>Email</label>
                        <input className={style.registrationInput} type="" value={email} onChange={onChangeEmailHandler}/>
                    </div>
                    <div className={style.registrationPasswordWrap}>
                        <label className={style.registrationLabel}>Password</label>
                        <input className={style.registrationInput} type={hidePassword} placeholder={''} value={password} 
                        onChange={onChangePasswordHandler}/>

                        <button className={style.registrationPasswordControl} onClick={onClickHidePasswordHandler}></button>
                    </div>
                    <div className={style.registrationPasswordWrap}>
                        <label className={style.registrationLabel}>Confirm password</label>
                        <input className={style.registrationInput} type={hideConfirmPassword} placeholder={''} value={confirmPassword}
                        onChange={onChangeConfirmPasswordHandler}/>
                        <button className={style.registrationPasswordControl} onClick={onClickHideConfirmPasswordHandler}></button>
                        {error}
                    </div>
                </form>
                
                <div className={style.registrationBtnBox}>
                    <button className={style.registrationBtnCancel} disabled={false} onClick={OnClickCancelHandler}>Cancel</button>
                    <button className={style.registrationBtnReg} disabled={false} onClick={OnClickRegistrationHandler}>Register</button>
                </div>

            </div>
            <div className={style.registrationOverlay}></div>
        </div>
    )
}







