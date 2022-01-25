import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../bll/store";
import style from './Header.module.css'
import profileImage from '../images/Union (Stroke).svg'
import cardImage from '../images/Group 608.svg'


export const PATH = {
    ERROR_404: '/error404',
    LOGIN: '/login',
    RESTORE_PASSWORD: '/restore-password',
    PROFILE: '/profile',
    REGISTRATION: '/registration',
    TEST: '/test',
    CHECK_EMAIL: '/check-email',
    NEW_PASSWORD: '/new-password/:tokenId',
    CARDS_PACKS:'/cards-packs',
    CARDS:'/cards',

}

export const Header = () => {
    const isAuth = useSelector((state: AppRootStateType) => state.login.isAuth)
    return (
        <div className={style.main}>
            <div className={style.packsList}>
                <NavLink to={PATH.LOGIN}> <img src={cardImage}/>Cards Packs</NavLink>
            </div>
            <div className={style.profile}>
                <NavLink to={PATH.PROFILE}><img src={profileImage}/>Profile</NavLink>
            </div>
        </div>
    )
}