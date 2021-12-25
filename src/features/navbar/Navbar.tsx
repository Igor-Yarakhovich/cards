import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

import img1 from '../../assets/images/packsList.svg';
import img2 from '../../assets/images/profileIcon.svg';
import {logOutTC} from "../../components/profile/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";

export const Navbar: React.FC = () => {
    const dispatch = useDispatch()
    const logOutHandler = () => {
        dispatch(logOutTC())
    }

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const loginHandler = isLoggedIn
        ? <NavLink to=''
                   onClick={logOutHandler}
                   className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
        >LogOut</NavLink>
        : <NavLink to='/login'
                   className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
        >Login</NavLink>


    return <nav className={styles.nav}>

        <div className={styles.container}>
            <div className={styles.navWrapper}>

                <div>
                    <h2 className={styles.navLogo}>It-incubator</h2>
                </div>

                <div className={styles.navTabs}>
                    <div className={styles.navTabsItem}>
                        <NavLink
                            to='/packs'
                            className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}>
                            <img className={styles.navTabsImg} src={img1} alt=""/>
                            Packs list
                        </NavLink>
                    </div>
                    <div className={styles.navTabsItem}>
                        <NavLink
                            to='/profile'
                            className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}>
                            <img className={styles.navTabsImg} src={img2} alt=""/>
                            Profile
                        </NavLink>
                    </div>
                </div>

                <div className={styles.navRight}>

                    <div className={styles.navTabsItem}>
                        {loginHandler}
                    </div>
                    <div className={styles.navTabsItem}>
                        <NavLink to='/registration'
                                 className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
                        >Registration</NavLink>
                    </div>
                    <div className={styles.navTabsItem}>
                        <NavLink to='/passwordRecovery'
                                 className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
                        >PasswordRecovery</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>


}