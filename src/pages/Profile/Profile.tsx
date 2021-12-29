import React from "react";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../Header/Header";
import {logoutUserTC} from "../../bll/reducers/login-reducer";

export const Profile = () => {
    const dispatch = useDispatch()
    const name = useSelector((state: AppRootStateType) => state.login.name)
    const avatar = useSelector((state: AppRootStateType) => state.login.avatar)
    const isAuth = useSelector((state: AppRootStateType) => state.login.isAuth)
    if (!isAuth) {
        return (
            <Navigate to={PATH.LOGIN}/>
        )
    }
    return (
        <div>
            <div>Profile</div>
            <h3>{name}</h3>
            {avatar && <div><img src={avatar}/></div>}
            <SuperButton onClick={() => {
                dispatch(logoutUserTC())

            }}>Logout</SuperButton>
        </div>
    )
}