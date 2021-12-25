import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import avatar from "../../assets/images/avatar.png"
import {logOutTC, newNameTC} from "./profileReducer";

import {Preloader} from "../../assets/Preloader/Preloader";
import {ErrorType, setAppErrorAC} from "../login/loginReducer";

import {EditableSpan} from "./editableSpan";
import {Login} from "../login/Login";

import style from './Profile.module.css';
import SuperButton from "../superComponents/superButton/SuperButton";
import Slider from '../searchProduct/slider/Slider';
// import { Pagination } from "../pagination/Pagination";

export const Profile: React.FC = () => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(initialiseTC())
    // }, [dispatch])

    const email = useSelector<AppRootStateType, string>(state => state.profile.data.email)
    const photo = useSelector<AppRootStateType, string | undefined>(state => state.profile.data.avatar)
    const name = useSelector<AppRootStateType, string>(state => state.profile.data.name)
    const status = useSelector<AppRootStateType, string>(state => state.login.status)
    const error = useSelector<AppRootStateType, ErrorType>(state => state.login.error)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const initialised = useSelector<AppRootStateType, boolean>(state => state.profile.initialised)

    const startValueHandler = useCallback((title: string) => {
        dispatch(newNameTC(title))
    }, [dispatch])

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setAppErrorAC(null)
            }, 4000)
        }
    }, [error])


    console.log('initialised: ', initialised)

    if (!isLoggedIn) {
        return <Login/>
    }

    if (!initialised) {
        return <Preloader/>
    }

    return (
        <section className={style.profile}>
            <div className={style.container}>
                <div className={style.profileWrapper}>
                    <div className={style.profileLeftBox}>
                        <div className={style.profileLeftTop}>
                            <div className={style.profileWrapImg}>
                                <img className={style.profileAvatarImg} src={avatar} alt=""/>
                            </div>
                            <div className={style.profileNameUser}><EditableSpan value={name}
                                                                                 onChange={startValueHandler}/></div>
                            <div className={style.profileUserProf}>Front-end developer</div>
                            <SuperButton
                                className={style.profilePersonalBtn}
                                color='white'
                                type={"submit"}>
                                Edit profile
                            </SuperButton>
                        </div>
                        <div className={style.profileLeftBottom}>

                            <Slider/>

                        </div>
                    </div>
                    <div className={style.profileRightBox}>
                        <h2>My packs list</h2>
                        <form action="">
                            <input type="search" name="" id=""/>
                        </form>
                        Таблица
                        Pagination
                    </div>
                </div>

            </div>

            {/*<section className={style.profilePersonal}>*/}
            {/*    <h2 className={style.profilePersonalTitle}>Personal information</h2>*/}

            {/*    {error && initialised ? error : (status === 'loading')}*/}

            {/*    <div> {photo ? <img alt='' src={photo}/> : <img alt='' src={avatar}/>}</div>*/}


            {/*    <div>name: <EditableSpan value={name} onChange={startValueHandler}/></div>*/}
            {/*    <div>email: {email}  </div>*/}

            {/*    <div className={style.profileBtnBox}>*/}
            {/*        <button className={style.profileBtnCancel}>Cancel</button>*/}
            {/*        <button className={style.profileBtnSave}>Save</button>*/}
            {/*    </div>*/}
            {/*</section>*/}


        </section>
    )
}