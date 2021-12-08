import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'

export const Navbar: React.FC = () => {
    return <div>
    <nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/login'>Login</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/registration'>Registration</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/passwordRecovery'>PasswordRecovery</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/passwordNew'>PasswordNew</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/superComponents'>SuperComponents</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to='/404'>Error</NavLink>
        </div>
    </nav>
    </div>
}