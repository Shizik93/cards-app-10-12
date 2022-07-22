import React, {useState} from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import style from './Login.module.css'
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import {Navigate, NavLink} from "react-router-dom";
import {PATH} from "../../Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {setLoginTC} from "../../bll/reducers/login-reducer";
import {AppRootStateType} from "../../bll/store";

export const Login = () => {
    const isAuth = useSelector((state: AppRootStateType) => state.login.isAuth)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)


    const login = () => {
        dispatch(setLoginTC(email, password, rememberMe))

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
                        onEnter={login}
                        value={email}
                        onChange={onChangeEmail}
                        type={'email'}
                        placeholder={'Email'}/>
                    </div>
                    <div><SuperInputText
                        onEnter={login}
                        value={password}
                        onChange={onChangePassword}
                        type={'password'}
                        placeholder={'Password'}/></div>
                    <SuperCheckbox
                        defaultChecked={rememberMe}
                        onChange={onChangeRememberMe}>

                        Remember me
                    </SuperCheckbox>
                </div>
                <div>
                    <NavLink to={PATH.RESTORE_PASSWORD}>Forgot Password</NavLink>
                </div>
                <div>
                    <SuperButton onClick={login}>Login</SuperButton></div>
                <div>Don't have an account?</div>
                <div>
                    <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
                </div>
            </div>
        </div>
    )
}