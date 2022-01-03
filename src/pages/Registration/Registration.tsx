import React, {useState} from "react";
import style from './Registration.module.css'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {RegisteredUserTC, setRegistrationError} from "../../bll/reducers/registration-reducers";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../Header/Header";

export const Registration = () => {
    const dispatch = useDispatch()
    const error = useSelector((state: AppRootStateType) => state.registration.error)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)

    }
    const onChangeConfirmPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setConfirmPassword(e.currentTarget.value)

    }
    const fetchData = () => {
        if (password !== confirmPassword) {
            dispatch(setRegistrationError('Password confirmation does not match!'))
        } else {
            dispatch(RegisteredUserTC(email, password))
            return (<Navigate to={PATH.LOGIN}/>)
        }
    }

    return (
        <div>
            <div className={style.registration}>
                <h1>It-incubator</h1>
                <h2>Sign Up</h2>
                <div>

                    <div><SuperInputText value={email}
                                         type={'email'}
                                         onChange={onChangeEmail}
                                         placeholder={'Email'}/></div>
                    <div><SuperInputText
                        value={password} onChange={onChangePassword}
                        type={'password'}
                        placeholder={'Password'}/></div>
                    <div><SuperInputText
                        value={confirmPassword}
                        type={'password'}
                        onChange={onChangeConfirmPassword}
                        placeholder={'Confirm password'}/></div>


                </div>
                <div className={style.error}>{error && error}</div>
                <div>
                    <SuperButton>Cancel</SuperButton>
                    <SuperButton onClick={fetchData}>Register</SuperButton>
                </div>

            </div>
        </div>
    )
}