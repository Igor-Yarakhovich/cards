import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import avatar from "../../assets/images/avatar.png"
import {newNameTC} from "./profileReducer";
import {ErrorType, setAppErrorAC} from "../login/loginReducer";

import {EditableSpan} from "./editableSpan";

import style from './Profile.module.css';
import SuperButton from "../superComponents/superButton/SuperButton";
import {Navigate} from "react-router-dom";
import Modal from "../../assets/modal/Modal";
import {TextField} from "@mui/material";
// import CheckEmail from "../checkEmail/CheckEmail";
// import { Pagination } from "../pagination/Pagination";
import StarRating from '../starRating/StarRating';

export const Profile: React.FC = () => {

    const dispatch = useDispatch()

    const email = useSelector<AppRootStateType, string>(state => state.profile.data.email)
    const photo = useSelector<AppRootStateType, string | undefined>(state => state.profile.data.avatar)
    const name = useSelector<AppRootStateType, string>(state => state.profile.data.name)
    const status = useSelector<AppRootStateType, string>(state => state.login.status)
    const error = useSelector<AppRootStateType, ErrorType>(state => state.login.error)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const initialised = useSelector<AppRootStateType, boolean>(state => state.profile.initialised)

    const [show, setShow] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handlerUploadClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

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

    if (!isLoggedIn) {
        return <Navigate to='/login'/>
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
                                type={"submit"}
                                onClick={() => setShow(true)}
                            >
                                Edit profile
                            </SuperButton>
                        </div>
                        <div className={style.profileLeftBottom}>
                            {/*<Slider/>*/}
                        </div>
                    </div>
                    <div className={style.profileRightBox}>
                        <div className={style.profileRightBoxWrapper}>
                            <h2 className={style.profileRightBoxTitle}>My packs list</h2>
                            <TextField
                                fullWidth sx={{m: 5}}
                                placeholder="Search..."
                                style={{margin: 0}}
                                focused size="small"/>
                            Таблица
                            Pagination
                            <StarRating/>
                            {/* <CheckEmail/> */}
                        </div>

                    </div>
                </div>

            </div>
            <>
                <Modal
                    enableBackground={true}
                    backgroundOnClick={() => setShow(false)}
                    width={600}
                    height={200}
                    show={show}
                >
                    <section className={style.profilePersonal}>
                        <h2 className={style.profilePersonalTitle}>Personal information</h2>

                        {error && initialised ? error : (status === 'loading')}

                        <div className={style.profilePersonalPhotoWrapper}>
                            {photo ? <img alt='' src={photo}/> : <img alt='' src={avatar}/>}
                        </div>

                        <input type="file" hidden={true} ref={inputRef}/>
                        <button className={style.profilePersonalSelectPhoto} onClick={handlerUploadClick}></button>

                        <div className={style.profilePersonalNameRow}>
                            <span className={style.profilePersonalRowTitle}>Nickname:</span> <br/>
                            <EditableSpan value={name} onChange={startValueHandler}/>
                        </div>
                        <div className={style.profilePersonalEmailRow}>
                            <span className={style.profilePersonalRowTitle}>Email:</span><br/>
                            {email}
                        </div>

                        <div className={style.profileBtnBox}>
                            <button className={style.profileBtnCancel} onClick={() => setShow(false)}>Cancel</button>
                            <button className={style.profileBtnSave}>Save</button>
                        </div>
                    </section>
                </Modal>
            </>

        </section>
    )
}