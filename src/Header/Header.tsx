import {NavLink} from "react-router-dom";
import SuperButton from "../common/c2-SuperButton/SuperButton";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";


export const PATH = {
    ERROR_404: '/error404',
    LOGIN: '/login',
    NEW_PASSWORD: '/new-password',
    PROFILE: '/profile',
    REGISTRATION: '/registration',
    TEST: '/test',
    CHECK_EMAIL: '/check-email'

}

export const Header = () => {
    const isAuth = useSelector((state: AppRootStateType) => state.login.isAuth)
    return (
        <div>
            {!isAuth && <SuperButton><NavLink to={PATH.LOGIN}>Login </NavLink></SuperButton>}
            {isAuth && <SuperButton><NavLink to={PATH.PROFILE}>Profile </NavLink></SuperButton>}
        </div>
    )
}