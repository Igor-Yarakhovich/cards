import React from "react";
import style from './Registration.module.css'

export const Registration: React.FC = () => {

    return (
        <div className={style.main}>
           <div><h2>It-incubator</h2></div>
           <div><h3>Sign-up</h3></div>
           <div><input type="email" placeholder={'Email'}/></div>
           <div><input type="password" placeholder={'Password'}/><button>X</button></div>
           <div><input type="password" placeholder={'Confirm password'}/><button >X</button></div>
           <div><button disabled={false}>Cancel</button><button disabled={false}>Register</button></div>
        </div>
    )
}

