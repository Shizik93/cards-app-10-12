import {initial} from "./InitialData";
type AxiosForgotPasswordType = {
    success: boolean
}
export const NewPasswordAPI = {
    forgotNewPassword(email: string) {
        return initial.post<AxiosForgotPasswordType>('/auth/forgot', {
            email,
            from: 'AlexKayuda',
            message: `<div style="background-color: lime; padding: 15px">	error: string;password recovery link: 	}<a href='https://shizik93.github.io/cards-app-10-12/#/set-new-password/$token$'>link</a></div>`
        }, {})
    },
    setNewPassword(password: string,resetPasswordToken:string) {
        return initial.post('/auth/set-new-password', {
            password,
            resetPasswordToken,
        })
    }
}