import {NavLink} from "react-router-dom";
import SuperButton from "../common/c2-SuperButton/SuperButton";


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
    return (
        <div>
            <SuperButton><NavLink to={PATH.LOGIN}>Login </NavLink></SuperButton>
            <SuperButton><NavLink to={PATH.NEW_PASSWORD}>New-Password </NavLink></SuperButton>
            <SuperButton><NavLink to={PATH.PROFILE}>Profile </NavLink></SuperButton>
            <SuperButton> <NavLink to={PATH.REGISTRATION}>Registration </NavLink></SuperButton>
            <SuperButton> <NavLink to={PATH.TEST}>Test </NavLink></SuperButton>
            <SuperButton> <NavLink to={PATH.ERROR_404}>Error </NavLink></SuperButton>
            <SuperButton> <NavLink to={PATH.CHECK_EMAIL}>Check Email </NavLink></SuperButton>
        </div>
    )
}