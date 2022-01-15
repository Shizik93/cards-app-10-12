import {Dispatch} from "redux";
import {LoginAPI} from "../../API/LoginAPI";
import {setIsLoading} from "./app-reducer";

const initialState: initialStateType = {
    isAuth: false,
    _id: null,
    email: null,
    name: null,
    avatar: null,
    publicCardPacksCount: 0,
    error: ''
}
type initialStateType = {
    isAuth: boolean
    _id: string | null;
    email: string | null;
    name: string | null;
    avatar?: string | null;
    publicCardPacksCount: number; // количество колод
    error: string
}

export const loginReducer = (state: initialStateType = initialState, action: ReducerType): initialStateType => {
    switch (action.type) {
        case 'login-reducer/SET-LOGIN':
        case "login-reducer/LOGOUT-USER": {
            return {...state, ...action.data}
        }
        case 'login-reducer/SET-ERROR': {
            return {...state, error: action.error}
        }
        /*     case 'login-reducer/SET-USER-NAME':{
                 return {...state,name:action.name}
             }
             case 'login-reducer/SET-AVATAR':{
                 return {...state,avatar:action.avatar}
             }*/

        default:
            return state
    }
}
type ReducerType = setLoginType | logoutUserType | setErrorType/*|setUserNameType|setAvatarType*/
const setLogin = (data: initialStateType) => {
    return {
        type: 'login-reducer/SET-LOGIN',
        data
    } as const
}
type setLoginType = ReturnType<typeof setLogin>
export const setLoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    LoginAPI.setLogin(email, password, rememberMe).then((res) => {
        dispatch(setLogin({
            isAuth: true,
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            avatar: res.data.avatar ? res.data.avatar : null,
            publicCardPacksCount: res.data.publicCardPacksCount,
            error: res.data.error
        }))
    }).catch(() => {
        dispatch(setError('Invalid email or password!'))

    }).finally(() => dispatch(setIsLoading(false)))

}

const logoutUser = () => {
    return {
        type: 'login-reducer/LOGOUT-USER',
        data: initialState
    } as const
}
type logoutUserType = ReturnType<typeof logoutUser>
export const logoutUserTC = () => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    LoginAPI.logout().then((res) => {
        dispatch(logoutUser())
    }).catch((err) => {
        console.dir(err)
    }).finally(() => dispatch(setIsLoading(false)))

}
export const authMeTC = () => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))
    LoginAPI.me().then((res) => {
        dispatch(setLogin({
            isAuth: true,
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            avatar: res.data.avatar ? res.data.avatar : null,
            publicCardPacksCount: res.data.publicCardPacksCount,
            error: res.data.error
        }))
    }).catch((err) => {
        console.dir(err)
    }).finally(() => {
        dispatch(setIsLoading(false))
    })
}
export const setError = (error: string) => {
    return {
        type: 'login-reducer/SET-ERROR',
        error
    } as const
}
type setErrorType = ReturnType<typeof setError>
/*

export const setUserName=(name:string)=>{
    return{
        type:'login-reducer/SET-USER-NAME',
        name
    } as const
}
type setUserNameType=ReturnType<typeof setUserName>

export const setAvatar=(avatar:any)=>{
    return{
        type:'login-reducer/SET-AVATAR',
        avatar
    } as const
}
type setAvatarType=ReturnType<typeof setAvatar>*/
