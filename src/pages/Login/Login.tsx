import React, {useState} from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import style from './Login.module.css'
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {setError, setLoginTC} from "../../bll/reducers/login-reducer";
import {AppRootStateType} from "../../bll/store";


export const Login = () => {
    const error = useSelector((state: AppRootStateType) => state.login.error)
    const isAuth = useSelector((state: AppRootStateType) => state.login.isAuth)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)


    const login = () => {
        if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            dispatch(setError('Invalid email address'))
        } else {
            dispatch(setError(''))
            dispatch(setLoginTC(email, password, rememberMe))

        }
    }
    const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)

    }
    const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)

    }
    const onChangeRememberMe = (e: React.FormEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)

    }
    const changeShowPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setShowPassword(e.currentTarget.checked)

    }
    if (isAuth) {
        return (<Navigate to={PATH.PROFILE}/>)
    }
    return (
        <div>
            <div className={style.login}>
                <h1>It-incubator</h1>
                <h2>Sign In</h2>
                <div>

                    <div><SuperInputText
                        className={style.superInput}
                        onEnter={login}
                        value={email}
                        onChange={onChangeEmail}
                        type={'email'}
                        placeholder={'Email'}/>
                    </div>


                    <div className={style.passwordBlock}>
                        <SuperInputText className={`${style.password}`}
                                        onEnter={login}
                                        value={password}
                                        onChange={onChangePassword}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder={'Password'}/>
                        <input className={style.checkboxEye}
                               type={'checkbox'}
                               defaultChecked={showPassword}
                               onClick={changeShowPassword}/>
                    </div>
                    <div>{error}</div>


                    <SuperCheckbox
                        className={style.checkbox}
                        defaultChecked={rememberMe}
                        onChange={onChangeRememberMe}>
                        Remember me
                    </SuperCheckbox>
                </div>


                <div>
                    <NavLink to={PATH.RESTORE_PASSWORD}>Forgot Password</NavLink>
                </div>
                <div>
                    <SuperButton className={style.superButton} onClick={login}>Login</SuperButton></div>
                <div>Don't have an account?</div>
                <div>
                    <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
                </div>
            </div>
        </div>
    )
}