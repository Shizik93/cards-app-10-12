import {NavLink} from "react-router-dom";

export const PATH = {
    ERROR_404: 'error404',
    LOGIN: 'login',
    NEW_PASSWORD: 'new-password',
    PROFILE: 'profile',
    REGISTRATION: 'registration',
    RESTORE_PASSWORD: 'restore-password',
    TEST: 'test',

}

export const Header = () => {
    return (
        <div>
            <NavLink to={PATH.LOGIN}>Login </NavLink>
            <NavLink to={PATH.NEW_PASSWORD}>New-Password </NavLink>
            <NavLink to={PATH.PROFILE}>Profile </NavLink>
            <NavLink to={PATH.REGISTRATION}>Registration </NavLink>
            <NavLink to={PATH.RESTORE_PASSWORD}> Restore-Password </NavLink>
            <NavLink to={PATH.TEST}>Test </NavLink>
            <NavLink to={PATH.ERROR_404}>Error </NavLink>
        </div>
    )
}