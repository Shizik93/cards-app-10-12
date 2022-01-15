import React, {useState} from "react";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../Header/Header";
import {logoutUserTC} from "../../bll/reducers/login-reducer";
import style from './profile.module.css'

export const Profile = () => {
    const dispatch = useDispatch()
    const [editableMode, setEditableMode] = useState(false)
    const name = useSelector((state: AppRootStateType) => state.login.name)
    const [userName, setUserName] = useState(name ? name : '')
    const avatar = useSelector((state: AppRootStateType) => state.login.avatar)
    const isAuth = useSelector((state: AppRootStateType) => state.login.isAuth)
    if (!isAuth) {
        return (
            <Navigate to={PATH.LOGIN}/>
        )
    }
    return (
        <div>

            <div className={style.profile}>

                {editableMode
                    ?
                    <input autoFocus={true} onChange={(e) => setUserName(e.currentTarget.value)} placeholder={userName}
                           onBlur={() => setEditableMode(false)}/>
                    : <h1 onDoubleClick={() => setEditableMode(true)}>{userName}</h1>}
                {avatar && <div><img alt={'avatar'} src={avatar}/></div>}
                <SuperButton className={style.button} onClick={() => {
                    dispatch(logoutUserTC())

                }}>Logout</SuperButton>


            </div>

        </div>
    )
}