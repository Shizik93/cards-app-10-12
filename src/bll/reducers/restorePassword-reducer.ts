import {Dispatch} from "redux";
import {NewPasswordAPI} from "../../API/NewPasswordAPI";

const initialState: initialStateType = {
    isRecovery: false,
    newPass: false,
    emailRecovery: '',
}
type initialStateType = {
    isRecovery: boolean
    newPass: boolean
    emailRecovery: string
}

export const restorePasswordReducer = (state: initialStateType = initialState, action: restorePasswordReducerActionsType): initialStateType => {
    switch (action.type) {
        case 'restorePassword-reducer/EMAIL-RECOVERY': {
            return {...state,emailRecovery:action.email}
        }
        case "restorePassword-reducer/SET-IS-RECOVERY":{
            return {...state,isRecovery:action.success}
        }
        case "restorePassword-reducer/SET-NEW-PASSWORD":{
            return {...state,newPass:action.newPass}
        }
        default:
            return state
    }
}
type restorePasswordReducerActionsType = emailRecoveryType | setIsRecoveryType | setNewPasswordType

const emailRecovery = (email: string) => {
    return {
        type: 'restorePassword-reducer/EMAIL-RECOVERY',
        email
    } as const

}
type emailRecoveryType = ReturnType<typeof emailRecovery>
const setIsRecovery = (success: boolean) => {
    return {
        type: 'restorePassword-reducer/SET-IS-RECOVERY',
        success
    } as const
}
type setIsRecoveryType = ReturnType<typeof setIsRecovery>
const setNewPassword = (newPass: boolean) => {
    return {
        type: 'restorePassword-reducer/SET-NEW-PASSWORD',
        newPass
    } as const
}
type setNewPasswordType = ReturnType<typeof setNewPassword>
export const forgotNewPasswordTC = (email: string) => (dispatch: Dispatch) => {
    NewPasswordAPI.forgotNewPassword(email).then((res) => {
        dispatch(setIsRecovery(res.data.success))
        dispatch(emailRecovery(email))
    })
}
export const newPasswordTC = (password: string, token: string) => (dispatch: Dispatch) => {
    NewPasswordAPI.setNewPassword(password, token).then(() => {
        dispatch(setNewPassword(true))

    })

}