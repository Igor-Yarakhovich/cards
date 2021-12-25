import React from "react";
import s from './Login.module.css';
import {Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {FormikErrorType} from "./loginPage-api";
import {ErrorType, loginTC} from "./loginReducer";
import {AppRootStateType} from "../../app/store";
import {Preloader} from "../../assets/Preloader/Preloader";

export const Login: React.FC = () => {

    const status = useSelector<AppRootStateType, string>(state => state.login.status)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const error = useSelector<AppRootStateType, ErrorType>(state => state.login.error)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length > 15) {
                errors.password = 'Your password should be not longer then 15 characters';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            formik.resetForm();
            dispatch(loginTC(values))
        }
    })

    if (isLoggedIn) {
        return <Navigate to='/profile'/>
    }

    return (
        <div className={s.login}>
            <div className={s.loginWrapper}>
                <h2 className={s.loginTitle}>It-incubator</h2>
                <h3 className={s.loginSubtitle}>Sign In</h3>
                <form onSubmit={formik.handleSubmit}>
                    <div className={s.loginEmailWrap}>
                        <label className={s.loginLabel}>Email</label>
                        <input className={s.loginInput} type={"email"} placeholder={''}
                        {...formik.getFieldProps('email')}/>
                    </div>
                    {formik.touched.email &&
                    formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                    <div className={s.loginPasswordWrap}>
                        <label className={s.loginLabel}>Password</label>
                        <input className={s.loginInput} type={"password"} placeholder={''}
                        {...formik.getFieldProps('password')}/>
                        <button className={s.loginPasswordControl}></button>

                    </div>
                    {formik.touched.password &&
                    formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                    {/* <div className={s.loginCheckbox}>
                        <input type={'checkbox'}/>
                        <label>Remember me</label>
                        
                    </div> */}
                    {error && error}
                    {status === 'loading' && <Preloader/>}

                    <a className={s.loginLinkForgot} href={"#/passwordRecovery"}>Forgot Password</a>

                    <div className={s.loginBottom}>
                        <button className={s.loginBtn} type={'submit'} disabled={status === 'loading'}>Login</button>

                        <p className={s.loginText}>Don’t have an account?</p>
                        <a className={s.loginLinkSignUp} href={'#/registration'}>Sign Up</a>
                    </div>
                </form>

            </div>
        </div>
    )
}