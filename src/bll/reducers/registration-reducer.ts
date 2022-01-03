import {Dispatch} from "redux";
import {RegAPI} from "../../API/RegAPI";

const initialState: initialStateType = {
    error: '',
    isRegistered: false,
}

type initialStateType = {
    error: string | null
    isRegistered: boolean

}

export const registrationReducer = (state: initialStateType = initialState, action: registrationReducersActionsType): initialStateType => {
    switch (action.type) {
        case 'registration-reducers/SET-REGISTERED-SUCCESSFULLY': {
            return {...state, isRegistered: action.successful}
        }
        case 'registration-reducers/SET-ERROR': {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}
type registrationReducersActionsType = setRegisteredSuccessfullyType | setErrorType
const setRegisteredSuccessfully = () => {
    return {
        type: "registration-reducers/SET-REGISTERED-SUCCESSFULLY",
        successful: true
    } as const

}
type setRegisteredSuccessfullyType = ReturnType<typeof setRegisteredSuccessfully>
export const setRegistrationError = (error: string) => {
    return {
        type: 'registration-reducers/SET-ERROR',
        error
    } as const
}
type setErrorType = ReturnType<typeof setRegistrationError>
export const RegisteredUserTC = (email: string, password: string) => (dispatch: Dispatch) => {
    RegAPI.register(email, password).then(() => {
        dispatch(setRegisteredSuccessfully())
    })
        .catch(() => {
            dispatch(setRegistrationError("Email or password are invalid. Please, try registration again"))
        })

}

