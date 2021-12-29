import React from "react";
import style from './CheckEmail.module.css';
import letter from './../../assets/images/letter.svg';
// import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";

// const email = useSelector<AppRootStateType, string>(state => state.profile.data.email)


function CheckEmail() {

    return ( 
        <div className={style.checkEmail}>
            <h2 className={style.checkEmailTitle}>IT-incubator</h2>
            <div className={style.checkEmailWrapImg}>
                <img className={style.checkEmailImg} src={letter} alt=""/>
            </div>
            <h3 className={style.checkEmailSubTitle}>Check Email</h3>
            <div className={style.checkEmailBottom}>
                <span className={style.checkEmailText}>We’ve sent an Email with instructions to <br/></span>
                <span className={style.checkEmailText}>example@mail.com  {/* {email} */}</span>
               
            </div>
        </div>
    
    );
}

export default CheckEmail;