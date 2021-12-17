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
                    </div>
                </form>
                
                <div className={style.registrationBtnBox}>
                    <button className={style.registrationBtnCancel} disabled={false}>Cancel</button>
                    <button className={style.registrationBtnReg} disabled={false}>Register</button>
                </div>
            </div>
            <div className={style.registrationOverlay}></div>
        </div>
    )
}

