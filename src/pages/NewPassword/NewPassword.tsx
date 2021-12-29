import React from "react";
import style from './NewPassword.module.css'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";

export const NewPassword = () => {
    return (
        <div>
            <div className={style.newPassword}>
                <h1>It-incubator</h1>
                <h2>Forgot your password?</h2>
                <div><SuperInputText placeholder={'Email'}/></div>
                <div className={style.text}>Enter your email address and we will send you further instructions</div>
                <div><SuperButton>Send Instructions</SuperButton></div>
                <div className={style.text}>Did you remember your password?</div>
                <div><SuperButton>Try logging in</SuperButton></div>
            </div>
        </div>
    )
}