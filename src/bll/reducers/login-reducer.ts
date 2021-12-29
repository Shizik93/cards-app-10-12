import {Dispatch} from "redux";
import {LoginAPI} from "../../API/LoginAPI";

const initialState: initialStateType = {
    isAuth:false,
    _id: null,
    email: null,
    name: null,
    avatar: null,
    publicCardPacksCount: 0,
    error: ''
}
type initialStateType = {
    isAuth:boolean
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
        default:
            return state
    }
}
type ReducerType = setLoginType|logoutUserType
const setLogin = (data: initialStateType) => {
    return {
        type: 'login-reducer/SET-LOGIN',
        data
    } as const
}
type setLoginType = ReturnType<typeof setLogin>
export const setLoginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    LoginAPI.setLogin(email, password, rememberMe).then((res) => {
        console.dir(res)
        dispatch(setLogin({
            isAuth:true,
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            avatar: res.data.avatar?res.data.avatar:null,
            publicCardPacksCount: res.data.publicCardPacksCount,
            error: res.data.error
        }))
    })

}

const logoutUser=()=>{
    return{
        type:'login-reducer/LOGOUT-USER',
        data:initialState
    }as const
}
type logoutUserType=ReturnType<typeof logoutUser>
export const logoutUserTC=()=>(dispatch:Dispatch)=>{
    LoginAPI.logout().then((res)=>{
        console.dir(res)
        dispatch(logoutUser())
    })

}
export const authMeTC=()=>(dispatch:Dispatch)=>{
    LoginAPI.me().then((res)=>{
        console.dir(res)
        dispatch(setLogin({
            isAuth:true,
            _id: res.data._id,
            email: res.data.email,
            name: res.data.name,
            avatar: res.data.avatar?res.data.avatar:null,
            publicCardPacksCount: res.data.publicCardPacksCount,
            error: res.data.error
        }))
    })
}