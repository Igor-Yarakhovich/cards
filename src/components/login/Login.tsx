import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {FormikErrorType} from "./loginPage-api";
import {ErrorType, loginTC} from "./loginReducer";
import {Navigate, NavLink} from "react-router-dom";
import {AppRootStateType} from "../../app/store";
import {Preloader} from "../../assets/Preloader/Preloader";
import styles from "../../features/navbar/Navbar.module.css";

export const Login: React.FC = () => {

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const status = useSelector<AppRootStateType, string>(state => state.login.status)
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
        <div>
            <h1> IT-incubator</h1>
            <p>Sign in</p>
            {error ? error : (status === 'loading') && <Preloader/>}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type={"email"} placeholder={'email'}
                           {...formik.getFieldProps('email')}/>
                </div>
                {formik.touched.email &&
                formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <div>
                    <input type={"password"} placeholder={'password'}
                           {...formik.getFieldProps('password')}/>
                </div>
                {formik.touched.password &&
                formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}
                <div>
                    <input type={'checkbox'}/> Remember me
                </div>
                <NavLink to='/passwordRecovery'>Forgot password</NavLink>
                <div>
                    <button type={'submit'} disabled={status === 'loading'}>login</button>
                </div>
                <NavLink to='/registration'>Sign up</NavLink>
            </form>
        </div>
    )
}