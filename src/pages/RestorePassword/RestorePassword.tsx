import React, {useState} from "react";
import style from './RestorePassword.module.css'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {forgotNewPasswordTC} from "../../bll/reducers/restorePassword-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../Header/Header";

export const RestorePassword = () => {
    const dispatch = useDispatch()
    const emailRecovery = useSelector((state: AppRootStateType) => state.restorePassword.emailRecovery)
    const [email, setEmail] = useState('')
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    if (emailRecovery) {
        return (
            <Navigate to={PATH.CHECK_EMAIL}/>
        )
    }
    return (
        <div>
            <div className={style.newPassword}>
                <h1>It-incubator</h1>
                <h2>Forgot your password?</h2>
                <div><SuperInputText defaultValue={email} onChange={onChangeEmail} placeholder={'Email'}/></div>
                <div className={style.text}>Enter your email address and we will send you further instructions</div>
                <div><SuperButton
                    onClick={() => {
                        dispatch(forgotNewPasswordTC(email))

                    }}>Send Instructions</SuperButton></div>
                <div className={style.text}>Did you remember your password?</div>
                <div><SuperButton>Try logging in</SuperButton></div>
            </div>
        </div>
    )
}