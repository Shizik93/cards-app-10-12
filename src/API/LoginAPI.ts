import { initial } from "./InitialData"

export const LoginAPI = {
    setLogin(email: string, password: string, rememberMe: boolean) {
        return initial.post('auth/login', {email, password, rememberMe})
    },
    me() {
        return initial.post('auth/me')

    },
    logout() {
        return initial.delete('auth/me')

    }
}