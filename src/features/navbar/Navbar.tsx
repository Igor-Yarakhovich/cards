import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {

    return <nav className={styles.nav}>
        <div>
            <NavLink to='/profile'
                     className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
            >Profile</NavLink>
        </div>
        <div>
            <NavLink to='/login'
                     className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
            >Login</NavLink>
        </div>
        <div>
            <NavLink to='/registration'
                     className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
            >Registration</NavLink>
        </div>
        <div>
            <NavLink to='/passwordRecovery'
                     className={({isActive}) => (isActive ? styles.activeStyle : styles.item)}
            >PasswordRecovery</NavLink>
        </div>
    </nav>

}