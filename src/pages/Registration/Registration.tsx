import React from "react";
import style from './Registration.module.css'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";

export const Registration = () => {
    return (
        <div>
            <div className={style.registration}>
                <h1>It-incubator</h1>
                <h2>Sign Up</h2>
                <div>
                    <div><SuperInputText placeholder={'Email'}/></div>
                    <div><SuperInputText placeholder={'Password'}/></div>
                    <div><SuperInputText placeholder={'Confirm password'}/></div>
                </div>
                <div>
                    <SuperButton>Cancel</SuperButton>
                    <SuperButton>Register</SuperButton>
                </div>

            </div>
        </div>
    )
}