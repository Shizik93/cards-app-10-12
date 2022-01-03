import {initial} from "./InitialData";
type AxiosForgotPasswordType = {
    success: boolean
}
export const NewPasswordAPI = {
    forgotNewPassword(email: string) {
        return initial.post<AxiosForgotPasswordType>('/auth/forgot', {
            email,
            from: 'AlexKayuda',
            message: `<div style="background-color: lime; padding: 15px"><a href='https://shizik93.github.io/cards-app-10-12/#/new-password/$token$'>Link</a></div>`
        }, {})
    },
    setNewPassword(password: string,resetPasswordToken:string) {
        return initial.post('/auth/set-new-password', {
            password,
            resetPasswordToken,
        })
    }
}