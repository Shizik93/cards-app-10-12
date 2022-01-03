import axios from "axios"


const initial=axios.create({
    baseURL:'https://neko-back.herokuapp.com/2.0',
    withCredentials:true
})

export const RegAPI={
    register(email:string,password:string){
        return initial.post('/auth/register',{email,password})
    }

}