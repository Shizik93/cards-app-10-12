import { initial } from "./InitialData"

export const RegAPI={
    register(email:string,password:string){
        return initial.post('/auth/register',{email,password})
    }

}