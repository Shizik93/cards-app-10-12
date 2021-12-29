import React from "react";
import style from './CheckEmail.module.css'
import img from './Group 281.svg'

export const CheckEmail = () => {
    return (
        <div>
            <div className={style.checkEmail}>
                <h1>It-incubator</h1>
                <img alt={'Email'} src={img}/>
                <h2>Check Email</h2>
                <div className={style.text}>We've sent an Email with instructions to example@mail.com</div>

            </div>
        </div>
    )
}